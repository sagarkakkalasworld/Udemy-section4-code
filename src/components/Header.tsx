import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center animate-fade-in">
      <div className="flex items-center">
        <div className="h-8 w-8 md:h-10 md:w-10 bg-blue-600 rounded-md flex items-center justify-center mr-3">
          <div className="text-white font-bold text-lg md:text-xl">J</div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold">
          <span className="text-blue-600">CI/CD</span> Dashboard
        </h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-gray-200" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
      </button>
    </header>
  );
};

export default Header;