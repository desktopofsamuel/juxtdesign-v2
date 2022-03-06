import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      // Token
      green100: '#F1F9F8',
      green500: '#025050',
      red500: '#FF6347',
      rice100: '#F9F5F1',
      rice300: '#F6F1EC',
      white100: '#ffffff',
      grey100: '#E5EAF0',
      grey300: '#6b7078',
      grey500: '#575C63',
      grey700: '#272D2D',
      blue500: '#0065e2',

      transparent: 'rgba(0,0,0,0)',
      // Alias
      primary: '$green500',
      primaryLighter: '$green100',
      secondary: '#d13607',
      secondaryHover: '#cc5e3d',
      body: '$grey500',
      bodyLighter: '$grey300',
      onBackgroundHover: '$primaryLighter',
      background: '$rice100',
      backgroundHover: '$rice300',
      backgroundDarker: '$rice300',
      surface: '$white100',
      onBackground: '$grey700',
      onSurface: '$grey700',
      onPrimary: '$white100',
      border: '$grey100',
      codeBackground: '$rice300',
      spark: '$primary',
      // Context
      tagBackground: '$grey100',
      tagText: '$onSurface',
    },
    transitions: {
      default: ' 0.2s all ease-in-out',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '48px',
      6: '60px',
      7: '120px',
      8: '200px',
      small: '800px',
      medium: '1000px',
      large: '1440px',
    },
    fontSizes: {
      'xs': 'clamp(0.9rem, -0.27vw + 0.97rem, 0.75rem)',
      'base': 'clamp(1.13rem, -0.19vw + 1.17rem, 1rem)',
      'md': 'clamp(1.41rem, -0.14vw + 1.44rem, 1.33rem)',
      'lg': 'clamp(1.76rem, 0.02vw + 1.75rem, 1.77rem)',
      'xl': 'clamp(2.2rem, 0.28vw + 2.13rem, 2.35rem)',
      '2xl': 'clamp(2.75rem, 0.7vw + 2.57rem, 3.13rem)',
      '3xl': 'clamp(3.43rem, 1.32vw + 3.1rem, 4.16rem)',
    },
    fonts: {
      sans: 'HK Grotesk, apple-system, Helvetica, Arial, sans-serif',
      serif: 'Calibre, Georgia, serif',
      mono: 'Georgia, IBM Plex Mono, Courier, Menlo, Consolas, Monaco, Lucida Console, monospace',
      syne: 'Syne, apple-system, Helvetica, Arial, sans-serif',
    },
    fontWeights: {
      regular: '500',
      bold: '700',
      extrabold: '800'
    },
    lineHeights: {
      regular: '1.5',
      tight: '1.2',
    },
    letterSpacings: {
      sparse: '0.025em'
    },
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
    },
    shadows: {},
    zIndices: {},
  },
  media: {
    sm: '(max-width: 480px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1280px)',
  },
});

// export const light = theme('light-theme', {
//   colors: {
//     primary: '$black',
//     secondary: '$blue700',
//   },
// });

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: '$white100',
    secondary: '#167eff',
    background: '#232c37',
    backgroundDarker: '#304259',
    backgroundHover: '#374353',
    body: '#BBBFCC',
    bodyLighter: '#97999d',
    onBackground: '#F7F7F7',
    onBackgroundHover: '#304259',
    onSurface: '$white100',
    codeBackground: '$rice300',
    border: '#444444',
    spark: '$background',
    tagBackground: '$backgroundHover',
    tagText: '$white100',
  },
});
