# Four Roots Ranch — fourrootsranch.com

The website for Four Roots Ranch Animal Sanctuary, a 501(c)(3) family-run animal sanctuary in Bend, Oregon.

A forever home where second chances grow old.

## Stack

- Plain HTML, CSS, and a small amount of vanilla JS — no framework, no build step
- Hosted on GitHub Pages from this repo
- DNS managed via Cloudflare
- Custom domain configured via the `CNAME` file

## Files

```
.
├── index.html         Homepage
├── scenes.html        The herd (photo gallery)
├── palette.html       Brand palette reference
├── 404.html           Not-found page
├── CNAME              Custom domain (fourrootsranch.com)
├── robots.txt         Search engine crawler config
├── sitemap.xml        Search engine sitemap
├── images/            All site photography
└── README.md          This file
```

## Deployment

Files in this repo are served by GitHub Pages. To enable:

1. Repo Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main`, folder: `/ (root)`
4. Custom domain: `fourrootsranch.com` (already set via the `CNAME` file)
5. Enforce HTTPS: on

In Cloudflare DNS, point the apex record at GitHub Pages IPs:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   homekew.github.io
```

## Editing

To update the site, edit the HTML files locally and push to the `main` branch. GitHub Pages rebuilds automatically (usually within a minute).

Common updates:

- **Add a new resident profile:** edit `scenes.html` and add to the gallery grid
- **Update the donate link:** find every reference to `givebutter.com/...` and update
- **Swap a photo:** drop the new file into `/images/` and update the `<img src="">` reference

## Brand

- Primary headline color: `#5D5646` (olive)
- Body text: `#4D4C4B` (charcoal)
- CTAs: `#3E5974` (navy)
- Accent: `#9A7A61` (tan, used sparingly)
- Backgrounds: `#FFFFFF` (white) and `#F7F5EF` (paper)
- Borders/dividers: `#EEEAE2` (linen)

Headlines: Spectral (Google Fonts)
Body: Open Sans (Google Fonts)

See `palette.html` for the full brand reference.

## Contact

info@fourrootsranch.com
