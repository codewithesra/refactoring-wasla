const storageKey = "formData";
const stepKey = "currentStep";

export const saveFormToStorage = (formData, currentStep) => {
  localStorage.setItem(storageKey, JSON.stringify(formData));
  localStorage.setItem(stepKey, currentStep.toString());
};

export const getFormFromStorage = () => {
  const savedData = localStorage.getItem(storageKey);
  return savedData
    ? { accountType: "", ...JSON.parse(savedData) }
    : { accountType: "" };
};

export const getCurrentStep = () => {
  return parseInt(localStorage.getItem(stepKey));
};

export const clearStorage = () => {
  localStorage.removeItem(storageKey);
  localStorage.removeItem(stepKey);
};
