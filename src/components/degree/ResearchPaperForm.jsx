import { FieldArray, Field, ErrorMessage } from "formik";

const ResearchPaperForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Papers</h2>
            <FieldArray name="researchPapers">
                {({ push, remove, form }) => (
                    <div className="space-y-6">
                        {form.values.researchPapers.map((paper, index) => (
                            <div key={index} className="border p-4 rounded-lg bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Scopus Indexed Publications */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Scopus Indexed Publications</label>
                                        <Field
                                            name={`researchPapers[${index}].scopusIndexedPublications`}
                                            type="number"
                                            placeholder="Enter number of publications"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].scopusIndexedPublications`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Scopus ID */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Scopus ID</label>
                                        <Field
                                            name={`researchPapers[${index}].scopusId`}
                                            placeholder="Enter Scopus ID"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].scopusId`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Presented in Conference */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Presented in Conference</label>
                                        <Field as="select" name={`researchPapers[${index}].presentedInConference`} className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400">
                                            <option value="">Select</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </Field>
                                        <ErrorMessage name={`researchPapers[${index}].presentedInConference`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Name of Journal */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Title Of The Paper</label>
                                        <Field
                                            name={`researchPapers[${index}].title`}
                                            placeholder="Enter journal title"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].title`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Name of Journal */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Name of Journal</label>
                                        <Field
                                            name={`researchPapers[${index}].nameOfJournal`}
                                            placeholder="Enter journal name"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].nameOfJournal`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Year of Publication */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Year of Publication</label>
                                        <Field
                                            name={`researchPapers[${index}].yearOfPublication`}
                                            type="date"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].yearOfPublication`} component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Number of Approved */}
                                    <div>
                                        <label className="block text-gray-700 font-medium">Number of Approved Papers</label>
                                        <Field
                                            name={`researchPapers[${index}].numberOfApproved`}
                                            type="number"
                                            placeholder="Enter number of approved papers"
                                            className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                                        />
                                        <ErrorMessage name={`researchPapers[${index}].numberOfApproved`} component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>

                                {/* Remove Button */}
                                {form.values.researchPapers.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="bg-red-500 text-white px-3 py-1 mt-4 rounded-md hover:bg-red-600 transition"
                                    >
                                        Remove Research Paper
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add Research Paper Button */}
                        <button
                            type="button"
                            onClick={() => push({
                                scopusIndexedPublications: "",
                                scopusId: "",
                                presentedInConference: "",
                                nameOfJournal: "",
                                yearOfPublication: "",
                                numberOfApproved: ""
                            })}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            + Add Research Paper
                        </button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default ResearchPaperForm;
