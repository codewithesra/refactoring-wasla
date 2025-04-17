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
        placeholder={placeholder}
        isMulti={isMulti}
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: error ? "#f56565" : base.borderColor,
            boxShadow: error
              ? "0 0 0 1px #f56565"
              : state.isFocused
              ? "0 0 0 1px #3182ce"
              : base.boxShadow,
            "&:hover": {
              borderColor: error ? "#f56565" : "#3182ce",
            },
          }),
        }}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectInput;
