import TextInput from "../../2_molecules/FormInputs/TextInput";
import PasswordInput from "../../2_molecules/FormInputs/PasswordInput";
import { HandleChange } from "../../../utils/HelperFunctions";
import { FieldsContainer } from "../../1_atoms/SignupFormContainer";

const EmailSignup = ({ formData, setFormData, errors }) => {
  return (
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
        <PasswordInput
          label="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => HandleChange(e, setFormData)}
          placeholder="enter your password"
          error={errors.password}
        />
        <PasswordInput
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
  );
};

export default EmailSignup;
