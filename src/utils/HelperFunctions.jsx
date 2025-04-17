export const HandleChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const HandleSubmit = (e, formData, onSubmit) => {
  e.preventDefault();
  if (onSubmit) onSubmit(formData);
  console.log(formData);
};
