import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
// components
import { ConfirmBtn, GreyBtn } from "../1_atoms/Btns";
import RadioGroup from "../2_molecules/FormInputs/RadioGroup";
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
} from "../../utils/LocalStorageLogic";
//forms
import EmailSignup from "./SignupComponents/EmailSignup";
import ProviderSignup from "./SignupComponents/ProviderSignup";
import StudentSignup from "./SignupComponents/StudentSignup";
//icons
import { HiAcademicCap } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";

const SignupForm = () => {
  const [formData, setFormData] = useState(getFormFromStorage);
  const initialStep = getCurrentStep();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [direction, setDirection] = useState(1);

  const stepMap = {
    student: ["account info", "personal details", "extra info"],
    provider: ["account info", "provider details", "documents"],
  };
  const steps = stepMap[formData.accountType] || [];

  const {
    currentStep,
    handleNext,
    handleBack,
    resetStepper,
    isFirstStep,
    isLastStep,
    errors,
    validateStep,
  } = useStepper(initialStep, steps.length, formData.accountType);

  useEffect(() => {
    saveFormToStorage(formData, currentStep);
  }, [formData, currentStep]);

  const mutation = useMutation({
    mutationFn: (formData) => submitFormData(formData),
    onSuccess: () => {
      setIsSubmitted(true);
      resetStepper();
    },
    onError: (error) => {
      console.error("Submission failed:", error);
    },
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    if (mutation.isPending) return;
    const { isValid } = await validateStep(currentStep, formData);
    if (isValid) {
      if (isLastStep) {
        mutation.mutate(formData, {
          onSuccess: () => {
            setIsSubmitted(true);
            resetStepper();
            formData.accountType === "student"
              ? toast.success("Your account has been created successfully!")
              : toast.success("your account is under review");
          },
          onError: (error) => {
            console.error("submission failed:", error);
          },
        });
      } else {
        setDirection(1);
        handleNext(formData);
      }
    }
  };

  const resetForm = () => {
    setFormData({ accountType: "" });
    setIsSubmitted(false);
    resetStepper();
    clearStorage();
  };

  return (
    <SignupFormContainer>
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
            resetForm={resetForm()}
            accountType={formData.accountType}
          />
        ) : (
          <div>
            {!formData.accountType && (
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <RadioGroup
                    label={
                      <span className="block text-center w-full my-5">
                        choose Account Type
                      </span>
                    }
                    name="accountType"
                    value={formData.accountType}
                    onChange={(e) => {
                      const selectedType = e.target.value;
                      const defaultValues =
                        selectedType === "student"
                          ? studentDefaultValues
                          : providerDefaultValues;
                      setFormData(defaultValues);
                    }}
                    layout="horizontal"
                    options={[
                      {
                        label: "Student",
                        value: "student",
                        icon: <HiAcademicCap className="text-2xl" />,
                      },
                      {
                        label: "Provider",
                        value: "provider",
                        icon: <MdBusinessCenter className="text-2xl" />,
                      },
                    ]}
                  />
                </div>
              </div>
            )}

            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            >
              {currentStep === 1 && formData.accountType && (
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
              {formData.accountType && (
                <div className="mr-auto">
                  <GreyBtn
                    type="button"
                    onClick={() => {
                      if (isFirstStep) {
                        setFormData({ accountType: "" });
                      } else {
                        setDirection(-1);
                        handleBack();
                      }
                    }}
                  >
                    Back
                  </GreyBtn>
                </div>
              )}
              <div className="ml-auto">
                {formData.accountType && (
                  <ConfirmBtn type="submit" disabled={mutation.isPending}>
                    {isLastStep
                      ? mutation.isPending
                        ? "Signing Up"
                        : "Sign Up"
                      : "Next"}
                  </ConfirmBtn>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </SignupFormContainer>
  );
};

export default SignupForm;
