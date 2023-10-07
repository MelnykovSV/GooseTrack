import { useState } from 'react';
import { themes } from 'theme/theme';

export const useColorTheme = () => {
  const [mode, setMode] = useState(
    localStorage.getItem('GooseTrackTheme') || 'light'
  );

  const toggleColorMode = () =>
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  localStorage.setItem('GooseTrackTheme', mode);

  return {
    theme: themes[mode],
    mode,
    toggleColorMode,
  };
};
