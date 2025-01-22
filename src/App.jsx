//import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import AddressForm from "./components/AddressForm"
import PersonalInfoForm from "./components/PersonalInfoForm"
import CompetitiveFormExam from "./components/CompetitiveFormExam"
import PhdForm from "./components/PhdForm"
import QualificationForm from "./components/QualificationForm"
import WorkExperienceForm from "./components/WorkExperienceForm"


// Import your validation schemas
import {
  personalInfoValidation,
  addressValidation,
  qualificationsValidation,
  workExperienceValidation,
  phdValidation,
  competitiveExamsValidation,
  fileValidationSchema,
} from "./validation/FormValidation"

const initialValues = {
  personalInfo: {
    role: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  },
  address: {
    state: "",
    city: "",
    pinCode: "",
  },
  qualifications: [{
    degree: '',
    educationMode: '',
    universityName: '',
    specialization: '',
    yearOfPassing: '',
    cgpa: ''
  }],
  workExperience: {
    isFresher: "true", // Default value for Fresher/Experienced
    list: [
      {
        organizationName: " ",
        jobTitle: " ",
        isCurrentlyWorking: "false",
        fromDate: "",
        toDate: "",
        currentSalary: "0",
        noticePeriod: "NOT_APPLICABLE",
      },
    ],
    resume: null,
  },
  phd: {
    status: "NOT_APPLICABLE",
    universityName: " ",
    yearOfPassing: " ",
    scopusIndexedPublications: " ",
    scopusId: " ",
    presentedInConference: false,
    wosIndexedPublications: " ",
    wosId: " ",
  },
  competitiveExams: [
    { examName: "NET", isAppeared: false, yearOfPassing: "" },
    { examName: "SET", isAppeared: false, yearOfPassing: "" },
    { examName: "SLET", isAppeared: false, yearOfPassing: "" },
    { examName: "GATE", isAppeared: false, yearOfPassing: "" },
  ],
};

const handleSubmit = async (values, { setSubmitting }) => {
  console.log("Form data:", values);

  const formData = new FormData();

  // Append applicant data
  formData.append("applicant", new Blob([JSON.stringify(values)], { type: "application/json" }));

  // Append resume file
  if (values.workExperience.resume) {
    formData.append("resume", values.workExperience.resume);
  }

  try {
    const response = await axios.post("http://localhost:8080/lsraheja/apply-now", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Form, Resume submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    setSubmitting(false);
  }
};

const ApplicantForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={Yup.object().shape({
      personalInfo: personalInfoValidation,
      address: addressValidation,
      qualifications: qualificationsValidation,
      workExperience: workExperienceValidation,
      phd: phdValidation,
      competitiveExams: competitiveExamsValidation,
      resume: fileValidationSchema, // Validation for the resume field
    })}
    validateOnChange={true} // Validate when fields change
    validateOnBlur={true} // Validate when fields lose focus
  >
    {({ values, setFieldValue, errors }) => (
      <Form>
        <PersonalInfoForm />
        <AddressForm />
        <QualificationForm />
        <CompetitiveFormExam />
        <WorkExperienceForm />
        <PhdForm />

        {/* File Upload */}
        <div>
          <label htmlFor="resume">Upload Resume:</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf"
            onChange={(event) => setFieldValue("workExperience.resume", event.currentTarget.files[0])}
          />
        </div>
        <button type="submit">Submit</button>

        {/* Debugging */}
        <pre>{JSON.stringify(values, null, 2)}</pre>
        <pre>{JSON.stringify(errors, null, 2)}</pre> {/* Display validation errors */}
      </Form>
    )}
  </Formik>

);


export default ApplicantForm;
