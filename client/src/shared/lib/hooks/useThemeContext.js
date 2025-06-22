import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('ThemeContext was used outside of ThemeContextProvider');

  return context;
}
