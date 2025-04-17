import { useState, useCallback } from "react";
import * as yup from "yup";
import {
  StepOneSchema,
  StepTwoSchema,
  StepThreeSchema,
} from "../utils/SignupValidation";

export function useStepper(initialStep = 1, maxSteps = null) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [errors, setErrors] = useState({});

  const isFirstStep = currentStep === 1;
  const isLastStep = maxSteps ? currentStep === maxSteps : false;

  const getSchemaForStep = (step) => {
    switch (step) {
      case 1:
        return StepOneSchema;
      case 2:
        return StepTwoSchema;
      case 3:
        return StepThreeSchema;
      default:
        return yup.object().shape({});
    }
  };

  const validateStep = useCallback(async (step, values) => {
    const schema = getSchemaForStep(step);
    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
      return { isValid: true, stepErrors: {} };
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
        return { isValid: false, stepErrors: newErrors };
      }
      return { isValid: false, stepErrors: {} };
    }
  }, []);

  const handleNext = useCallback(
    async (values) => {
      const { isValid } = await validateStep(currentStep, values);
      if (isValid && (!maxSteps || currentStep < maxSteps)) {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [currentStep, maxSteps, validateStep]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  }, [currentStep]);

  const resetStepper = useCallback(() => {
    setCurrentStep(initialStep);
    setErrors({});
  }, [initialStep]);

  return {
    currentStep,
    setCurrentStep,
    handleNext,
    handleBack,
    resetStepper,
    isFirstStep,
    isLastStep,
    errors,
    validateStep,
  };
}
