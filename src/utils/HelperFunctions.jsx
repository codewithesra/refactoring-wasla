export const HandleChange = (e, setFormData) => {
  const { name, value, files } = e.target;

  if (files) {
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

export const HandleSubmit = (e, formData, onSubmit) => {
  e.preventDefault();
  if (onSubmit) onSubmit(formData);
  console.log(formData);
};
