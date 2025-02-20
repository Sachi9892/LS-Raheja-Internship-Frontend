import { Field, ErrorMessage, FieldArray } from "formik";

const QualificationForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Qualification Information</h2>

            <FieldArray name="qualificationInfo">
                {({ push, remove, form }) => (
                    <div>
                        {form.values.qualificationInfo.map((qualification, index) => (
                            <div key={index} className="mb-6 border-b-2 pb-4">

                                {/* Degree Name (Dropdown) */}
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-medium">Degree Name</label>
                                    <Field
                                        as="select"
                                        name={`qualificationInfo[${index}].degree`}
                                        className="w-full p-2 border rounded-md mt-1"
                                    >
                                        <option value="">Select Degree</option>
                                        <option value="BA">BA</option>
                                        <option value="BCOM">BCOM</option>
                                        <option value="BSC">BSC</option>
                                        <option value="MA">MA</option>
                                        <option value="MCOM">MCOM</option>
                                        <option value="MSC">MSC</option>
                                        <option value="MSCIT">MSCIT</option>
                                    </Field>
                                    <ErrorMessage
                                        name={`qualificationInfo[${index}].degree`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>


                                {/* { University Name } */}
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-medium"> Board/University Name:</label>
                                    <Field
                                        name={`qualificationInfo[${index}].universityName`}
                                        placeholder="Board/University"
                                        className="w-full p-2 border rounded-md mt-1"
                                    />
                                    <ErrorMessage
                                        name={`qualificationInfo[${index}].universityName`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Marks */}
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-medium">Marks (%)</label>
                                    <Field
                                        type="number"
                                        name={`qualificationInfo[${index}].marks`}
                                        placeholder="Marks"
                                        className="w-full p-2 border rounded-md mt-1"
                                    />
                                    <ErrorMessage
                                        name={`qualificationInfo[${index}].marks`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Grade */}
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-medium">Grade</label>
                                    <Field
                                        type="text"
                                        name={`qualificationInfo[${index}].grade`}
                                        placeholder="Grade (e.g., A, B+)"
                                        className="w-full p-2 border rounded-md mt-1"
                                    />
                                    <ErrorMessage
                                        name={`qualificationInfo[${index}].grade`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Year of Passing */}
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-medium">Year of Passing</label>
                                    <Field
                                        type="text"
                                        name={`qualificationInfo[${index}].yearOfPassing`}
                                        placeholder="Year of Passing"
                                        className="w-full p-2 border rounded-md mt-1"
                                    />
                                    <ErrorMessage
                                        name={`qualificationInfo[${index}].yearOfPassing`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Remove Button */}
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Remove Qualification
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add New Qualification Button */}
                        <button
                            type="button"
                            onClick={() => push({ degree: "", marks: "", grade: "", yearOfPassing: "" })}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
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
