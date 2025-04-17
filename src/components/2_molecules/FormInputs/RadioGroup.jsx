const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options,
  layout,
  error,
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div>
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>

      <div
        className={`mb-3 ${
          isHorizontal ? "flex gap-4" : "flex flex-col space-y-2"
        }`}
      >
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2 border border-gray-300 rounded px-4 py-2"
            />
            <label htmlFor={option.value} className="text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default RadioGroup;
