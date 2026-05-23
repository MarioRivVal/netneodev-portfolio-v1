# CLAUDE.md — netneodev_v1_2024_react

## Project

Personal portfolio of **Mario Valverde** (alias NETNEO / MarioRivVal on GitHub).
Live: https://portfolio.netneo.es/

## Stack

- React 18 + Vite 5 (no React Router — SPA with modal overlays)
- Plain JavaScript (no TypeScript in this repo)
- EmailJS (`@emailjs/browser`) for contact form
- CSS custom properties (`src/index.css`) — no CSS framework, no Tailwind
- Font: Syne (Google Fonts)

## Project structure

```
src/
  App.jsx            — root, owns modal state
  main.jsx
  index.css          — global styles + CSS variables
  functions.js       — shared utils (getDataset, smoothScrolling, useTiltEffect, getCurrentYear)
  components/        — one component per file, no subfolders
  data/
    data.js          — tools[], education[], workExperience[], languages[], testimonials[]
    projects.js      — projectsData[]
    blog.js          — blog entries
    post.js          — post entries
public/
  img/               — all images (referenced by string key in data files)
  documents/
```

## Key patterns

**Modal system** — `App.jsx` holds `isModalActive` + `modalSectionSelected`
state. `handleOpenModal(e)` reads `data-section` or `data-title` from the
clicked element via `getDataset()`. Modal renders one of: `<BlogContainer>`,
`<ProjectsContainer>`, `<PostContainer>`.

**Data mapping** — all content lives in `src/data/`. Components import arrays
and `.map()` over them. To add a project: push an object to `projectsData` in
`src/data/projects.js`. To add a tool: push to `tools[]` in `src/data/data.js`.

**Images** — stored in `public/img/`. Referenced in data files as short string
keys (e.g. `img: "gastro"`). Components build the actual `src` path from these
keys.

**Tilt effect** — `useTiltEffect(selector)` custom hook in `functions.js`, uses
native DOM events.

## Currently disabled (commented out in App.jsx)

- `<TestimonialsSection />` — data exists in `data.js`
- `<FormSection />` — EmailJS wired, disabled for now

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # build to dist/
npm run preview  # preview dist/
npm run lint     # ESLint
```

## CSS variables (design tokens)

```
--black-color: #070911
--white-color: #f9fafb
--blue-color: #5968b2
--pink-color: #f441a5
--light-blue-color: #759fc7
--green-color: #68b8b1
--yellow-color: #ffeb3b
```

## Owner profile

Mario Valverde — Backend Developer at VML The Cocktail (2025–present), Freelance
dev at netneo.es (2022–present). Languages: Italian C2, Spanish C2, English C1,
Portuguese C1. Key techs: NestJS, Next.js, React, TypeScript, Docker, Azure,
MySQL, MongoDB.
