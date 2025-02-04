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
import "./App.css"

import {
  personalInfoValidation,
  addressValidation,
  qualificationsValidation,
  workExperienceValidation,
  phdValidation,
  competitiveExamsValidation,
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
        organizationName: "",
        jobTitle: "",
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
    universityName: "",
    yearOfPassing: "",
    scopusIndexedPublications: "",
    scopusId: "",
    presentedInConference: false,
    wosIndexedPublications: "",
    wosId: "",
  },
  competitiveExams: [
    { examName: "NET", isAppeared: false, yearOfPassing: "" },
    { examName: "SET", isAppeared: false, yearOfPassing: "" },
    { examName: "SLET", isAppeared: false, yearOfPassing: "" },
    { examName: "GATE", isAppeared: false, yearOfPassing: "" },
  ],
};

// const handleSubmit = async (values, { setSubmitting }) => {
//   const formData = new FormData();

//   // Extract resume and keep the rest as applicant data
//   const { resume, ...applicantData } = values;

//   formData.append(
//     "applicant",
//     new Blob([JSON.stringify(applicantData)], { type: "application/json" })
//   );

//   if (resume) {
//     formData.append("resume", resume);
//     console.log("resume attached ", resume.name);
//   }

//   try {
//     const response = await axios.post(
//       "http://localhost:8080/lsraheja/apply-now",
//       formData,
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );
//     console.log("Form submitted successfully:", response.data);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   } finally {
//     setSubmitting(false);
//   }
// };

const handleSubmit = async (values) => {
  try {
    console.log("Sending Data:", values); // Debugging
    const response = await axios.post(
      "http://localhost:8080/lsraheja/test",
      values, // <-- Add this (values should be the request body)
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Form submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting form:", error.response ? error.response.data : error.message);
  }
};



const ApplicantForm = () => (
  <div className="applicant-form-container"> {/* Apply background */}
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
      })}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ values, setFieldValue, errors }) => (
        <Form>
          <img
            src="src\assets\images\lsrj_banner.jpg"
            alt="College Banner"
            className="w-full max-h-40 object-cover mb-4"
          />

          <PersonalInfoForm />
          <AddressForm />
          <QualificationForm />
          <CompetitiveFormExam />
          <WorkExperienceForm />
          <PhdForm />

          {/* File Upload Section */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
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
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    console.log("Selected file:", file.name); // Debugging
                    setFieldValue("resume", file);
                  }}


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
            </div>

            {/* Submit Button */}
            <div className="text-center rounded-md mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-center text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Debugging */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default ApplicantForm;

