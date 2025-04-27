import toast from "react-hot-toast";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    toast.success(`you searched for ${searchQuery} !`);
    setSearchQuery("");
  };

  return (
    <div className="flex justify-center mt-8 mx-5">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search for opportunities"
          className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#648db3] focus:border-transparent shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#648db3] text-white p-2 rounded-full hover:bg-[#4a6f8a] transition-colors duration-200 dark:bg-[#4a6f8a] dark:hover:bg-[#648db3]"
          onClick={handleSearchClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
