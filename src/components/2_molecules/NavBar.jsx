import DarkModeToggle from "../1_atoms/DarkMode";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text shadow-md">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="text-2xl font-bold">refactoring wasla</h1>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
