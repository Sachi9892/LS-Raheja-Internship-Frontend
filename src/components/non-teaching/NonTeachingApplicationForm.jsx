import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

import PersonalInfoForm from "./PersonalInfoForm";
import QualificationForm from "./QualificationForm";
import AdditionalInfoForm from "./AdditionalInfoForm";
import WorkExperienceForm from "./WorkExperienceForm";
import "../../App.css";

import {

    personalInfoValidation,
    qualificationValidation,
    additionalInfoValidation

} from "./NonTeachingValidation";

const NonTeachingApplicationForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = {
        personalInfo: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            address: "",
            dob: "",
        },
        qualificationInfo: [],
        addInfo: {
            ets: "",
            mts: "",
            motherTounge: "",
            otherLanguage: "",
            joinDate: "",
            expectedSalary: "",
            comment: "",
        },
        workExp: [
            {
                orgName: "",
                position: "",
                workNature: "",
                fromDate: "",
                toDate: "",
                salary: 0,
                rfl: "",
                isCurrentlyWorking: false,
            },
        ],
        isFresher: false,
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const formData = new FormData();

            // Convert JSON data to a blob
            const jsonBlob = new Blob([JSON.stringify(values)], { type: "application/json" });
            formData.append("applicant", jsonBlob);
            console.log("Data : ", jsonBlob)

            if (values.resume) {
                formData.append("resume", values.resume);
                console.log("resume ", values.resume)
            }

            const response = await axios.post(
                "http://localhost:8080/lsraheja/non-teaching/apply-now",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            if (response.status === 201) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setSubmitting(false);
            setIsSubmitting(false);
        }
    };


    return (
        <div className="applicant-form-container">
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Non-Teaching Application Form</h2>
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
                            qualificationInfo: qualificationValidation,
                            addInfo: additionalInfoValidation,
                            // workExp: workExperienceValidation,
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
                                {/* Personal Information Form */}
                                <PersonalInfoForm />

                                {/* Qualification Information Form */}
                                <QualificationForm />

                                {/* Additional Information Form */}
                                <AdditionalInfoForm />

                                {/* Work Experience Form */}
                                <WorkExperienceForm />

                                {/* CV Upload Section */}
                                <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
                                    <div className="space-y-2 mb-6">
                                        <label htmlFor="cv" className="block text-gray-600 font-medium">
                                            Upload CV
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
        </div>
    );
};

export default NonTeachingApplicationForm;