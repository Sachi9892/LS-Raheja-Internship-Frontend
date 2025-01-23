import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";

const WorkExperienceForm = () => {
    const { values, setFieldValue } = useFormikContext();

    const handleFresherChange = (isFresher) => {
        setFieldValue("workExperience.isFresher", isFresher);

        // Clear work experience list when switching to "Fresher"
        if (isFresher) {
            setFieldValue("workExperience.list", []);
        }
    };

    return (
        <div>
            <h2>Work Experience</h2>

            {/* Fresher or Experienced Radio Buttons */}
            <div>
                <label>
                    <input
                        type="radio"
                        name="workExperience.isFresher"
                        value={true}
                        checked={values.workExperience.isFresher === true}
                        onChange={() => handleFresherChange(true)}
                    />
                    Fresher
                </label>
                <label>
                    <input
                        type="radio"
                        name="workExperience.isFresher"
                        value={false}
                        checked={values.workExperience.isFresher === false}
                        onChange={() => handleFresherChange(false)}
                    />
                    Experienced
                </label>
            </div>
            <ErrorMessage
                name="workExperience.isFresher"
                component="div"
                className="error"
            />

            {/* Work Experience List */}
            {!values.workExperience.isFresher && (
                <FieldArray name="workExperience.list">
                    {({ push, remove }) => (
                        <div>
                            {values.workExperience.list.map((experience, index) => (
                                <div key={index}>
                                    <label>Organization Name:</label>
                                    <Field
                                        name={`workExperience.list[${index}].organizationName`}
                                        placeholder="Organization Name"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].organizationName`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>Job Title:</label>
                                    <Field
                                        name={`workExperience.list[${index}].jobTitle`}
                                        placeholder="Job Title"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].jobTitle`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>
                                        <Field
                                            type="checkbox"
                                            name={`workExperience.list[${index}].isCurrentlyWorking`}
                                        />
                                        Currently Working
                                    </label>
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].isCurrentlyWorking`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>From Date:</label>
                                    <Field
                                        name={`workExperience.list[${index}].fromDate`}
                                        type="date"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].fromDate`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>To Date:</label>
                                    <Field
                                        name={`workExperience.list[${index}].toDate`}
                                        type="date"
                                        disabled={
                                            values.workExperience.list[index].isCurrentlyWorking
                                        }
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].toDate`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>Notice Period:</label>
                                    <Field
                                        name={`workExperience.list[${index}].noticePeriod`}
                                        as="select"
                                    >
                                        <option value="NOT_APPLICABLE">Not Applicable</option>
                                        <option value="LESS_THEN_1_MONTH">Less than a month</option>
                                        <option value="TWO_MONTHS">2 months</option>
                                        <option value="THREE_MONTHS">3 months</option>
                                        <option value="MORE_THAN_3_MONTHS">
                                            More than 3 months
                                        </option>
                                    </Field>
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].noticePeriod`}
                                        component="div"
                                        className="error"
                                    />

                                    <label>Salary:</label>
                                    <Field
                                        name={`workExperience.list[${index}].currentSalary`}
                                        placeholder="Enter Salary"
                                        type="number"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].currentSalary`}
                                        component="div"
                                        className="error"
                                    />

                                    <button type="button" onClick={() => remove(index)}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() =>
                                    push({
                                        organizationName: "",
                                        jobTitle: "",
                                        isCurrentlyWorking: false,
                                        fromDate: "",
                                        toDate: "",
                                        currentSalary: 0,
                                        noticePeriod: "NOT_APPLICABLE",
                                    })
                                }
                            >
                                Add Work Experience
                            </button>
                        </div>
                    )}
                </FieldArray>
            )}
        </div>
    );
};

export default WorkExperienceForm;
