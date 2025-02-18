import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import AddressForm from "./AddressForm";
import PersonalInfoForm from "./PersonalInfoForm";
import CompetitiveExamsForm from "./CompetitiveFormExam";
import PhdForm from "./PhdForm";
import WorkExperienceForm from "./WorkExperienceForm";
import QualificationForm from "./QualificationForm";
import AwardForm from "./AwardForm";
import CourseTaughtForm from "./CourseTaughtForm";
import ResearchPaperForm from "./ResearchPaperForm";

import "../../App.css"

import {
    personalInfoValidation,
    addressValidation,
    qualificationsValidation,
    workExperienceValidation,
    phdValidation,
    competitiveExamsValidation,
} from "../../validation/FormValidation"

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
        maritalStatus: "",
        noOfChilds: "",
        caste: "",
        aadhar: "",
        pan: "",
        passport: "",
    },
    address: {
        state: "",
        city: "",
        pinCode: "",
    },
    qualifications: [
        {
            degree: "",
            educationMode: "",
            universityName: "",
            specialization: "",
            yearOfPassing: "",
            cgpa: "",
        },
    ],
    workExperience: {
        isFresher: false,
        list: [
            {
                organizationName: "",
                jobTitle: "",
                isCurrentlyWorking: false,
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
        presentedInConference: false,
    },
    competitiveExams: [
        { examName: "NET", isAppeared: false, yearOfPassing: "" },
        { examName: "SET", isAppeared: false, yearOfPassing: "" },
        { examName: "SLET", isAppeared: false, yearOfPassing: "" },
        { examName: "GATE", isAppeared: false, yearOfPassing: "" },
    ],
    awardDto: {
        title: "",
        orgName: "",
        nature: "",
        orgRecorgnize: "",
    },
    courseDto: {
        collegeName: "",
        className: "",
        subjectName: "",
        degreeType: "",
        typeOfContract: "",
        fromDate: "",
        toDate: "",
        yearOfExp: "",
        lastSalary: "",
        approvedByUniversity: "",
        letterNO: "",
        letterDate: "",
    },
    researchPapers: [
        {
            scopusIndexedPublications: "",
            scopusId: "",
            presentedInConference: "",
            nameOfJournal: "",
            yearOfPublication: "",
            numberOfApproved: "",
        },
    ],
    refrenceName: "",
    expectedSalary: "",
    appliedFor: "",
    extraActivity: "",
};

const DegreeApplicationForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        const formData = new FormData();

        // Extract resume and keep the rest as applicant data
        const { resume, ...applicantData } = values;

        formData.append(
            "applicant",
            new Blob([JSON.stringify(applicantData)], { type: "application/json" })
        );

        if (resume) {
            formData.append("resume", resume);
            console.log("Resume attached:", resume.name);
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/lsraheja/apply-now",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            console.log("Form submitted successfully:", response.data);

            if (response.status === 201) {
                setIsSubmitted(true); // Show success message
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="applicant-form-container">
            {isSubmitted ? (
                <div className="success-message">
                    <h2 className="text-green-600 text-center font-bold text-2xl">
                        Thank you for applying!
                    </h2>
                    <p className="text-center text-gray-700 mt-2">
                        Your application has been successfully submitted.
                    </p>
                </div>
            ) : (
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
                                src="src/assets/images/lsrj_banner.jpg"
                                alt="College Banner"
                                className="w-full max-h-40 object-cover mb-4"
                            />

                            <PersonalInfoForm />
                            <AddressForm />
                            <QualificationForm />
                            <CompetitiveExamsForm />
                            <WorkExperienceForm />
                            <AwardForm />
                            <CourseTaughtForm />
                            <ResearchPaperForm />
                            <PhdForm />

                            {/* New Fields Section */}
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
                                <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Additional Information</h2>
                                <div className="mb-4">
                                    <div>
                                        <label htmlFor="refrenceName" className="block text-gray-600 font-medium">
                                            Reference Name
                                        </label>
                                        <input
                                            type="text"
                                            id="refrenceName"
                                            name="refrenceName"
                                            value={values.refrenceName}
                                            onChange={(e) => setFieldValue("refrenceName", e.target.value)}
                                            className="mb-4 w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expectedSalary" className="block text-gray-600 font-medium">
                                            Expected Salary
                                        </label>
                                        <input
                                            type="number"
                                            id="expectedSalary"
                                            name="expectedSalary"
                                            value={values.expectedSalary}
                                            onChange={(e) => setFieldValue("expectedSalary", e.target.value)}
                                            className="mb-4 w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="appliedFor" className="block text-gray-600 font-medium">
                                            Applied For
                                        </label>
                                        <input
                                            type="text"
                                            id="appliedFor"
                                            name="appliedFor"
                                            value={values.appliedFor}
                                            onChange={(e) => setFieldValue("appliedFor", e.target.value)}
                                            className="mb-4 w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="extraActivity" className="block text-gray-600 font-medium">
                                            Extra Activity
                                        </label>
                                        <textarea
                                            id="extraActivity"
                                            name="extraActivity"
                                            value={values.extraActivity}
                                            onChange={(e) => setFieldValue("extraActivity", e.target.value)}
                                            className="mb-4 w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                            rows="3"
                                        />
                                    </div>
                                </div>
                            </div>


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
                                                console.log("Selected file:", file.name);
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

                                {/* Submit Button with Loader */}
                                <div className="text-center rounded-md mt-6">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-center text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"
                                                    viewBox="0 0 24 24"
                                                ></svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Debugging */}
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default DegreeApplicationForm;
