import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none"
    >
      <span
        className={`w-5 h-5 rounded-full bg-yellow-500 dark:bg-blue-500 flex items-center justify-center transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-[-10px]" : "translate-x-[10px]"
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-white text-xs" />
        ) : (
          <FaMoon className="text-white text-xs" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
