import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

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
    cgpa: Yup.number()
      .min(0)
      .max(10)
      .positive("Must be a positive number")
      .required("CGPA is required"),
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
          fromDate: Yup.date().required("From Date is required"),
          toDate: Yup.date()
            .nullable()
            .required("To Date is required")
            .when("fromDate", {
              is: (fromDate) => !!fromDate,
              then: (schema) =>
                schema.min(
                  Yup.ref("fromDate"),
                  "To Date must be after From Date"
                ),
            }),
          currentSalary: Yup.number().min(0, "Salary cannot be negative"),
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
    is: (status) => status == "COMPLETED",
    then: () =>
      Yup.string()
        .matches(/^\d{4}$/, "Year must be 4 digits")
        .required("Year of passing is required"),
  }),
  presentedInConference: Yup.boolean().required(
    "Presented in confrence required"
  ),
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


const courseTaughtValidation = Yup.object({
  collegeName: Yup.string().optional(),
  className: Yup.string().optional(),
  subjectName: Yup.string().optional(),
  degreeType: Yup.string().optional(),
  typeOfContract: Yup.string().optional(),
  fromDate: Yup.date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value)), // Optional
  toDate: Yup.date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .max(today, "To Date cannot be in the future"), // If selected, must not be in the future
  yearOfExp: Yup.string()
    .matches(/^\d{4}$/, "Year must be exactly 4 digits") // Must be in YYYY format
    .optional(),
  lastSalary: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(0, "Last Salary must be positive"), // Must be positive
  approvedByUniversity: Yup.string().optional(),
  letterNO: Yup.string().optional(),
  letterDate: Yup.date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .max(today, "Letter Date cannot be in the future"), // Must not be in the future
});


const researchPaperValidation = Yup.array().of(
  Yup.object({
    scopusIndexedPublications: Yup.string().optional(),
    scopusId: Yup.string().optional(),
    presentedInConference: Yup.string().optional(),
    nameOfJournal: Yup.string().optional(),
    yearOfPublication: Yup.string()
      .matches(/^\d{4}$/, "Year must be exactly 4 digits") // Must be in YYYY format
      .test(
        "is-past-year",
        "Year of Publication must be in the past",
        (value) => !value || parseInt(value, 10) <= today.getFullYear()
      )
      .optional(),
    numberOfApproved: Yup.string().optional(),
  })
);

const expectedSalaryValidation = Yup.number()
  .nullable()
  .transform((value, originalValue) => (originalValue === "" ? null : value))
  .min(0, "Expected Salary must be positive"); // Must be positive if provided





export {

  personalInfoValidation,
  addressValidation,
  qualificationsValidation,
  workExperienceValidation,
  phdValidation,
  competitiveExamsValidation,
  expectedSalaryValidation,
  courseTaughtValidation,
  researchPaperValidation
  
};
