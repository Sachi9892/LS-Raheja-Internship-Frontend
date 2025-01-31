import { FieldArray, Field, ErrorMessage } from "formik";

const QualificationForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qualifications</h2>

            <FieldArray name="qualifications">
                {({ push, remove, form }) => (
                    <div className="space-y-6">
                        {form.values.qualifications.map((qualification, index) => (
                            <div key={index} className="border p-4 rounded-lg bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Degree Selection */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Degree</label>
                                        <Field
                                            as="select"
                                            name={`qualifications[${index}].degree`}
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        >
                                            <option value="">Select degree</option>
                                            <option value="PG">PG</option>
                                            <option value="MASTERS">Masters</option>
                                            <option value="DOCTORATE">Doctorate</option>
                                            <option value="BACHELORS">Bachelors</option>
                                            <option value="DIPLOMA">Diploma</option>
                                            <option value="HIGHER_SECONDARY">Higher Secondary</option>
                                        </Field>
                                        <ErrorMessage name={`qualifications[${index}].degree`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Degree Name */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Degree Name</label>
                                        <Field
                                            name={`qualifications[${index}].degreeName`}
                                            placeholder="Enter degree name"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`qualifications[${index}].degreeName`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Education Mode */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Education Mode</label>
                                        <Field
                                            as="select"
                                            name={`qualifications[${index}].educationMode`}
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        >
                                            <option value="">Select mode</option>
                                            <option value="REGULAR">Regular</option>
                                            <option value="DISTANCE">Distance</option>
                                            <option value="PART_TIME">Part Time</option>
                                        </Field>
                                        <ErrorMessage name={`qualifications[${index}].educationMode`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* University Name */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">University Name</label>
                                        <Field
                                            name={`qualifications[${index}].universityName`}
                                            placeholder="Enter university name"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`qualifications[${index}].universityName`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Specialization */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Specialization</label>
                                        <Field
                                            name={`qualifications[${index}].specialization`}
                                            placeholder="Enter specialization"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`qualifications[${index}].specialization`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Year of Passing */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Year of Passing</label>
                                        <Field
                                            name={`qualifications[${index}].yearOfPassing`}
                                            type="number"
                                            placeholder="YYYY"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`qualifications[${index}].yearOfPassing`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* CGPA */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">CGPA</label>
                                        <Field
                                            name={`qualifications[${index}].cgpa`}
                                            placeholder="Enter CGPA"
                                            type="number"
                                            step="0.01"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`qualifications[${index}].cgpa`} component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>

                                {/* Remove Button */}
                                {form.values.qualifications.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="bg-red-500 text-white px-3 py-1 mt-4 rounded-md hover:bg-red-600 transition"
                                    >
                                        Remove Qualification
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add Qualification Button */}
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
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            + Add Qualification
                        </button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default QualificationForm;
