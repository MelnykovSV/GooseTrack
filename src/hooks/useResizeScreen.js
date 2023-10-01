import { useState, useEffect } from 'react';

// const MOBILE_SCREEN = 375;
const TABLET_SCREEN = 768;
const DESKTOP_SCREEN = 1440;

export const useResizeScreen = () => {
  const [isMobile, setMobile] = useState(
    () => window.innerWidth < TABLET_SCREEN
  );
  const [isTablet, setTablet] = useState(
    () =>
      window.innerWidth < DESKTOP_SCREEN && window.innerWidth > TABLET_SCREEN
  );
  const [isDesktop, setDesktop] = useState(
    () => window.innerWidth >= DESKTOP_SCREEN
  );

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < TABLET_SCREEN);
      setTablet(
        window.innerWidth < DESKTOP_SCREEN && window.innerWidth > TABLET_SCREEN
      );
      setDesktop(window.innerWidth >= DESKTOP_SCREEN);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
