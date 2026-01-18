# Sarker Sunzid Mahmud | Portfolio

This repository contains the source code for my personal portfolio website, built with React and Vite and deployed on GitHub Pages.

The goal of this project is to present my professional experience, projects, and personal journey in a clean, fast, and maintainable way while following solid software engineering principles.

🌐 Live Website  
https://sunzid02.github.io/safat/
---


## Project Structure

```text
src/
 ├─ model/        # Data models (experience, projects, travel, etc.)
 ├─ controller/   # Logic and data mapping
 ├─ view/
 │   ├─ sections/ # Page sections (Hero, Experience, Projects, Travel)
 │   └─ ui/       # Reusable UI components
 ├─ assets/       # Images and static assets
 └─ main.tsx
```

This structure keeps the project readable and easy to extend.

---

## Key Features

- Responsive layout for desktop and mobile
- Dark and light theme toggle
- Flipbook style sections for Projects and Travel
- Smooth animations on scroll
- Clean navigation using HashRouter
- Data driven content using models
- Optimized build for GitHub Pages

---

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Deployment

This project is deployed using GitHub Pages.

Base path is configured for GitHub Pages in `vite.config.ts`:

```ts
base: "/"
```

Deployment runs automatically on push to the `main` branch using GitHub Actions.

---
