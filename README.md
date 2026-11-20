# Almost Famous Tattoo & Piercings – website

React + Vite single-page website for Almost Famous Tattoo & Piercings, 1170 Forest Ave, Portland, ME 04103.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally to test
```

## Deploy (Vercel or Cloudflare Pages)
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables needed. No client-side routes (single page with #anchors), so no rewrite rules required.

## After deploying
1. Add the real HTTPS URL to `index.html` as `<link rel="canonical" href="...">` and as `"url"` inside the JSON-LD block.
2. Create `public/sitemap.xml` with that URL and add `Sitemap: <url>/sitemap.xml` to `public/robots.txt`.
3. Optional: verify the site in Google Search Console. Adding the site to the Google Maps listing is done by the verified owner in the Business Profile; Google decides approval.

## Editing content
All business facts (phone, address, hours, services, gallery captions) live in `src/data/businessInfo.js`.
Hours and address in the JSON-LD block of `index.html` must be kept in sync by hand.

## Items to verify with the owner
- Exact hours (holiday hours may differ) and that 12–9 pm daily is correct
- Owner authorisation to publish this as the official website, and permission to use the photos and logo
- Service list wording (colour, black & grey, traditional/flash, custom, piercings) and whether to mention walk-ins, aging/ID rules, aftercare or pricing
- Whether to add an email address, Instagram, or booking link (none included because none were supplied)
- Facebook link is the one shown on the Google listing
