import { HandleChange } from "../../utils/HelperFunctions";
import { FieldsContainer } from "../1_atoms/SignupFormContainer";
import TextInput from "../2_molecules/FormInputs/TextInput";
import SelectInput from "../2_molecules/FormInputs/SelectInput";
import { DateInput } from "../2_molecules/FormInputs/DateInput";
import RadioGroup from "../2_molecules/FormInputs/RadioGroup";
import { useCountries } from "../../api/FormApi";

const StudentSignup = ({ currentStep, formData, setFormData, errors }) => {
  const handleChange = (e) => HandleChange(e, setFormData);
  const { countries, loading, error } = useCountries();

  if (currentStep === 2) {
    return (
      <>
        <FieldsContainer>
          <TextInput
            label="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="enter your first Name"
            error={errors.firstName}
          />
          <TextInput
            label="lastName"
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
            label="choose your gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            layout="horizontal"
            options={[
              { label: "male", value: "male" },
              { label: "female", value: "female" },
            ]}
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
            label="choose a country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder={loading ? "loading countries ..." : "choose a country"}
            options={countries}
            error={errors.country}
            apiError={error ? "unable to load " : null}
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
          label="choose your skills"
          name="studentSkills"
          value={formData.studentSkills}
          onChange={handleChange}
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
