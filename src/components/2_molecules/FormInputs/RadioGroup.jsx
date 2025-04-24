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
      <label
        htmlFor={name}
        className="font-bold text-light-text mb-2 block dark:text-dark-text"
      >
        {label}
      </label>

      <div
        className={`mb-3 ${
          isHorizontal ? "flex gap-4" : "flex flex-col space-y-2"
        } ${isCentered ? "justify-center" : ""}`}
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
                    ? "border-light-primary bg-light-background dark:border-dark-primary dark:bg-dark-card"
                    : "border-light-border hover:border-light-primary dark:border-dark-border dark:hover:border-dark-primary"
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
                <span className="text-2xl text-light-primary dark:text-dark-primary">
                  {option.icon}
                </span>
              )}

              <span className="text-light-text font-medium dark:text-dark-text">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default RadioGroup;
