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
      <label
        htmlFor={name}
        className="font-bold text-light-text mb-2 block dark:text-dark-text"
      >
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
            backgroundColor: state.selectProps.menuIsOpen
              ? "var(--tw-bg-light-card)"
              : "var(--tw-bg-light-card)",
            borderColor: apiError
              ? "#f87171"
              : state.isFocused
              ? "#2563eb"
              : "#e5e7eb",
            boxShadow: state.isFocused
              ? apiError
                ? "0 0 0 1px #f87171"
                : "0 0 0 1px #2563eb"
              : "none",
            "&:hover": {
              borderColor: apiError ? "#f87171" : "#2563eb",
            },
            color: "#111827",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#111827",
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: "#2563eb22",
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: "#2563eb",
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: "#2563eb",
            ":hover": {
              backgroundColor: "#2563eb33",
              color: "#1d4ed8",
            },
          }),
          placeholder: (base) => ({
            ...base,
            color: apiError ? "#f87171" : "#9ca3af",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: apiError ? "#f87171" : "#6b7280",
            "&:hover": {
              color: apiError ? "#f87171" : "#2563eb",
            },
          }),
          indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: apiError ? "#f87171" : "#e5e7eb",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#ffffff",
            color: "#111827",
            zIndex: 50,
          }),
        }}
      />

      {error && <p className="text-red-500 text-sm">{error || apiError}</p>}
    </div>
  );
};

export default SelectInput;
