import { FieldArray, Field, ErrorMessage } from "formik";

const QualificationForm = () => {
    return (
        <div>
            <h2>Qualifications</h2>
            <FieldArray name="qualifications">
                {({ push, remove, form }) => (
                    <div>
                        {form.values.qualifications.map((qualification, index) => (
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
                                <ErrorMessage
                                    name={`qualifications[${index}].degree`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                <label>Degree Name:</label>
                                <Field
                                    name={`qualifications[${index}].degreeName`}
                                    placeholder="Degree Name"
                                />
                                <ErrorMessage
                                    name={`qualifications[${index}].degreeName`}
                                    component="div"
                                    style={{ color: "red" }}
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
                                <ErrorMessage
                                    name={`qualifications[${index}].educationMode`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                <label>University Name:</label>
                                <Field
                                    name={`qualifications[${index}].universityName`}
                                    placeholder="University Name"
                                />
                                <ErrorMessage
                                    name={`qualifications[${index}].universityName`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                <label>Specialization:</label>
                                <Field
                                    name={`qualifications[${index}].specialization`}
                                    placeholder="Specialization"
                                />
                                <ErrorMessage
                                    name={`qualifications[${index}].specialization`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                <label>Year of Passing:</label>
                                <Field
                                    name={`qualifications[${index}].yearOfPassing`}
                                    type="number"
                                />
                                <ErrorMessage
                                    name={`qualifications[${index}].yearOfPassing`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                <label>CGPA:</label>
                                <Field
                                    name={`qualifications[${index}].cgpa`}
                                    placeholder="CGPA"
                                    type="number"
                                />
                                <ErrorMessage
                                    name={`qualifications[${index}].cgpa`}
                                    component="div"
                                    style={{ color: "red" }}
                                />

                                {form.values.qualifications.length > 1 && (
                                    <button type="button" onClick={() => remove(index)}>
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() =>
                                push({
                                    degree: "",
                                    degreeName: "",
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
