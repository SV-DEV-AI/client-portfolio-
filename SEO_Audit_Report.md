# Morphed Studios SEO Audit & Fix Report

## 1. Domain & Canonical URLs
* **Issue:** The site erroneously output canonical URLs and Open Graph meta tags pointing to `https://morphed.studio/` instead of the preferred domain `https://www.morphedstudios.co.in/`.
* **Fixes Applied:**
  * Updated `metadataBase` in `src/app/layout.tsx` to `https://www.morphedstudios.co.in`.
  * Added specific `canonical` alternates to `layout.tsx` files for `/about`, `/services`, `/contact`, and `/work` pages.
  * Added `generateMetadata` function in `src/app/work/[slug]/page.tsx` to automatically inject the proper canonical URL for every individual project page.
  * Replaced `https://morphed.studio` in the JSON-LD structured data in `src/app/layout.tsx`.
* **Before / After Example (Homepage):**
  * *Before:* `<link rel="canonical" href="https://morphed.studio">`
  * *After:* `<link rel="canonical" href="https://www.morphedstudios.co.in">`

## 2. Page Titles, Descriptions, and Headings
* **Issue:** Homepage lacked an H1. Service and contact pages had generic titles. Project pages repeated the `/work` generic title.
* **Fixes Applied:**
  * Added an `sr-only` descriptive H1 to the `HeroShowreel.tsx` component on the homepage so search engines understand the core proposition without altering the visual design.
  * Created dedicated `layout.tsx` files (or updated existing ones) for `/services`, `/about`, and `/contact` with descriptive, non-stuffed titles and meta descriptions.
  * Updated `src/app/work/[slug]/page.tsx` to dynamically generate unique titles and descriptions based on project data (e.g., `<title>Zee Media Launch | Zee Media Corporation | Morphed Studios</title>`).
* **Before / After Example (Project `p1`):**
  * *Before:* `<title>Our Work | Morphed Studio</title>`
  * *After:* `<title>Zee Media Launch | Zee Media Corporation</title>`

## 3. Sitemap & Robots.txt
* **Issue:** `robots.txt` and `sitemap.ts` contained references to the wrong domain.
* **Fixes Applied:**
  * Updated `baseUrl` in `src/app/sitemap.ts` to `https://www.morphedstudios.co.in`.
  * Changed the sitemap directive in `src/app/robots.ts` to reflect the correct URL.

## 4. Old Domain Redirects (`morphedstudios.in`)
* **Issue:** The old domain does not permanently redirect, showing a "Coming Soon" page instead. This is causing duplicate index issues.
* **Fixes Applied:**
  * Added a `redirects` block to `next.config.ts` to automatically 301 redirect all incoming paths from `morphedstudios.in` to `https://www.morphedstudios.co.in/`.
  * **External Blocker & Next Steps:** Because the old domain is currently pointing away from this repository, these redirects will only work if you point the old domain to this Next.js app (e.g., by adding `morphedstudios.in` as a domain in Vercel). I have documented the migration process and provided a URL mapping file in `URL_MIGRATION_INSTRUCTIONS.md` at the root of the project.

## 5. Testing & Validation
* A custom Node.js script was run against the Next.js production build (`.next/server/app/`) to verify that the generated HTML contained the correct `canonical` URLs and `morphed.studio` no longer appeared in metadata.
* The Next.js build completed successfully, and automated tests verified all indexable URLs.

## External Actions Required (Search Console & Profiles)
To finalize this SEO migration, please complete the following steps outside of this repository:
1. **Hosting Update:** Point `morphedstudios.in` to the new Next.js hosting (Vercel) to activate the 301 redirects, OR configure server-side redirects on the old host using the instructions in `URL_MIGRATION_INSTRUCTIONS.md`.
2. **Google Search Console:**
   * Verify ownership of **both** domains (`morphedstudios.in` and `www.morphedstudios.co.in`).
   * Use the **Change of Address** tool in the Search Console for `morphedstudios.in` to formally notify Google of the domain move.
   * Submit the new sitemap (`https://www.morphedstudios.co.in/sitemap.xml`) to the new domain's property.
   * Inspect the homepage and a few project URLs using the URL Inspection Tool and request indexing.
3. **LinkedIn Update:** Manually update the company's LinkedIn profile to link to `https://www.morphedstudios.co.in` instead of the old `.in` domain.
