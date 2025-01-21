import * as Yup from "yup";

const personalInfoValidation = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
});

export default personalInfoValidation;
