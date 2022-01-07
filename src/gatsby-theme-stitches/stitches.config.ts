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
      body: '$grey500',
      bodyLighter: '$grey300',
      onBackgroundHover: '$primaryLighter',
      background: '$rice100',
      backgroundHover: '$rice300',
      surface: '$white100',
      onBackground: '$grey700',
      onSurface: '$grey700',
      onPrimary: '$white100',
      border: '$grey100',
      codeBackground: '$rice300',
      spark: '$primary',
      // Context
    },
    transitions: {
      default: ' 0.2s all ease-in-out',
    },
    space: {
      1: '4px',
      2: '16px',
      3: '24px',
      4: '48px',
      5: '60px',
      6: '120px',
      7: '200px',
      small: '800px',
      medium: '1000px',
      large: '1440px',
    },
    fontSizes: {
      1: '14px',
      2: '16px',
      3: '18px',
      4: '24px',
      5: '28px',
      6: '36px',
      7: '48px',
      8: '64px',
    },
    fonts: {
      sans: 'HK Grotesk, apple-system, Helvetica, Arial, sans-serif',
      serif: 'Calibre, Georgia, serif',
      mono: 'Georgia, IBM Plex Mono, Courier, Menlo, Consolas, Monaco, Lucida Console, monospace',
    },
    fontWeights: {
      regular: '500',
      bold: '700',
    },
    lineHeights: {
      regular: '1.5',
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
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
    background: '#121923',
    backgroundHover: '$onBackgroundHover',
    body: '#BBBFCC',
    bodyLighter: '#97999d',
    onBackground: '#F7F7F7',
    onBackgroundHover: '#212c3b',
    onSurface: '$white100',
    codeBackground: '$rice300',
    border: '#444444',
    spark: '$background',
  },
});
