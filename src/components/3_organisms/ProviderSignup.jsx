import { HandleChange } from "../../utils/HelperFunctions";
import { FieldsContainer } from "../1_atoms/SignupFormContainer";
import TextInput from "../2_molecules/FormInputs/TextInput";
import SelectInput from "../2_molecules/FormInputs/SelectInput";
import { DateInput } from "../2_molecules/FormInputs/DateInput";
import FileInput from "../1_atoms/FileInput";

const ProviderSignup = ({ currentStep, formData, setFormData, errors }) => {
  const handleChange = (e) => HandleChange(e, setFormData);

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
            label="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="select location"
            options={[
              { value: "1", label: "place 1" },
              { value: "2", label: "place 2" },
              { value: "3", label: "place 3" },
            ]}
            error={errors.location}
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
        <Textarea
          label="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="write about your organization"
          error={errors.about}
        />

        <FileInput
          label="file"
          name="file"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              file: e.target.files[0],
            }));
          }}
          error={errors.file}
        />
      </>
    );
  }

  return null;
};

export default ProviderSignup;
