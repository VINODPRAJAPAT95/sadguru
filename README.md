# Sadguru Food Processing Pvt. Ltd. — Corporate Website

A premium, multi-brand corporate website built with React, Vite, Tailwind CSS,
React Router, Framer Motion and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/images/   → place real logos & photos here to replace placeholders
  components/       → Navbar, Footer, WhatsAppButton, Hero, cards, FAQ, etc.
  pages/            → one file per route (Home, About, Brands, Services, ...)
  data/             → brands.js, services.js, faqs.js, team.js, jobs.js, values.js
  config.js         → company info, contact details, WHATSAPP_NUMBER
  App.jsx           → all routes
  main.jsx          → app entry point
  index.css         → Tailwind + global styles
```

## Customizing

- **Company logo & brand logos**: currently a styled "S" monogram is used in
  the Navbar/Footer. Drop real logo files into `src/assets/images/` and swap
  them into `Navbar.jsx` / `Footer.jsx`.
- **WhatsApp number**: edit `WHATSAPP_NUMBER` in `src/config.js`.
- **Brand content, products, categories, gallery**: edit `src/data/brands.js`.
  All four brand pages (`BrandOne.jsx` – `BrandFour.jsx`) read directly from
  this file, so updating the data updates the live pages.
- **Team, jobs, services, FAQs**: edit the matching files in `src/data/`.
- **Colors**: edit the `primary` / `charcoal` palettes in `tailwind.config.js`.
- **Fonts**: Headings use the font stack `"Cooper Black", Georgia, serif` +
  Manrope (body font, loaded from Google Fonts). Cooper Black is a commercial
  font and is **not** bundled with this project — if it's installed on a
  visitor's device the browser will use it, otherwise it falls back to
  Georgia (serif). To have Cooper Black render for everyone, purchase a
  license and self-host it (e.g. add `@font-face` rules pointing to your own
  `.woff2` files in `src/index.css`), or license an official web-font version
  and add it via `<link>` in `index.html`. Update `fontFamily.display` in
  `tailwind.config.js` accordingly.
- **Images**: all photography is currently sourced from Unsplash as
  placeholders. Replace `src`/`heroImage`/`cardImage`/`gallery` URLs in
  `src/data/brands.js` (and inline `<img>` sources in pages) with your own
  assets in `src/assets/images/` once available.

## Routes

```
/
/about
/about/our-story
/about/our-team
/about/privacy-policy
/brands
/brands/brand-1
/brands/brand-2
/brands/brand-3
/brands/brand-4
/services
/career
/contact
* (404)
```
