import { useState } from "react";
import {
  SignupFormContainer,
  FieldsContainer,
} from "../1_atoms/SignupFormContainer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ConfirmBtn, GreyBtn } from "../1_atoms/Btns";
import StudentSignup from "./StudentSignup";
import TextInput from "../2_molecules/FormInputs/TextInput";
import SelectInput from "../2_molecules/FormInputs/SelectInput";
import RadioGroup from "../2_molecules/FormInputs/RadioGroup";
import StepIndicator from "../2_molecules/FormInputs/StepIndicator";
import { HandleChange, HandleSubmit } from "../../utils/HelperFunctions";
import { DateInput } from "../2_molecules/FormInputs/DateInput";
import { useStepper } from "../../hooks/Stepper";
import { HiAcademicCap } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import ProviderSignup from "./ProviderSignup";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    accountType: "",
    // first step
    email: "",
    password: "",
    confirmPassword: "",
    // second step
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    major: "",
    startingDate: "",
    expectedGradDate: "",
    country: "",
    // third step
    studentSkills: [],
    studentCV: "",
    studentBio: "",
  });

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
  } = useStepper(1, steps.length);

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
                    onChange={(e) => HandleChange(e, setFormData)}
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

            {/* {currentStep === 2 && (
              <>
                <FieldsContainer>
                  <TextInput
                    label="firstName"
                    type="input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="enter your firstName"
                    error={errors.firstName}
                  />
                  <TextInput
                    label="lastName"
                    type="input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="confirm your password"
                    error={errors.lastName}
                  />
                </FieldsContainer>

                <FieldsContainer>
                  <TextInput
                    label="major"
                    type="input"
                    name="major"
                    value={formData.major}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="enter your major"
                    error={errors.major}
                  />
                  <RadioGroup
                    label="choose your gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) => HandleChange(e, setFormData)}
                    layout="horizontal"
                    options={[
                      { label: "male", value: "male" },
                      { label: "female", value: "female" },
                    ]}
                    error={errors.gender}
                  />
                </FieldsContainer>
              </>
            )}

            {currentStep === 3 && (
              <>
                <FieldsContainer>
                  <SelectInput
                    label="choose a country"
                    name="country"
                    value={formData.country}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="choose a country"
                    options={[
                      { value: "1", label: "place 1" },
                      { value: "2", label: "place 2" },
                      { value: "3", label: "place 3" },
                    ]}
                    error={errors.country}
                  />

                  <DateInput
                    label="birth date"
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="enter your birth date"
                    error={errors.birthDate}
                  />
                </FieldsContainer>

                <FieldsContainer>
                  <DateInput
                    label="starting date"
                    type="month"
                    name="startingDate"
                    value={formData.startingDate}
                    onChange={(e) => HandleChange(e, setFormData)}
                    error={errors.startingDate}
                  />
                  <DateInput
                    label="expected graduation date"
                    type="month"
                    name="expectedGradDate"
                    value={formData.expectedGradDate}
                    onChange={(e) => HandleChange(e, setFormData)}
                    placeholder="enter your birth date"
                    error={errors.expectedGradDate}
                  />
                </FieldsContainer>

                <SelectInput
                  label="choose your skills"
                  name="studentSkills"
                  value={formData.studentSkills}
                  onChange={(e) => HandleChange(e, setFormData)}
                  placeholder="choose your skills"
                  options={[
                    { value: "1", label: "skill 1" },
                    { value: "2", label: "skill 2" },
                    { value: "3", label: "skill 3" },
                  ]}
                  isMulti={true}
                  error={errors.studentSkills}
                />

                <TextInput
                  label="student bio"
                  type="input"
                  name="studentBio"
                  value={formData.studentBio}
                  onChange={(e) => HandleChange(e, setFormData)}
                  placeholder="about yourself"
                  error={errors.studentBio}
                />
              </>
            )} */}

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
