---
title: 'Custom Fonts with Tailwind CSS in NextJS'
date: '2022-01-13'
tags:
  - typography
  - tailwind
publish: false
---

There isn't an official guide on applying custom fonts with TailwindCSS in NextJS site. It took a while to experiment but turns out it's quite easy to do it yourself. I'm sharing my setup.

# Local Font

```
- pages
-- _app.tsx
- public
-- styles
---- fonts
------ font-medium.woff2
------ font-bold.woff2
- tailwind.config.js
```

# @Fontsource

Fontsource provide a self-hosting alternative to Google Fonts, as you include the font as a dependency package. It brings significant performance gain as it no longer requires you to load font from third-party hosting platforms.

```
yarn add @fontsource/inter
```
