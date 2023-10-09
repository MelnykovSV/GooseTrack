import { Container } from './ThemeSwitcher.styled';
import Checkbox from '@mui/material/Checkbox';
import { ReactComponent as Moon } from './../../images/icons/moon.svg';
import { ReactComponent as Sun } from './../../images/icons/sun.svg';
import { useThemeContext } from 'theme/ThemeContextProvider';

export const ThemeSwitcher = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Container>
      <Checkbox
        checked={mode === 'light' ? true : false}
        onChange={toggleColorMode}
        id="theme-switcher"
        icon={<Sun />}
        checkedIcon={<Moon />}
      />
    </Container>
  );
};
