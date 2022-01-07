import React from 'react';
import { darkTheme } from 'gatsby-theme-stitches/src/stitches.config';

type ColorMode = 'light' | 'dark';
type ThemeContextValue = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

const themes = {
  light: 'light',
  dark: darkTheme.className,
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  colorMode: 'light',
  setColorMode: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>('light');

  React.useEffect(() => {
    const root = document.documentElement;
    const initialColorMode = root.classList.contains(themes['dark'])
      ? 'dark'
      : 'light';
    rawSetColorMode(initialColorMode);
  }, []);

  const contextValue: ThemeContextValue = React.useMemo(() => {
    function setColorMode(newValue: ColorMode): void {
      document.documentElement.classList.remove(themes[colorMode]);
      document.documentElement.classList.add(themes[newValue]);
      localStorage.setItem('color-mode', newValue);
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
