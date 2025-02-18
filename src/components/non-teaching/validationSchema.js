import * as Yup from "yup";

export const validationSchema = Yup.object({
  personalInfo: Yup.object({
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string().required("Middle Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
      .required("Mobile Number is required"),
    address: Yup.string().required("Address is required"),
    dob: Yup.date()
      .required("Date of Birth is required")
      .max(new Date(), "Date of Birth cannot be in the future"),
  }),
  qualificationInfo: Yup.array()
    .of(
      Yup.object({
        degree: Yup.string().required("Degree is required"),
        marks: Yup.string().required("Marks are required"),
        grade: Yup.string().required("Grade is required"),
        yearOfPassing: Yup.string()
          .matches(/^[0-9]{4}$/, "Year of Passing must be a valid year")
          .required("Year of Passing is required"),
      })
    )
    .min(1, "At least one qualification is required"),
  addInfo: Yup.object({
    ets: Yup.string().required("ETS is required"),
    mts: Yup.string().required("MTS is required"),
    motherTounge: Yup.string().required("Mother Tongue is required"),
    otherLanguage: Yup.string().required("Other Language is required"),
    joinDate: Yup.date().required("Join Date is required"),
    expectedSalary: Yup.string().required("Expected Salary is required"),
    comment: Yup.string().required("Comment is required"),
  }),
  workExp: Yup.array()
    .of(
      Yup.object({
        orgName: Yup.string().required("Organization Name is required"),
        position: Yup.string().required("Position is required"),
        workNature: Yup.string().required("Nature of Work is required"),
        fromDate: Yup.date().required("From Date is required"),
        toDate: Yup.date()
          .required("To Date is required")
          .when("fromDate", (fromDate, schema) =>
            fromDate
              ? schema.min(fromDate, "To Date must be after From Date")
              : schema
          ),
        salary: Yup.string().required("Salary is required"),
      })
    )
    .min(1, "At least one work experience is required"),
});
