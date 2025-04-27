import { useState, useCallback } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  StepOneSchema,
  StudentStepTwoSchema,
  StudentStepThreeSchema,
  ProviderStepTwoSchema,
  ProviderStepThreeSchema,
} from "../utils/SignupValidation";

const schemaMap = {
  student: {
    1: StepOneSchema,
    2: StudentStepTwoSchema,
    3: StudentStepThreeSchema,
  },
  provider: {
    1: StepOneSchema,
    2: ProviderStepTwoSchema,
    3: ProviderStepThreeSchema,
  },
};

export function useStepper(
  initialStep = 1,
  maxSteps = null,
  accountType = null
) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const isFirstStep = currentStep === 1;
  const isLastStep = maxSteps ? currentStep === maxSteps : false;

  const validateStep = useCallback(
    async (step, values) => {
      const schema = schemaMap[accountType]?.[step] || yup.object().shape({});
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
    },
    [accountType]
  );

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
    } else if (currentStep === 1) {
      navigate("/useRole");
    }
  }, [currentStep, navigate]);

  const resetStepper = useCallback(() => {
    setCurrentStep(1);
    setErrors({});
  }, []);

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
