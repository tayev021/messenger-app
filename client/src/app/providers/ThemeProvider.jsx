import { useEffect, useState } from 'react';

import { ThemeContext } from 'styled-components';

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(
    function () {
      if (isDarkTheme) {
        document.documentElement.className = 'dark-theme';
      } else {
        document.documentElement.className = 'light-theme';
      }
    },
    [isDarkTheme]
  );

  function toggleTheme() {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
