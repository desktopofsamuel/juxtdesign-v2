---
title: 'Custom Fonts with Tailwind CSS in NextJS'
date: '2022-01-13'
tags:
  - typography
  - tailwind
publish: false
---

There isn't an official guide on applying custom fonts with TailwindCSS in NextJS site. It took a while for me to experiment but turns out it's quite easy to do it yourself. So following the default template, your file structure should be similar to mine.

Key files we will be working on will be a global css file `global.css` that is imported in `_app.tsx` ( `create-next-app` already done it) while we will setup the font family in `tailwind.config.js` to extend the default fontFamily theme.


```
- pages
-- _app.tsx
- public
-- styles
---- fonts
------ font-medium.woff2
------ font-bold.woff2
---- global.css
- tailwind.config.js
```


## Google Fonts



## @Fontsource

Fontsource provide a self-hosting alternative to Google Fonts, as you include the font as a dependency package. It brings significant performance gain as it no longer requires you to load font from third-party hosting platforms. Go to[fontsource's directory](https://fontsource.org/fonts/inter) and follow the instructions

```
yarn add @fontsource/inter
```

You will need to import the font in `_app.tsx`, or you can also specify the weight and style that you want. Check the instruction for the exact style and weight variations. Some fonts might also has variable font support.

```
# Default
import "@fontsource/roboto"

# Specific Font Weight & Style
import "@fontsource/roboto-serif/400.css"
import "@fontsource/roboto-serif/400-italic.css"

# Variable Font
import "@fontsource/inter/variable.css";

```



## Local Font Files