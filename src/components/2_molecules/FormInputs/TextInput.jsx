const TextInput = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="font-bold text-light-text dark:text-dark-text mb-2 block"
      >
        {label}
      </label>
      <input
        type={type}
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
    </div>
  );
};

export default TextInput;
