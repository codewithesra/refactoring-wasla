import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="font-bold text-gray-800 mb-2 block dark:text-gray-300"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`rounded px-4 py-2 w-full mb-2 bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text
            ${
              error
                ? "border-red-500"
                : "border-light-border dark:border-dark-border"
            } border`}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-6 text-gray-500 hover:text-gray-700"
          tabIndex={-1}
        >
          {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
