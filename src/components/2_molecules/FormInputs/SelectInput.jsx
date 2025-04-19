import Select from "react-select";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  isMulti = false,
  error,
  apiError,
}) => {
  const handleChange = (selectedOption) => {
    const fakeEvent = {
      target: {
        name,
        value: isMulti
          ? selectedOption.map((opt) => opt.value)
          : selectedOption?.value || "",
      },
    };
    onChange(fakeEvent);
  };

  const getValue = () => {
    if (isMulti) {
      return options.filter((opt) => value.includes(opt.value));
    } else {
      return options.find((opt) => opt.value === value) || null;
    }
  };

  const showPlaceholder =
    (!value || (Array.isArray(value) && value.length === 0)) && apiError
      ? apiError
      : placeholder;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>

      <Select
        id={name}
        name={name}
        value={getValue()}
        onChange={handleChange}
        options={options}
        placeholder={showPlaceholder}
        isMulti={isMulti}
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: apiError ? "#f87171" : base.borderColor,
            "&:hover": {
              borderColor: apiError ? "#f87171" : base.borderColor,
            },
            boxShadow: state.isFocused
              ? apiError
                ? "0 0 0 1px #f87171"
                : "0 0 0 1px #2684FF"
              : base.boxShadow,
          }),
          placeholder: (base) => ({
            ...base,
            color: apiError ? "#f87171" : base.color,
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: apiError ? "#f87171" : base.color,
            "&:hover": {
              color: apiError ? "#f87171" : base.color,
            },
          }),
          indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: apiError ? "#f87171" : base.backgroundColor,
          }),
        }}
      />

      {error && <p className="text-red-500 text-sm">{error || apiError}</p>}
    </div>
  );
};

export default SelectInput;
