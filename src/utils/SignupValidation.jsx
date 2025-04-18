import * as yup from "yup";

export const StepOneSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      "Email must be a valid format (user@example.com)"
    )
    .required("Email is required"),
  password: yup.string().min(7).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("confirm your password"),
});

export const StudentStepTwoSchema = yup.object().shape({
  firstName: yup.string().min(2).required("first name is required"),
  lastName: yup.string().min(2).required("last name is required"),
  gender: yup.string().required("gender is required"),
  major: yup.string().min(2).required("major is required"),
});

export const StudentStepThreeSchema = yup.object().shape({
  country: yup.string().required("country is required"),
  birthDate: yup
    .date()
    .transform((value, originalValue) =>
      originalValue === "" ? null : new Date(originalValue)
    )
    .max(new Date(), "birth date cannot be in the future")
    .required("birth date is required"),

  startingDate: yup
    .date()
    .transform((value, originalValue) =>
      originalValue === "" ? null : new Date(originalValue)
    )
    .required("starting date is required"),

  expectedGradDate: yup
    .date()
    .transform((value, originalValue) =>
      originalValue === "" ? null : new Date(originalValue)
    )
    .min(yup.ref("startingDate"), "graduation date should be after start date")
    .required("expected grad date is required"),
  studentSkills: yup.array().min(1, "select at least one skill").required(),
  studentBio: yup.string().min(10).required("bio is required"),
});

export const ProviderStepTwoSchema = yup.object({
  name: yup
    .string()
    .min(3, "Provider name must be at least 3 characters")
    .max(50, "Provider name cannot exceed 50 characters")
    .required("Provider name is required"),

  estDate: yup
    .date()
    .transform((value, originalValue) =>
      originalValue === "" ? null : new Date(originalValue)
    )
    .max(new Date(), "Establishment date cannot be in the future")
    .required("Establishment date is required"),

  location: yup
    .string()
    .oneOf(["1", "2", "3"], "Invalid location selected")
    .required("Location is required"),

  industry: yup
    .string()
    .oneOf(["tech", "medical", "engineering"], "Invalid industry selected")
    .required("Industry is required"),
});

export const ProviderStepThreeSchema = yup.object({
  about: yup
    .string()
    .min(10, "description must be at least 10 characters")
    .max(500, "description cannot exceed 500 characters")
    .required("description is required"),

  file: yup
    .mixed()
    .nullable()
    .test("fileSize", "file is required", (value) => value !== null)
    .test("fileType", "only PDF files are allowed", (value) => {
      if (value) {
        const validTypes = ["application/pdf"];
        return validTypes.includes(value.type);
      }
      return true;
    }),
});
