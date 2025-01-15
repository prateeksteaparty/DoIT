import React, { useState } from 'react';
import { Menu, MoonStar, Sun, LayoutGrid } from 'lucide-react';

export function Navbar({ toggleSidebar, toggleRightSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="bg-white dark:bg-[#232323] dark:text-white p-1 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <img src="/logo-todo.png" alt="Logo" className="pl-1 w-25 h-10 ml-2 object-contain" />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer px-4 py-2 rounded bg-white dark:bg-[#232323] flex items-center"
          onClick={toggleRightSidebar}
          aria-label="Toggle Right Sidebar"
        >
          <LayoutGrid  className="w-8 h-8 dark:text-white text-black" />
        </button>
        <button
          className="cursor-pointer px-4 py-2 rounded bg-white dark:bg-[#232323] flex items-center"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Sun className="w-8 h-8 text-white" />
          ) : (
            <MoonStar className="w-8 h-8 text-black" />
          )}
        </button>
      </div>
    </div>
  );
}
