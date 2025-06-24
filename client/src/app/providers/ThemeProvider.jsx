import { useEffect } from 'react';

import { useLocalStorageState } from '../../shared/lib/hooks/useLocalStorageState';
import { ThemeContext } from 'styled-components';

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorageState(false, 'theme');

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
