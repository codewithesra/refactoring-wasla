import { Link } from "react-router-dom";

export const ConfirmBtn = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center gap-2 ${
        disabled ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {disabled ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
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
