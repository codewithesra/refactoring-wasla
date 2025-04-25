import { FaRegCalendarAlt } from "react-icons/fa";

export const DateInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "date",
  error,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="font-bold text-light-text mb-2 block dark:text-dark-text"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`rounded px-4 py-2 w-full bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text
            ${
              error
                ? "border border-red-500"
                : "border border-light-border dark:border-dark-border focus:border-light-primary dark:focus:border-dark-primary"
            } pr-10`}
        />
        <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-text dark:text-dark-text pointer-events-none" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
