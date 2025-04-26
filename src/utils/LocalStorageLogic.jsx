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
  const step = localStorage.getItem(stepKey);
  return step ? parseInt(step) : 1;
};

export const clearStorage = () => {
  localStorage.removeItem(storageKey);
  localStorage.removeItem(stepKey);
};
