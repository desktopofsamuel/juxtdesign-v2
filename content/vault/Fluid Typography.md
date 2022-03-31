---
tags:
  - typography
---

I recall making font sizes fluid and scale in ratio according to the viewport was not an easy task few years ago. Here's the formula I had bookmarked from [css-tricks.com](https://css-tricks.com/snippets/css/fluid-typography/)

```css
body {
  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
}
```

Introducing [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), a css function that is made for exact this use case. Clamp allows you to set minimum and maximum value. 

```
h1 {
 font-size: clamp(MIN, VAL, MAX);
}
```

