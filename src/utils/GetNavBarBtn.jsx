import { NavLinkBtn } from "../components/1_atoms/Btns";

export const GetNavBarBtn = (pathname, mobile = false, handleClose) => {
  if (pathname === "/") {
    return (
      <NavLinkBtn
        type="button"
        to="/userRole"
        onClick={mobile ? handleClose : undefined}
      >
        Join Now
      </NavLinkBtn>
    );
  }

  if (pathname === "/signup" || pathname === "/userRole") {
    return (
      <NavLinkBtn
        type="button"
        to="/"
        onClick={mobile ? handleClose : undefined}
      >
        Back to Home
      </NavLinkBtn>
    );
  }

  return null;
};
