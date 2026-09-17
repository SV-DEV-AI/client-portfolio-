const fs = require('fs');
const path = require('path');

const NEXT_DIR = path.join(__dirname, '.next', 'server', 'app');

function checkFile(filePath, expectedCanonical, expectedDomain) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND';
  
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NOT FOUND';
  
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : 'NOT FOUND';
  
  let errors = [];
  if (canonicalUrl !== expectedCanonical) {
    errors.push(`Canonical URL mismatch: expected ${expectedCanonical}, got ${canonicalUrl}`);
  }
  if (content.includes('morphed.studio')) {
    errors.push(`Found morphed.studio in output`);
  }
  if (!content.includes(expectedDomain)) {
    errors.push(`Expected domain ${expectedDomain} not found`);
  }
  
  console.log(`\n=== Checking ${path.basename(filePath)} ===`);
  console.log(`Canonical: ${canonicalUrl}`);
  console.log(`H1: ${h1}`);
  console.log(`Title: ${title}`);
  if (errors.length > 0) {
    console.error(`Errors for ${filePath}:\n  - ` + errors.join('\n  - '));
  } else {
    console.log('✅ Passed');
  }
}

// Map files to their expected canonical URLs
const checks = [
  { file: 'page.html', canonical: 'https://www.morphedstudios.co.in/' },
  { file: 'services.html', canonical: 'https://www.morphedstudios.co.in/services' },
  { file: 'about.html', canonical: 'https://www.morphedstudios.co.in/about' },
  { file: 'contact.html', canonical: 'https://www.morphedstudios.co.in/contact' },
  { file: 'work.html', canonical: 'https://www.morphedstudios.co.in/work' },
  { file: 'work/p1.html', canonical: 'https://www.morphedstudios.co.in/work/p1' }, // Test a project page
];

console.log('Running SEO verification script...');
checks.forEach(check => {
  const filePath = path.join(NEXT_DIR, check.file);
  checkFile(filePath, check.canonical, 'www.morphedstudios.co.in');
});

// Check sitemap and robots
const sitemapPath = path.join(NEXT_DIR, 'sitemap.xml.body');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  if (sitemapContent.includes('morphed.studio')) {
    console.error('❌ Found morphed.studio in sitemap!');
  } else if (sitemapContent.includes('www.morphedstudios.co.in')) {
    console.log('✅ Sitemap uses correct domain');
  } else {
    console.error('❌ Sitemap does not contain the new domain!');
  }
}

const robotsPath = path.join(NEXT_DIR, 'robots.txt.body');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (robotsContent.includes('morphed.studio')) {
    console.error('❌ Found morphed.studio in robots.txt!');
  } else if (robotsContent.includes('www.morphedstudios.co.in')) {
    console.log('✅ robots.txt uses correct domain');
  } else {
    console.error('❌ robots.txt does not contain the new domain!');
  }
}
