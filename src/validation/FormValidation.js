import * as Yup from "yup";

const personalInfoValidation = Yup.object({
  role: Yup.string().required("Role is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
});

const addressValidation = Yup.object({
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pin code must be 6 digits")
    .required("Pin code is required"),
});

const qualificationsValidation = Yup.array().of(
  Yup.object({
    degree: Yup.string().required("Degree is required"),
    degreeName: Yup.string().required("Degree name is required"),
    educationMode: Yup.string().required("Education mode is required"),
    universityName: Yup.string().required("University name is required"),
    specialization: Yup.string().required("Specialization is required"),
    yearOfPassing: Yup.string()
      .matches(/^\d{4}$/, "Year must be 4 digits")
      .required("Year of passing is required"),
    cgpa: Yup.number().min(0).max(10).required("CGPA is required"),
  })
);

const workExperienceValidation = Yup.object({
  isFresher: Yup.boolean().required(
    "Please specify if you are a fresher or experienced"
  ),
  list: Yup.array().when("isFresher", {
    is: (isFresher) => !isFresher,
    then: () =>
      Yup.array().of(
        Yup.object({
          organizationName: Yup.string().required(
            "Organization name is required"
          ),
          jobTitle: Yup.string().required("Job title is required"),
          isCurrentlyWorking: Yup.boolean().required(
            "Specify if currently working"
          ),
          fromDate: Yup.date().required("Start date is required"),
          toDate: Yup.date().when("isCurrentlyWorking", {
            is: false,
            then: (schema) => schema.required("End date is required"),
          }),
          currentSalary: Yup.number().min(0, "Salary cannot be negative"),
          noticePeriod: Yup.string().required("Notice period is required"),
        })
      ),
  }),
});

const phdValidation = Yup.object({
  status: Yup.string().required("PhD status is required"),
  universityName: Yup.string().when("status", {
    is: (status) => status !== "NOT_APPLICABLE",
    then: () => Yup.string().required("University name is required"),
  }),
  yearOfPassing: Yup.string().when("status", {
    is: (status) => status !== "NOT_APPLICABLE",
    then: () =>
      Yup.string()
        .matches(/^\d{4}$/, "Year must be 4 digits")
        .required("Year of passing is required"),
  }),
  scopusIndexedPublications: Yup.string(),
  scopusId: Yup.string(),
  presentedInConference: Yup.boolean(),
  wosIndexedPublications: Yup.string(),
  wosId: Yup.string(),
});

const competitiveExamsValidation = Yup.array().of(
  Yup.object({
    isAppeared: Yup.boolean()
      .oneOf([true, false], "Please specify if you appeared for the exam")
      .required("Please specify if you appeared for the exam"),
    yearOfPassing: Yup.string().when("isAppeared", {
      is: true,
      then: () =>
        Yup.string()
          .matches(/^\d{4}$/, "Year must be 4 digits")
          .required("Year of passing is required"),
      otherwise: () => Yup.string().nullable(),
    }),
  })
);

const fileValidationSchema = Yup.object({
  resume: Yup.mixed()
    .required("Resume is required")
    .test(
      "fileSize",
      "File size is too large",
      (value) => !value || value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => !value || ["application/pdf"].includes(value.type)
    ),
});

export {
  personalInfoValidation,
  addressValidation,
  qualificationsValidation,
  workExperienceValidation,
  phdValidation,
  competitiveExamsValidation,
  fileValidationSchema,
};
