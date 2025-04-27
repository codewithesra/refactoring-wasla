import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
// components
import { ConfirmBtn, GreyBtn } from "../1_atoms/Btns";
import StepIndicator from "../2_molecules/FormInputs/StepIndicator";
import { SignupFormContainer } from "../1_atoms/SignupFormContainer";
import FormSuccess from "../2_molecules/FormSuccess";
// hooks
import { useStepper } from "../../hooks/Stepper";
// utils
import { submitFormData } from "../../api/FormApi";
import {
  studentDefaultValues,
  providerDefaultValues,
} from "../../utils/DefaultFormData";
import {
  saveFormToStorage,
  getFormFromStorage,
  getCurrentStep,
  clearStorage,
  getSubmissionStatus,
} from "../../utils/LocalStorageLogic";
// forms
import EmailSignup from "./SignupComponents/EmailSignup";
import ProviderSignup from "./SignupComponents/ProviderSignup";
import StudentSignup from "./SignupComponents/StudentSignup";

const SignupForm = () => {
  const location = useLocation();
  const accountTypeFromState = location.state?.accountType;

  const [formData, setFormData] = useState(() => {
    const storedForm = getFormFromStorage();
    if (storedForm.accountType) return storedForm;

    if (accountTypeFromState) {
      return accountTypeFromState === "student"
        ? studentDefaultValues
        : providerDefaultValues;
    }

    return null;
  });

  const initialStep = getCurrentStep();
  const [isSubmitted, setIsSubmitted] = useState(getSubmissionStatus());
  const [direction, setDirection] = useState(1);

  const stepMap = {
    student: ["account info", "personal details", "extra info"],
    provider: ["account info", "provider details", "documents"],
  };
  const steps = formData ? stepMap[formData.accountType] || [] : [];

  const {
    currentStep,
    handleNext,
    handleBack,
    resetStepper,
    isFirstStep,
    isLastStep,
    errors,
    validateStep,
  } = useStepper(initialStep, steps.length, formData?.accountType);

  useEffect(() => {
    if (formData) {
      saveFormToStorage(formData, currentStep);
    }
  }, [formData, currentStep]);

  const mutation = useMutation({
    mutationFn: (formData) => submitFormData(formData),
    onSuccess: () => {
      setIsSubmitted(true);
      resetStepper();
      toast.success(
        formData.accountType === "student"
          ? "Your account has been created successfully!"
          : "Your account is under review"
      );
    },
    onError: (error) => {
      console.error("Submission failed:", error);
    },
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    if (mutation.isPending || !formData) return;

    const { isValid } = await validateStep(currentStep, formData);
    if (isValid) {
      if (isLastStep) {
        mutation.mutate(formData);
      } else {
        setDirection(1);
        handleNext(formData);
      }
    }
  };

  const resetForm = () => {
    setFormData(null);
    setIsSubmitted(false);
    resetStepper();
    clearStorage();
  };

  if (!formData) {
    return (
      <SignupFormContainer>
        <div className="text-center text-red-500 my-10">
          No account type selected. Please go back and choose your account type.
        </div>
      </SignupFormContainer>
    );
  }

  return (
    <SignupFormContainer accountType={formData.accountType}>
      <form onSubmit={formSubmit} noValidate>
        {formData.accountType && (
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            isSubmitted={isSubmitted}
          />
        )}

        {isSubmitted ? (
          <FormSuccess
            resetForm={resetForm}
            accountType={formData.accountType}
          />
        ) : (
          <>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            >
              {currentStep === 1 && (
                <EmailSignup
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
              {formData.accountType === "student" && (
                <StudentSignup
                  currentStep={currentStep}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
              {formData.accountType === "provider" && (
                <ProviderSignup
                  currentStep={currentStep}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
            </motion.div>

            <div className="flex mt-6">
              <div className="mr-auto">
                <GreyBtn
                  type="button"
                  onClick={() => {
                    if (isFirstStep) {
                      resetForm();
                    } else {
                      setDirection(-1);
                      handleBack();
                    }
                  }}
                >
                  Back
                </GreyBtn>
              </div>

              <div className="ml-auto">
                <ConfirmBtn type="submit" disabled={mutation.isPending}>
                  {isLastStep
                    ? mutation.isPending
                      ? "Signing Up"
                      : "Sign Up"
                    : "Next"}
                </ConfirmBtn>
              </div>
            </div>
          </>
        )}
      </form>
    </SignupFormContainer>
  );
};

export default SignupForm;
