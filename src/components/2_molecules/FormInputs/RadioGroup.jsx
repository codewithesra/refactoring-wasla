const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options,
  layout,
  error,
  centered,
}) => {
  const isHorizontal = layout === "horizontal";
  const isCentered = centered;

  return (
    <div>
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>

      <div
        className={`mb-3 ${
          isHorizontal ? "flex gap-4" : "flex flex-col space-y-2"
        } ${isCentered ? "justify-center" : ""}`} // Apply centering if `centered` is true
      >
        {options.map((option, index) => {
          const isSelected = value === option.value;

          return (
            <label
              key={index}
              htmlFor={option.value}
              className={`cursor-pointer border rounded-xl px-6 py-2 flex items-center gap-3 transition-all duration-200
                ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                }`}
            >
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={onChange}
                className="hidden"
              />

              {option.icon && (
                <span className="text-2xl text-blue-500">{option.icon}</span>
              )}

              <span className="text-gray-800 font-medium">{option.label}</span>
            </label>
          );
        })}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default RadioGroup;
