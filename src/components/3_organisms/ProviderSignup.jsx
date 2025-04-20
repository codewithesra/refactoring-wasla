import { HandleChange } from "../../utils/HelperFunctions";
import { FieldsContainer } from "../1_atoms/SignupFormContainer";
import TextInput from "../2_molecules/FormInputs/TextInput";
import SelectInput from "../2_molecules/FormInputs/SelectInput";
import { DateInput } from "../2_molecules/FormInputs/DateInput";
import FileInput from "../2_molecules/FormInputs/FileInput";
import { useCountries } from "../../api/FormApi";

const ProviderSignup = ({ currentStep, formData, setFormData, errors }) => {
  const handleChange = (e) => HandleChange(e, setFormData);
  const {
    data: countries = [],
    isLoading: countriesLoading,
    isError: countriesError,
  } = useCountries();

  if (currentStep === 2) {
    return (
      <>
        <FieldsContainer>
          <TextInput
            label="provider name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="enter provider name"
            error={errors.name}
          />
          <DateInput
            label="establishment date"
            name="estDate"
            type="date"
            value={formData.estDate}
            onChange={handleChange}
            error={errors.estDate}
          />
        </FieldsContainer>

        <FieldsContainer>
          <SelectInput
            label="choose a country"
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
          <SelectInput
            label="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="select industry"
            options={[
              { value: "tech", label: "tech" },
              { value: "medical", label: "medical" },
              { value: "engineering", label: "engineering" },
            ]}
            error={errors.industry}
          />
        </FieldsContainer>
      </>
    );
  }

  if (currentStep === 3) {
    return (
      <>
        <TextInput
          label="about"
          name="about"
          type={"textarea"}
          value={formData.about}
          onChange={handleChange}
          placeholder="write about your organization"
          error={errors.about}
        />

        <FileInput
          label="file"
          name="file"
          onChange={handleChange}
          error={errors.file}
          fileName={formData.file ? formData.file.name : ""}
        />
      </>
    );
  }

  return null;
};

export default ProviderSignup;
