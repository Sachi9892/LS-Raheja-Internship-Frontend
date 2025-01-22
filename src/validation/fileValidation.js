//validation/fileValidationSchema

import * as Yup from "yup";

const fileValidationSchema = Yup.object().shape({
  resume: Yup.mixed()
    .required("Resume is required")
    .test(
      "fileSize",
      "File size too large, must be under 5MB",
      (value) => value && value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["application/pdf"].includes(value.type)
    ),
});


export default fileValidationSchema;