import { useState, useEffect } from "react";
import {
  SignupFormContainer,
  FieldsContainer,
} from "../1_atoms/SignupFormContainer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ConfirmBtn, GreyBtn } from "../1_atoms/Btns";
import StudentSignup from "./StudentSignup";
import TextInput from "../2_molecules/FormInputs/TextInput";
import RadioGroup from "../2_molecules/FormInputs/RadioGroup";
import StepIndicator from "../2_molecules/FormInputs/StepIndicator";
import { HandleChange } from "../../utils/HelperFunctions";
import { useStepper } from "../../hooks/Stepper";
import { HiAcademicCap } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import ProviderSignup from "./ProviderSignup";
import {
  studentDefaultValues,
  providerDefaultValues,
} from "../../utils/DefaultFormData";
import { useMutation } from "@tanstack/react-query";
import { submitFormData } from "../../api/FormApi";

const SignupForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? { accountType: "", ...JSON.parse(savedData) }
      : { accountType: "" };
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = formData.accountType
    ? ["account info", "personal details", "extra info"]
    : [];

  const initialStep = parseInt(localStorage.getItem("currentStep")) || 1;

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
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("currentStep", currentStep.toString());
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
          },
          onError: (error) => {
            console.error("submission failed:", error);
          },
        });
      } else {
        handleNext(formData);
      }
    }
  };

  const resetForm = () => {
    setFormData({ accountType: "" });
    setIsSubmitted(false);
    resetStepper();
    localStorage.clear();
  };
  return (
    <SignupFormContainer>
      <form onSubmit={formSubmit} noValidate>
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          isSubmitted={isSubmitted}
        />
        {isSubmitted ? (
          <div className="text-center p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              <div className="flex justify-center mb-2">
                <RiVerifiedBadgeFill className="text-blue-500 text-9xl" />
              </div>
              you have signed up successfully
            </h2>
            <p className="mb-6">what would you like to do?</p>
            <div className="flex justify-center gap-4">
              <ConfirmBtn type="button" onClick={resetForm}>
                make a new account
              </ConfirmBtn>
            </div>
          </div>
        ) : (
          <>
            {currentStep === 1 && !formData.accountType && (
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <RadioGroup
                    label={
                      <span className="block text-center w-full">
                        Choose Account Type
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

            {currentStep === 1 && formData.accountType && (
              <>
                <TextInput
                  label="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => HandleChange(e, setFormData)}
                  placeholder="enter your email"
                  error={errors.email}
                />
                <FieldsContainer>
                  <TextInput
                    label="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="enter your password"
                    error={errors.password}
                  />
                  <TextInput
                    label="confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="confirm your password"
                    error={errors.confirmPassword}
                  />
                </FieldsContainer>
              </>
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

            <div className="flex mt-6">
              <div className="mr-auto">
                {!isFirstStep && (
                  <GreyBtn type="button" onClick={handleBack}>
                    Back
                  </GreyBtn>
                )}
              </div>
              <div className="ml-auto">
                {formData.accountType && (
                  <ConfirmBtn
                    type="submit"
                    className="mr-auto"
                    disabled={mutation.isPending}
                  >
                    {isLastStep
                      ? mutation.isPending
                        ? "Signing Up..."
                        : "Sign Up"
                      : "Next"}
                  </ConfirmBtn>
                )}
              </div>
            </div>
          </>
        )}
      </form>
    </SignupFormContainer>
  );
};

export default SignupForm;
