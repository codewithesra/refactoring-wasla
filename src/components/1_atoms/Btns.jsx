import { Link } from "react-router-dom";

export const ConfirmBtn = ({ children, onClick, type = "button" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="mt-4 mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {children}
      </button>
    </>
  );
};

export const CancelBtn = ({ children, onClick, type = "button" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="mt-4 mb-2 px-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        {children}
      </button>
    </>
  );
};

export const GreyBtn = ({ children, onClick, type = "button" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="mt-4 mb-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
      >
        {children}
      </button>
    </>
  );
};

export const NavLinkBtn = ({ to, children }) => {
  return (
    <Link
      to={to}
      className={`mt-4 mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition`}
    >
      {children}
    </Link>
  );
};
