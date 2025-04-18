import { useState } from "react";
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
import { HandleChange, HandleSubmit } from "../../utils/HelperFunctions";
import { useStepper } from "../../hooks/Stepper";
import { HiAcademicCap } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import ProviderSignup from "./ProviderSignup";
import {
  studentDefaultValues,
  providerDefaultValues,
} from "../../utils/DefaultFormData";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ accountType: "" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const steps = formData.accountType
    ? ["account info", "personal details", "extra info"]
    : [];

  const {
    currentStep,
    handleNext,
    handleBack,
    resetStepper,
    isFirstStep,
    isLastStep,
    errors,
    validateStep,
  } = useStepper(1, steps.length, formData.accountType);

  const formSubmit = async (e) => {
    e.preventDefault();
    const { isValid } = await validateStep(currentStep, formData);
    if (isValid) {
      if (isLastStep) {
        HandleSubmit(e, formData, onSubmit);
        setIsSubmitted(true);
        resetStepper();
      } else {
        handleNext(formData);
      }
    }
  };

  return (
    <SignupFormContainer>
      <form onSubmit={formSubmit}>
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
              <ConfirmBtn
                type="button"
                onClick={() => {
                  setFormData({ accountType: "" });
                  resetStepper();
                }}
              >
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
                  <ConfirmBtn type="submit" className="mr-auto">
                    {isLastStep ? "Sign Up" : "Next"}
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
