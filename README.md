# varundelft.github.io

Personal website built with [Astro](https://astro.build). Clean, minimal — portfolio + blog.

## Stack

- **Astro 4** — static site generator
- **MDX** — for blog posts
- **Lora + DM Sans** — typography
- Deployed to **GitHub Pages** via GitHub Actions

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the build locally
```

## Project structure

```
src/
  pages/
    index.astro       # Home
    about.astro       # About / bio
    work.astro        # Portfolio & experience
    writing.astro     # Blog index
    research.astro    # Publications
    contact.astro     # Contact
  layouts/
    Base.astro        # Nav + footer shell
    Post.astro        # Blog post layout
  content/
    blog/             # Add .md or .mdx files here
  styles/
    global.css        # Design tokens + base styles
public/
  favicon.svg
```

## Writing a new post

Create a file in `src/content/blog/` with this frontmatter:

```markdown
---
layout: ../../layouts/Post.astro
title: "Your post title"
description: "One-sentence summary"
date: 2025-01-15
tags: ["java", "aws"]
---

Your content here.
```

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

Make sure GitHub Pages is set to **GitHub Actions** as the source in your repo settings.
