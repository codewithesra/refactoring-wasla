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

// commented out now that we are using useMutation to submit the form
// export const HandleSubmit = (e, formData, onSubmit) => {
//   e.preventDefault();
//   if (onSubmit) onSubmit(formData);
//   console.log(formData);
// };
