import { HiMoon, HiSun } from 'react-icons/hi2';

import { useThemeContext } from '../../../shared/lib/hooks/useThemeContext';

export function ToggleTheme() {
  const { isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <div onClick={toggleTheme}>
      {isDarkTheme ? <HiSun /> : <HiMoon />}
      {isDarkTheme ? <span>Light Theme</span> : <span>Dark Theme</span>}
    </div>
  );
}
