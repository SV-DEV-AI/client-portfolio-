# URL Migration Plan: morphedstudios.in to www.morphedstudios.co.in

**EXTERNAL BLOCKER: The old domain (morphedstudios.in) currently shows a "Coming Soon" page and is hosted outside of the current Next.js environment (or is not yet pointing to this application). To properly execute the SEO migration, you must perform one of the following actions.**

## Option A: Point the old domain to the new hosting (Recommended for Vercel/Netlify)

1. In your hosting provider (e.g., Vercel), add `morphedstudios.in` and `www.morphedstudios.in` as custom domains for this project.
2. Update the DNS records for `morphedstudios.in` to point to the new hosting provider.
3. The Next.js `next.config.ts` has already been updated to automatically 301 redirect all requests originating from `morphedstudios.in` to `https://www.morphedstudios.co.in/` while preserving the URL path.

## Option B: Configure redirects on the old hosting provider

If you must keep the old hosting active for `morphedstudios.in`:
1. Access the web server configuration (e.g., `.htaccess` for Apache, `nginx.conf` for Nginx) or the domain registrar's redirect settings.
2. Implement a wildcard 301 redirect. 

**Apache (.htaccess) Example:**
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(?:www\.)?morphedstudios\.in$ [NC]
RewriteRule ^(.*)$ https://www.morphedstudios.co.in/$1 [L,R=301]
```

## URL Mapping

Since this is a full domain change, we recommend a 1-to-1 mapping for all paths. If specific old paths no longer exist on the new site, Next.js will automatically return a 404, which is the correct behavior for removed pages.

| Old URL | New URL | Redirect Type |
| --- | --- | --- |
| `https://morphedstudios.in/` | `https://www.morphedstudios.co.in/` | 301 Permanent |
| `https://morphedstudios.in/about` | `https://www.morphedstudios.co.in/about` | 301 Permanent |
| `https://morphedstudios.in/services` | `https://www.morphedstudios.co.in/services` | 301 Permanent |
| `https://morphedstudios.in/work` | `https://www.morphedstudios.co.in/work` | 301 Permanent |
| `https://morphedstudios.in/contact` | `https://www.morphedstudios.co.in/contact` | 301 Permanent |
| `https://morphedstudios.in/work/*` | `https://www.morphedstudios.co.in/work/*` | 301 Permanent |
