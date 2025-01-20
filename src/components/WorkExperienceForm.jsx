
import { FieldArray, Field, useFormikContext } from "formik";

const WorkExperienceForm = () => {

    const { values, setFieldValue } = useFormikContext(); // Access Formik values and setFieldValue

    const handleFresherChange = () => {

        const isFresher = values.workExperience.isFresher;

        // Toggle the fresher state
        setFieldValue("workExperience.isFresher", !isFresher);

        // Clear fields if the user marks themselves as a fresher
        if (!isFresher) {
            setFieldValue("workExperience.list", []); // Clear the work experience list
        }
    }; // Access Formik values and setFieldValue

    return (
        <div>
            <h2>Work Experience</h2>

            {/* Fresher or Experienced Radio Buttons */}
            <Field name="workExperience.isFresher">
                {({ field }) => (
                    <div>
                        <label>
                            <input
                                type="radio"
                                {...field}
                                value="true"
                                checked={field.value === "true"}
                                onChange={handleFresherChange}
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
                    const isCurrentlyWorkingSet = form.values.workExperience.list.some(
                        (job) => job.isCurrentlyWorking
                    );

                    return (
                        <div>
                            {form.values.workExperience.list?.map((experience, index) => (
                                <div key={index}>
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

                                    {/* "I am currently working" Checkbox */}
                                    {!isFresher && (
                                        <label>
                                            <Field
                                                type="checkbox"
                                                name={`workExperience.list[${index}].isCurrentlyWorking`}
                                                disabled={
                                                    isFresher ||
                                                    (isCurrentlyWorkingSet &&
                                                        !experience.isCurrentlyWorking)
                                                }
                                                onChange={(e) => {
                                                    const isChecked = e.target.checked;
                                                    form.setFieldValue(
                                                        `workExperience.list[${index}].isCurrentlyWorking`,
                                                        isChecked
                                                    );

                                                    // Update noticePeriod based on isCurrentlyWorking
                                                    if (isChecked) {
                                                        form.setFieldValue(
                                                            `workExperience.list[${index}].noticePeriod`,
                                                            "LESS_THEN_1_MONTH"
                                                        );
                                                    } else {
                                                        form.setFieldValue(
                                                            `workExperience.list[${index}].noticePeriod`,
                                                            "NOT_APPLICABLE"
                                                        );
                                                    }
                                                }}
                                            />
                                            I am currently working in this role
                                        </label>
                                    )}

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

                                    {/* Notice Period */}
                                    <label>Notice Period:</label>
                                    <Field
                                        name={`workExperience.list[${index}].noticePeriod`}
                                        as="select"
                                        disabled={
                                            isFresher || !experience.isCurrentlyWorking
                                        }
                                    >
                                        <option value="NOT_APPLICABLE">Not Applicable</option>
                                        <option value="LESS_THEN_1_MONTH">Less than a month</option>
                                        <option value="TWO_MONTHS">Less than 2 months</option>
                                        <option value="THREE_MONTHS">3 months</option>
                                        <option value="MORE_THAN_3_MONTHS">
                                            More than 3 months
                                        </option>
                                    </Field>

                                    <label>Salary:</label>
                                    <Field
                                        name={`workExperience.list[${index}].currentSalary`}
                                        placeholder="Current Salary"
                                        type="number"
                                        onBlur={(e) => {
                                            if (!e.target.value) {
                                                form.setFieldValue(
                                                    `workExperience.list[${index}].currentSalary`,
                                                    0 // Default to 0 if empty
                                                );
                                            }
                                        }}
                                        disabled={isFresher}
                                    />


                                    {/* Remove Button */}
                                    {!isFresher &&
                                        form.values.workExperience.list.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
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
                                            noticePeriod: "NOT_APPLICABLE",
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
