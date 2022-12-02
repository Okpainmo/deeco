import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const figure = 22;

  const storedTheme = window.localStorage.getItem('prefered-theme');

  const checkTheme = () => {
    if (storedTheme === 'lightTheme') {
      return true;
    }
    return false;
  };

  const [isLight, setIsLight] = useState(checkTheme);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem('prefered-theme', 'lightTheme');
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem('prefered-theme', 'darkTheme');
  }

  useEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );

      if (storedTheme === 'darkTheme' && operatingSystemThemeDark.matches) {
        root.classList.add('dark');
      }

      if (storedTheme === 'darkTheme') {
        root.classList.add('dark');
      }

      if (storedTheme === 'lightTheme') {
        root.classList.remove('dark');
      }
    };
    setTheme();

    console.log(`${storedTheme} selected`);
  }, [storedTheme]);

  return (
    <ThemeContext.Provider
      value={{ figure, isLight, setDarkTheme, setLightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
