const TextInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded px-4 py-2 w-full mb-2`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
