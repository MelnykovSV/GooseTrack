import { Container } from './ThemeSwitcher.styled';
import Checkbox from '@mui/material/Checkbox';
import { useState, useContext } from 'react';
import { ReactComponent as Moon } from './../../images/icons/moon.svg';
import { ReactComponent as Sun } from './../../images/icons/sun.svg';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
//   const colorMode = useContext(ColorModeContext);
  return (
    <Container>
      <Checkbox
        checked={theme === 'light' ? true : false}
        onChange={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light');
        }}
        icon={<Moon />}
        checkedIcon={<Sun />}
        // inputProps={{ 'aria-label': 'controlled' }}
      />
    </Container>
  );
};
