//import React from "react";
import { FieldArray, Field } from "formik";

const WorkExperienceForm = () => {
    return (
        <div>
            <h2>Work Experience</h2>
            {/* Radio buttons for Fresher or Experienced */}
            <Field name="workExperience.isFresher">
                {({ field }) => (
                    <div>
                        <label>
                            <input
                                type="radio"
                                {...field}
                                value="true"
                                checked={field.value === "true"}
                            />
                            Fresher
                        </label>
                        <label>
                            <input
                                type="radio"
                                {...field}
                                value="false"
                                checked={field.value === "false"}
                            />
                            Experienced
                        </label>
                    </div>
                )}
            </Field>

            {/* Work Experience List */}
            <FieldArray name="workExperience.list">
                {({ push, remove, form }) => {

                    const isFresher = form.values.workExperience.isFresher === "true";

                    return (
                        <div>
                            {form.values.workExperience.list?.map((experience, index) => (
                                <div key={index} style={{ marginBottom: "1em" }}>
                                    <label>Organization Name:</label>
                                    <Field
                                        name={`workExperience.list[${index}].organizationName`}
                                        placeholder="Organization Name"
                                        disabled={isFresher}
                                    />
                                    <label>Job Title:</label>
                                    <Field
                                        name={`workExperience.list[${index}].jobTitle`}
                                        placeholder="Job Title"
                                        disabled={isFresher}
                                    />
                                    <label>
                                        <Field
                                            type="checkbox"
                                            name={`workExperience.list[${index}].isCurrentlyWorking`}
                                            disabled={isFresher}
                                        />
                                        I am currently working in this role
                                    </label>
                                    <label>From Date:</label>
                                    <Field
                                        name={`workExperience.list[${index}].fromDate`}
                                        type="date"
                                        disabled={isFresher}
                                    />
                                    <label>To Date:</label>
                                    <Field
                                        name={`workExperience.list[${index}].toDate`}
                                        type="date"
                                        disabled={
                                            isFresher ||
                                            form.values.workExperience.list[index].isCurrentlyWorking
                                        }
                                    />

                                    {/* Conditionally render Notice Period */}
                                    {experience.isCurrentlyWorking && (
                                        <>
                                            <label>Notice Period:</label>
                                            <Field
                                                name={`workExperience.list[${index}].noticePeriod`}
                                                as="select"
                                                disabled={isFresher}
                                            >
                                                <option >Select Notice Period</option>
                                                <option value="LESS_THEN_1_MONTH">Less than a month</option>
                                                <option value="TWO_MONTHS">Less then 2 Month</option>
                                                <option value="THREE_MONTHS">3 Months</option>
                                                <option value="MORE_THAN_3_MONTHS">More than 3 Months</option>
                                            </Field>
                                        </>
                                    )}

                                    <label>Current Salary:</label>
                                    <Field
                                        name={`workExperience.list[${index}].currentSalary`}
                                        placeholder="Current Salary"
                                        disabled={isFresher}
                                    />

                                    {/* Remove Button */}
                                    {form.values.workExperience.list.length > 1 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Add Work Experience Button */}
                            {!isFresher && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        push({
                                            organizationName: "",
                                            jobTitle: "",
                                            fromDate: "",
                                            toDate: "",
                                            currentSalary: "",
                                            noticePeriod: "",
                                            isCurrentlyWorking: false,
                                        })
                                    }
                                >
                                    Add Work Experience
                                </button>
                            )}
                        </div>
                    );
                }}
            </FieldArray>
        </div>
    );
};

export default WorkExperienceForm;