//import React from "react";
import { FieldArray, Field } from "formik";

const QualificationForm = () => {
    return (
        <div>
            <h2>Qualifications</h2>
            <FieldArray name="qualifications">
                {({ push, remove, form }) => (
                    <div>
                        {form.values.qualifications.map((qualification, index) => {

                            return (
                                <div key={index}>
                                    <label>Degree:</label>
                                    <Field
                                        as="select"
                                        name={`qualifications[${index}].degree`}
                                    >
                                        <option value="">Select degree</option>
                                        <option value="PG">PG</option>
                                        <option value="MASTERS">Masters</option>
                                        <option value="DOCTORATE">Doctorate</option>
                                        <option value="BACHELORS">Bachelors</option>
                                        <option value="DIPLOMA">Diploma</option>
                                        <option value="HIGHER_SECONDARY">
                                            Higher Secondary
                                        </option>
                                    </Field>

                                    <label>Degree Name : </label>
                                    <Field
                                        name={`qualifications[${index}].degreeName`}
                                        
                                    />

                                    <label>Education Mode:</label>
                                    <Field
                                        as="select"
                                        name={`qualifications[${index}].educationMode`}
                                    >
                                        <option value="">Education Mode</option>
                                        <option value="REGULAR">Regular</option>
                                        <option value="DISTANCE">Distance</option>
                                        <option value="PART_TIME">Part Time</option>
                                    </Field>
                                    <label>University Name:</label>
                                    <Field
                                        name={`qualifications[${index}].universityName`}
                                        placeholder="University Name"

                                    />
                                    <label>Specialization:</label>
                                    <Field
                                        name={`qualifications[${index}].specialization`}
                                        placeholder="Specialization"
                                    />
                                    <label>Year of Passing:</label>
                                    <Field
                                        name={`qualifications[${index}].yearOfPassing`}
                                        type="num"
                                    />
                                    <label>CGPA:</label>
                                    <Field
                                        name={`qualifications[${index}].cgpa`}
                                        placeholder="CGPA"
                                    />
                                    {form.values.qualifications.length > 1 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                        <button
                            type="button"
                            onClick={() =>
                                push({
                                    degree: "",
                                    educationMode: "",
                                    universityName: "",
                                    specialization: "",
                                    yearOfPassing: "",
                                    cgpa: "",
                                })
                            }
                        >
                            Add Qualification
                        </button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default QualificationForm;