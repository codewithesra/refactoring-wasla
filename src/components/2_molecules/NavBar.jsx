import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { GetNavBarBtn } from "../../utils/GetNavBarBtn";
const Navbar = ({ navLinks = [] }) => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const handleClose = () => setNavOpen(false);

  const renderNavLinks = (mobile = false) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={mobile ? () => setNavOpen(false) : undefined}
          className={`
            ${mobile ? "text-lg py-2" : ""} 
            relative 
            group 
            transition-all 
            duration-300
            hover:text-light-accent 
            dark:hover:text-dark-accent
          `}
        >
          {link.label}
          <span
            className="
              absolute 
              left-0 
              bottom-0 
              w-0 
              h-0.5 
              bg-current 
            "
          ></span>
        </Link>
      ))}
    </>
  );
  const renderMobileToggle = () => (
    <div className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
      {navOpen ? <MdCancel size={30} /> : <IoMenu size={30} />}
    </div>
  );

  const renderMobileMenu = () => (
    <div
      className={`
      absolute 
      top-16
      left-0 
      w-full 
      bg-light-card 
      dark:bg-dark-card 
      flex 
      flex-col 
      items-center 
      gap-4
      py-4
      transition-all 
      duration-300 
      md:hidden
      ${navOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
      pointer-events-none
      ${navOpen ? "pointer-events-auto" : ""}
    `}
    >
      {renderNavLinks(true)}
      {GetNavBarBtn(location.pathname, true, handleClose)}
    </div>
  );
  return (
    <div className="sticky z-50 w-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text shadow-md">
      <div className="flex justify-between items-center mx-10 gap-15 h-20 max-w-[1240px] ">
        <h1 className="text-xl font-bold">refactoring wasla</h1>

        <nav className="hidden md:flex gap-10 justify-center items-center">
          {renderNavLinks()}
        </nav>

        <div className="hidden md:block">{GetNavBarBtn(location.pathname)}</div>

        {renderMobileToggle()}
        {renderMobileMenu()}
      </div>
    </div>
  );
};

export default Navbar;
