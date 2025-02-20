import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

// Personal Information Validation
const personalInfoValidation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.date().required("Date of Birth is required"),
});

// Qualification Validation
const qualificationValidation = Yup.array().of(
  Yup.object().shape({
    degree: Yup.string().required("Degree is required"),
    universityName: Yup.string().required("Univerysity name is required"),
    marks: Yup.number().required("Marks are required"),
    yearOfPassing: Yup.string().required("Year of Passing is required"),
  })
);

// Additional Information Validation
const additionalInfoValidation = Yup.object().shape({
  motherTounge: Yup.string().required("Mother Tongue is required"),
  expectedSalary: Yup.number()
    .positive("Salary must be a positive number")
    .required("Expected Salary is required"),
  ets: Yup.number()
    .positive("Must be a positive number")
    .required("English Typing Per Minute Required"),
  mts: Yup.number()
    .positive("Must be a positive number")
    .required("Marathi Typing Per Minute Required"),
  otherLanguage: Yup.string().required("Other Language is required"),
  joinDate: Yup.date()
    .required("Joining date is required")
    .min(today, "Joining date must be in the future"),
});

//Work Experience Validation
const workExperienceValidation = Yup.object().shape({
  isFresher: Yup.boolean().required(
    "Please select whether you are a fresher or experienced"
  ),
  workExp: Yup.array().when("isFresher", {
    is: false, // If the applicant is experienced
    then: Yup.array()
      .of(
        Yup.object().shape({
          orgName: Yup.string().required("Organization Name is required"),
          position: Yup.string().required("Position is required"),
          workNature: Yup.string().required("Nature of Work is required"),
          fromDate: Yup.date().required("From Date is required"),
          toDate: Yup.date()
            .nullable()
            .required("To Date is required")
            .when("fromDate", {
              is: (fromDate) => !!fromDate, // Ensure fromDate exists
              then: (schema) =>
                schema.min(
                  Yup.ref("fromDate"),
                  "To Date must be after From Date"
                ),
            }),
          isCurrentlyWorking: Yup.boolean(),
          salary: Yup.number()
            .required("Salary is required")
            .positive("Salary must be a positive number"),
          rfl: Yup.string().required("Reason for Leaving is required"),
        })
      )
      .min(1, "At least one work experience entry is required"),
    otherwise: Yup.array().notRequired(), // If the applicant is a fresher, work experience is optional
  }),
});

export {
  personalInfoValidation,
  additionalInfoValidation,
  qualificationValidation,
  workExperienceValidation,
};
