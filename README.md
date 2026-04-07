# Four Roots Ranch

Squarespace migration scaffold for [www.fourrootsranch.com](https://www.fourrootsranch.com), rebuilt as an Astro site and prepared for GitHub Pages hosting.

## Stack

- Astro static site
- GitHub Pages deployment through GitHub Actions
- Markdown and JSON content
- Decap CMS admin scaffold for friendly editing

## Local setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local dev URL shown by Astro.

## Before launch

- Replace the placeholder form endpoints in [src/data/site-settings.json](/Users/katecarr/Documents/New project/src/data/site-settings.json)
- Replace the placeholder PayPal donation URL in [src/data/site-settings.json](/Users/katecarr/Documents/New project/src/data/site-settings.json)
- Update the external storefront URL in [src/data/site-settings.json](/Users/katecarr/Documents/New project/src/data/site-settings.json)
- Set the correct GitHub repo name in [public/admin/config.yml](/Users/katecarr/Documents/New project/public/admin/config.yml)
- Provide the real photos, logos, uploads, and product imagery
- Configure GitHub Pages to use the `main` branch workflow and the custom domain `www.fourrootsranch.com`
- Point DNS at GitHub Pages after preview review is complete

## Content structure

- `src/content/pages`: long-form page copy
- `src/content/news`: sanctuary updates and stories
- `src/data/animals.json`: structured animal-group cards
- `src/data/faqs.json`: FAQ content
- `src/data/site-settings.json`: navigation, links, forms, and shared site settings

## CMS note

The repo includes a Decap CMS admin scaffold in [public/admin](/Users/katecarr/Documents/New project/public/admin). For production GitHub auth, you will still need a compatible authentication flow or proxy for the GitHub backend.
