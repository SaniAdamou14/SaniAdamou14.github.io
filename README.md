# Mahamane Sani Adamou Mahamane — Personal Portfolio

Live site: **https://saniadamou14.github.io**

A bilingual (English/French), fully responsive personal portfolio built with plain HTML, CSS and JavaScript — no build step, no framework, no dependencies. Showcases my background as a full-stack developer and Computer Science candidate, my professional and academic projects, certifications, and how to get in touch, ahead of 2027 master's-degree and job/internship applications.

## Highlights

- 🌓 Dark/light theme toggle (persisted, respects system preference by default)
- 🌐 English/French language toggle (persisted), all copy driven from a single content source
- 🧩 Filterable project grid (All / Professional / AI & ML / Security)
- 📱 Fully responsive, accessible, keyboard-friendly navigation
- ⚡ Zero build tools, zero runtime dependencies — just static files

## Tech stack

- HTML5 (semantic markup)
- CSS3 (custom properties, `color-mix`, CSS Grid/Flexbox, no framework)
- Vanilla JavaScript (`IntersectionObserver` for scroll reveal/active nav, `localStorage` for theme/language persistence)

## Project structure

```
.
├── index.html          # Page structure/skeleton (content injected by JS)
├── css/
│   └── style.css       # All styling, theming and responsive rules
├── js/
│   ├── content.js       # Single source of truth for all copy (EN/FR) and profile links
│   └── main.js          # Rendering, theming, language switching, interactions
├── assets/
│   ├── favicon.svg
│   └── img/
│       └── profile.jpg
└── README.md
```

## Running locally

No build step is required. Any static file server works, for example:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` directly in a browser.

## Deployment

Served directly via **GitHub Pages** from the `main` branch of this repository (special repo name `SaniAdamou14.github.io` — GitHub serves it at the account's root domain automatically, no extra configuration needed).

## Updating content

All page copy (both languages), skills, experience, education, projects and certifications live in [`js/content.js`](js/content.js) as a single structured object — update the data there and the page re-renders automatically, no HTML edits required.

## Contact

- Email: saniadamou778@gmail.com
- LinkedIn: [linkedin.com/in/sani-adamou](https://www.linkedin.com/in/sani-adamou/)
- GitHub: [@SaniAdamou14](https://github.com/SaniAdamou14)
- Credly: [credly.com/users/sani-adamou](https://www.credly.com/users/sani-adamou)

## License

© Mahamane Sani Adamou Mahamane. All rights reserved. This repository showcases personal work; please do not reuse the design or copy without permission.
