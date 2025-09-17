'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <Button size="icon" onClick={toggleTheme} className="bg-accent">
      <LightModeIcon
        color="inherit"
        className="text-black h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <DarkModeIcon
        color="inherit"
        className="text-secondary-foreground absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
