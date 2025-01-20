// ApplicantForm.js

import { Formik, Form } from "formik";
import axios from "axios";
import PersonalInfoForm from "./components/PersonalInfoForm"
import AddressForm from "./components/AddressForm";
import QualificationForm from "./components/QualificationForm"
import WorkExperienceForm from "./components/WorkExperienceForm"
import PhdForm from "./components/PhdForm"
import CompetitiveExamsForm from "./components/CompetitiveFormExam";


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
        organizationName: 'null',
        jobTitle: 'null',
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
    universityName: "null",
    yearOfPassing: "null",
    scopusIndexedPublications: 0,
    scopusId: "null",
    presentedInConference: false,
    wosIndexedPublications: 0,
    wosId: "null",
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