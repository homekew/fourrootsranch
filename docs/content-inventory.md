# Content Inventory

This migration scaffold is ready for real content and assets to replace the placeholders or paraphrased copy below.

## Still needed from Squarespace

- Final logo assets and brand marks
- Photography for homepage, animals, art, and community sections
- Product images and external storefront URL
- Exact donation links and hosted form endpoints
- Any PDFs, printable guides, or downloadable resources
- Historic news posts that should remain public

## Current route map in this repo

- `/`
- `/animals`
- `/rehome`
- `/donate`
- `/welcome-home`
- `/news`
- `/news/[slug]`
- `/community`
- `/faq`
- `/partner-with-us`
- `/tours`
- `/tour` redirect
- `/contact`
- `/art`
- `/shop`

## Suggested migration pass

1. Copy or export current Squarespace page text and compare it to the markdown files in `src/content/pages`.
2. Replace animal-group placeholders with real resident spotlights if desired.
3. Add images to `public/images/uploads` and wire them into page sections.
4. Confirm which legacy URLs need additional alias pages or redirect handling before launch.
