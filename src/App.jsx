// ApplicantForm.js

import { Formik, Form, Field } from "formik";
import axios from "axios";
import PersonalInfoForm from "./components/PersonalInfoForm"
import AddressForm from "./components/AddressForm";
import QualificationForm from "./components/QualificationForm"
import WorkExperienceForm from "./components/WorkExperienceForm"
import PhdForm from "./components/PhdForm"
import CompetitiveExamsForm from "./components/CompetitiveFormExam";

const initialValues = {
  applicantDto: {
    role: "PROFESSOR"
  },
  personalInfo: {
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
    isFresher: "false", // Default value for Fresher/Experienced
    list: [
      {
        organizationName: '',
        jobTitle: '',
        isCurrentlyWorking: false,
        fromDate: '',
        toDate: '',
        currentSalary: 0,
        noticePeriod: ''
      },
    ],
  },
  phd: {
    status: "NOT_APPLICABLE",
    universityName: "",
    yearOfPassing: "",
    scopusIndexedPublications: 0,
    scopusId: "",
    presentedInConference: false,
    wosIndexedPublications: 0,
    wosId: "",
  },
  competitiveExams: [
    { examName: "NET", isAppeared: false, yearOfPassing: "" },
    { examName: "SET", isAppeared: false, yearOfPassing: "" },
    { examName: "SLET", isAppeared: false, yearOfPassing: "" },
    { examName: "GATE", isAppeared: false, yearOfPassing: "" },
  ],
};

const handleSubmit = async (values) => {
  try {
    const response = await axios.post("http://localhost:8080/lsraheja/apply-now", values);
    console.log("Form submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const ApplicantForm = () => (

  <Formik initialValues={initialValues} onSubmit={handleSubmit}>

    {({ values }) => (
      <Form>
        <h1>Applicant Form</h1>
        <div>
          <label>Role: </label>
          <Field as="select" name="applicantDto.role">
            <option value="">Select</option>
            <option value="PROFESSOR">PROFESSOR</option>
            <option value="ASSISTANT_PROFESSOR">ASSISTANT PROFESSOR</option>
            <option value="ASSOCIATE_PROFESSOR">ASSOCIATE PROFESSOR</option>
            <option value="VISITING_FACULTY">VISTING FACULTY</option>
          </Field>
        </div>

        <PersonalInfoForm />
        <AddressForm />
        <QualificationForm />
        <CompetitiveExamsForm />
        <WorkExperienceForm />
        <PhdForm />

        <button type="submit">Submit</button>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
    )}
  </Formik>
);

export default ApplicantForm;