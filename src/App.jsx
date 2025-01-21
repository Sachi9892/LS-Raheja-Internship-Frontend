import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PersonalInfoForm from "./components/PersonalInfoForm"
import AddressForm from "./components/AddressForm";
import QualificationForm from "./components/QualificationForm"
import WorkExperienceForm from "./components/WorkExperienceForm"
import PhdForm from "./components/PhdForm"
import CompetitiveExamsForm from "./components/CompetitiveFormExam";
import addressValidation from "./validation/addressValidation";
import competitiveExamsValidation from "./validation/competitiveExamsValidation";
import personalInfoValidation from "./validation/personalInfoValidation";
import phdValidation from "./validation/phdValidation";
import workExperienceValidation from "./validation/workExperienceValidation";


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
        organizationName: ' ',
        jobTitle: ' ',
        isCurrentlyWorking: "false",
        fromDate: '',
        toDate: '',
        currentSalary: '0',
        noticePeriod: 'NOT_APPLICABLE'
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
};

const handleSubmit = async (values, { setSubmitting }) => {

  console.log("Form data : ", values);

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

//validation
const formValidationSchema = Yup.object().shape({
  personalInfo: personalInfoValidation,
  address: addressValidation,
  competitiveExams: competitiveExamsValidation,
  phd: phdValidation,
  workExperience: workExperienceValidation,
});

const ApplicantForm = () => (

  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={formValidationSchema} // Use validationSchema instead of validate
  >
    {({ values, setFieldValue, errors }) => (
      <Form>
        <PersonalInfoForm />
        <AddressForm />
        <QualificationForm />
        <CompetitiveExamsForm />
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
            onChange={(event) => setFieldValue("resume", event.currentTarget.files[0])}
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
