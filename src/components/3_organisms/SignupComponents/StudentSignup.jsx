import { HandleChange } from "../../../utils/HelperFunctions";
import { FieldsContainer } from "../../1_atoms/SignupFormContainer";
import TextInput from "../../2_molecules/FormInputs/TextInput";
import SelectInput from "../../2_molecules/FormInputs/SelectInput";
import { DateInput } from "../../2_molecules/FormInputs/DateInput";
import RadioGroup from "../../2_molecules/FormInputs/RadioGroup";
import { useCountries, useSkills } from "../../../api/FormApi";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const StudentSignup = ({ currentStep, formData, setFormData, errors }) => {
  const handleChange = (e) => HandleChange(e, setFormData);
  const {
    data: countries = [],
    isLoading: countriesLoading,
    isError: countriesError,
  } = useCountries(currentStep === 3);
  const {
    data: skills = [],
    isLoading: skillsLoading,
    isError: skillsError,
  } = useSkills(currentStep === 3);

  useEffect(() => {
    if (countriesError) {
      toast.error("unable to load countries");
    }
  });

  useEffect(() => {
    if (skillsError) {
      toast.error("unable to load skills");
    }
  });

  if (currentStep === 2) {
    return (
      <>
        <FieldsContainer>
          <TextInput
            label="first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="enter your first Name"
            error={errors.firstName}
          />
          <TextInput
            label="last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="enter your last Name"
            error={errors.lastName}
          />
        </FieldsContainer>

        <FieldsContainer>
          <TextInput
            label="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            placeholder="enter your major"
            error={errors.major}
          />
          <RadioGroup
            label="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            layout="horizontal"
            options={[
              { label: "male", value: "male" },
              { label: "female", value: "female" },
            ]}
            centered={true}
            error={errors.gender}
          />
        </FieldsContainer>
      </>
    );
  }

  if (currentStep === 3) {
    return (
      <>
        <FieldsContainer>
          <SelectInput
            label="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder={
              countriesLoading ? "loading countries ..." : "choose a country"
            }
            options={countries}
            error={errors.country}
            apiError={countriesError ? "unable to load " : null}
          />
          <DateInput
            label="birth date"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            error={errors.birthDate}
          />
        </FieldsContainer>

        <FieldsContainer>
          <DateInput
            label="starting date"
            name="startingDate"
            type="month"
            value={formData.startingDate}
            onChange={handleChange}
            error={errors.startingDate}
          />
          <DateInput
            label="expected graduation date"
            name="expectedGradDate"
            type="month"
            value={formData.expectedGradDate}
            onChange={handleChange}
            error={errors.expectedGradDate}
          />
        </FieldsContainer>

        <SelectInput
          label="skills"
          name="studentSkills"
          value={formData.studentSkills}
          onChange={handleChange}
          placeholder={
            skillsLoading ? "loading skills ..." : "choose at least one skill"
          }
          options={skills}
          isMulti={true}
          error={errors.studentSkills}
          apiError={skillsError ? "unable to load" : null}
        />

        <TextInput
          label="student bio"
          name="studentBio"
          value={formData.studentBio}
          onChange={handleChange}
          placeholder="about yourself"
          error={errors.studentBio}
        />
      </>
    );
  }

  return null;
};

export default StudentSignup;
