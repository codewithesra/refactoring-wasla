import * as yup from "yup";

export const StepOneSchema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("email is required"),
  password: yup.string().min(7).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("confirm your password"),
});

export const StepTwoSchema = yup.object().shape({
  firstName: yup.string().min(2).required("first name is required"),
  lastName: yup.string().min(2).required("last name is required"),
  gender: yup.string().required("gender is required"),
  major: yup.string().min(2).required("major is required"),
});

export const StepThreeSchema = yup.object().shape({
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
