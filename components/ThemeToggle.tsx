
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // A simple toggle between light and dark.
  // You can expand this to include 'system' if needed.
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      <SunIcon className="h-6 w-6 dark:hidden" />
      <MoonIcon className="h-6 w-6 hidden dark:inline" />
    </button>
  );
};

export default ThemeToggle;
