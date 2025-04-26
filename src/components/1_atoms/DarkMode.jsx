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
      className="fixed bottom-6 right-6 flex items-center justify-center w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none shadow-lg hover:shadow-xl z-50"
      aria-label="Toggle dark mode"
    >
      <span
        className={`w-10 h-10 rounded-full bg-yellow-500 dark:bg-blue-500 flex items-center justify-center transform transition-transform duration-300 ${
          isDarkMode ? "rotate-0" : "rotate-180"
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-white text-lg" />
        ) : (
          <FaMoon className="text-white text-lg" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
