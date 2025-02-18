import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "./validationSchema";
import "./style.css";

const NTApplicationForm = () => {
    const initialValues = {
        personalInfo: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            address: "",
            dob: null,
        },
        qualificationInfo: [{ degree: "", marks: "", grade: "", yearOfPassing: "" }],
        addInfo: {
            ets: "",
            mts: "",
            motherTounge: "",
            otherLanguage: "",
            joinDate: null,
            expectedSalary: "",
            comment: "",
        },
        workExp: [
            {
                orgName: "",
                position: "",
                workNature: "",
                isCurrentlyWorking: false,
                fromDate: null,
                toDate: null,
                rfl: "",
                salary: "",
            },
        ],
    };

    const handleSubmit = (values) => {
        console.log("Form Data:", values);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2 className="form-title">Non-Teaching Application Form</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="form-layout">
                            {/* Personal Information */}
                            <div className="section">
                                <h3 className="section-title">Personal Information</h3>
                                <div className="grid-container">
                                    {Object.keys(initialValues.personalInfo).map((key) => (
                                        <div key={key}>
                                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                            {key === "dob" || key === "joinDate" ? (
                                                <DatePicker
                                                    selected={values.personalInfo[key]}
                                                    onChange={(date) =>
                                                        setFieldValue(`personalInfo.${key}`, date)
                                                    }
                                                    dateFormat="dd-MM-yyyy"
                                                    className="input-field"
                                                />
                                            ) : key === "address" ? (
                                                <Field
                                                    as="textarea"
                                                    name={`personalInfo.${key}`}
                                                    className="input-field"
                                                />
                                            ) : (
                                                <Field
                                                    type={
                                                        key === "email"
                                                            ? "email"
                                                            : key === "mobileNumber"
                                                                ? "text"
                                                                : "text"
                                                    }
                                                    name={`personalInfo.${key}`}
                                                    className="input-field"
                                                />
                                            )}
                                            <ErrorMessage
                                                name={`personalInfo.${key}`}
                                                component="div"
                                                className="error-text"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="section">
                                <h3 className="section-title">Qualifications</h3>
                                <FieldArray name="qualificationInfo">
                                    {({ push, remove }) => (
                                        <>
                                            {values.qualificationInfo.map((_, index) => (
                                                <div key={index} className="grid-container">
                                                    {Object.keys(initialValues.qualificationInfo[0]).map(
                                                        (key) => (
                                                            <div key={key}>
                                                                <Field
                                                                    name={`qualificationInfo.${index}.${key}`}
                                                                    type="text"
                                                                    placeholder={
                                                                        key.charAt(0).toUpperCase() + key.slice(1)
                                                                    }
                                                                    className="input-field"
                                                                />
                                                                <ErrorMessage
                                                                    name={`qualificationInfo.${index}.${key}`}
                                                                    component="div"
                                                                    className="error-text"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                        className="btn-remove"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    push({
                                                        degree: "",
                                                        marks: "",
                                                        grade: "",
                                                        yearOfPassing: "",
                                                    })
                                                }
                                                className="btn-add"
                                            >
                                                Add Qualification
                                            </button>
                                        </>
                                    )}
                                </FieldArray>
                            </div>

                            {/* Work Experience */}
                            <div className="section">
                                <h3 className="section-title">Work Experience</h3>
                                <FieldArray name="workExp">
                                    {({ push, remove }) => (
                                        <>
                                            {values.workExp.map((_, index) => (
                                                <div key={index} className="grid-container">
                                                    {Object.keys(initialValues.workExp[0]).map((key) =>
                                                        key === "fromDate" || key === "toDate" ? (
                                                            <div key={key}>
                                                                <label>
                                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                                </label>
                                                                <DatePicker
                                                                    selected={values.workExp[index][key]}
                                                                    onChange={(date) =>
                                                                        setFieldValue(`workExp.${index}.${key}`, date)
                                                                    }
                                                                    dateFormat="yyyy-MM-dd"
                                                                    className="input-field"
                                                                />
                                                                <ErrorMessage
                                                                    name={`workExp.${index}.${key}`}
                                                                    component="div"
                                                                    className="error-text"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div key={key}>
                                                                <Field
                                                                    name={`workExp.${index}.${key}`}
                                                                    type="text"
                                                                    placeholder={
                                                                        key.charAt(0).toUpperCase() + key.slice(1)
                                                                    }
                                                                    className="input-field"
                                                                />
                                                                <ErrorMessage
                                                                    name={`workExp.${index}.${key}`}
                                                                    component="div"
                                                                    className="error-text"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                        className="btn-remove"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    push({
                                                        orgName: "",
                                                        position: "",
                                                        workNature: "",
                                                        fromDate: null,
                                                        toDate: null,
                                                        salary: "",
                                                    })
                                                }
                                                className="btn-add"
                                            >
                                                Add Work Experience
                                            </button>
                                        </>
                                    )}
                                </FieldArray>
                            </div>

                            {/* Additional Information */}
                            <div className="section">
                                <h3 className="section-title">Additional Information</h3>
                                <div className="grid-container">
                                    {Object.keys(initialValues.addInfo).map((key) => (
                                        <div key={key} className={key === "comment" ? "full-width" : ""}>
                                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                            {key === "joinDate" ? (
                                                <DatePicker
                                                    selected={values.addInfo[key]}
                                                    onChange={(date) =>
                                                        setFieldValue(`addInfo.${key}`, date)
                                                    }
                                                    dateFormat="dd-MM-yyyy"
                                                    className="input-field"
                                                />
                                            ) : key === "comment" ? (
                                                <Field
                                                    as="textarea"
                                                    name={`addInfo.${key}`}
                                                    className="input-field"
                                                />
                                            ) : (
                                                <Field
                                                    type="text"
                                                    name={`addInfo.${key}`}
                                                    className="input-field"
                                                />
                                            )}
                                            <ErrorMessage
                                                name={`addInfo.${key}`}
                                                component="div"
                                                className="error-text"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="btn-container">
                                <button type="submit" className="btn-submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default NTApplicationForm;