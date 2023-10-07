import { createTheme } from '@mui/material';
import { useContext } from 'react';
import { createContext } from 'react';
import { useColorTheme } from 'theme/use-color-theme';
export const ThemeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
