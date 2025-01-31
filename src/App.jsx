//import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
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
    isFresher: false, // Default value for Fresher/Experienced
    list: [
      {
        organizationName: " ",
        jobTitle: " ",
        isCurrentlyWorking: true,
        fromDate: "",
        toDate: "",
        currentSalary: "0",
        noticePeriod: "NOT_APPLICABLE",
      },
    ],
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
  resume: null,
};

const handleSubmit = async (values, { setSubmitting }) => {

  console.log("Form data:", values);

  const formData = new FormData();

  // Append applicant data
  formData.append("applicant", new Blob([JSON.stringify(values)], { type: "application/json" }));

  // Append resume file
  if (values.resume) {
    formData.append("resume", values.resume);
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


        {/* file upload */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
          {/* File Upload Section */}
          <div className="space-y-2 mb-6">
            <label htmlFor="resume" className="block text-gray-600 font-medium">
              Upload Resume
            </label>
            <div className="relative">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf"
                onChange={(event) => setFieldValue("resume", event.currentTarget.files[0])}
                className="opacity-0 absolute w-full h-full cursor-pointer"
              />
              <div className="flex items-center justify-between p-2 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100">
                <span className="text-gray-500">
                  {values.resume ? values.resume.name : "Choose a file"}
                </span>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => document.getElementById("resume").click()}
                >
                  Browse
                </button>
              </div>
            </div>
            <ErrorMessage name="resume" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-center text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Debugging */}
        <pre>{JSON.stringify(values, null, 2)}</pre>
        <pre>{JSON.stringify(errors, null, 2)}</pre> {/* Display validation errors */}
      </Form>
    )}
  </Formik>

);


export default ApplicantForm;
