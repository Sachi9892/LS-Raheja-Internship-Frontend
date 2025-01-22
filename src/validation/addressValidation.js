//validation/addressValidation

import * as Yup from "yup";

const addressValidation = Yup.object({
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pin code must be 6 digits")
    .required("Pin code is required"),
});

export default addressValidation;
