import React from "react";
import Select from "react-select";
import ModeDetector from "../../../hooks/ModeDetector";

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
  const isDarkMode = ModeDetector();

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
            backgroundColor: isDarkMode ? "#1F2937" : "#ffffff",
            borderColor: apiError
              ? "#f87171"
              : state.isFocused
              ? "#2563eb"
              : isDarkMode
              ? "#374151"
              : "#E5E7EB",
            boxShadow: state.isFocused
              ? apiError
                ? "0 0 0 1px #f87171"
                : "0 0 0 1px #2563eb"
              : "none",
            "&:hover": {
              borderColor: apiError ? "#f87171" : "#2563eb",
            },
            color: isDarkMode ? "#F9FAFB" : "#111827",
          }),
          singleValue: (base) => ({
            ...base,
            color: isDarkMode ? "#F9FAFB" : "#111827",
          }),
          input: (base) => ({
            ...base,
            color: isDarkMode ? "#F9FAFB" : "#111827",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: isDarkMode ? "#1F2937" : "#ffffff",
            color: isDarkMode ? "#F9FAFB" : "#111827",
            zIndex: 50,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#2563eb"
              : state.isFocused
              ? isDarkMode
                ? "#374151"
                : "#E5E7EB"
              : "transparent",
            color: isDarkMode ? "#F9FAFB" : "#111827",
            cursor: "pointer",
          }),
          placeholder: (base) => ({
            ...base,
            color: apiError ? "#f87171" : isDarkMode ? "#9CA3AF" : "#6B7280",
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
          dropdownIndicator: (base) => ({
            ...base,
            color: apiError ? "#f87171" : isDarkMode ? "#9CA3AF" : "#6b7280",
            "&:hover": {
              color: apiError ? "#f87171" : "#2563eb",
            },
          }),
          indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: apiError
              ? "#f87171"
              : isDarkMode
              ? "#4B5563"
              : "#E5E7EB",
          }),
        }}
      />

      {error && <p className="text-red-500 text-sm">{error || apiError}</p>}
    </div>
  );
};

export default SelectInput;
