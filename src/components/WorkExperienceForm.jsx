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
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">

            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Work Experience</h2>

            {/* Fresher or Experienced Selection */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="workExperience.isFresher"
                        value="true"
                        checked={values.workExperience.isFresher === true}
                        onChange={() => handleFresherChange(true)}
                        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                    />
                    <span className="text-gray-700">Fresher</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="workExperience.isFresher"
                        value="false"
                        checked={values.workExperience.isFresher === false}
                        onChange={() => handleFresherChange(false)}
                        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                    />
                    <span className="text-gray-700">Experienced</span>
                </label>
            </div>
            <ErrorMessage name="workExperience.isFresher" component="div" className="text-red-500 text-sm mb-4" />

            {/* Work Experience List */}
            {!values.workExperience.isFresher && (
                <FieldArray name="workExperience.list">
                    {({ push, remove }) => (
                        <div>
                            {values.workExperience.list.map((experience, index) => (
                                <div key={index} className="border p-4 rounded-lg mb-6 shadow-sm bg-gray-50">
                                    {/* Organization Name */}
                                    <label className="block text-gray-600 font-medium">Organization Name</label>
                                    <Field
                                        name={`workExperience.list[${index}].organizationName`}
                                        placeholder="Organization Name"
                                        className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].organizationName`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* Job Title */}
                                    <label className="block text-gray-600 font-medium mt-3">Job Title</label>
                                    <Field
                                        name={`workExperience.list[${index}].jobTitle`}
                                        placeholder="Job Title"
                                        className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].jobTitle`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* Currently Working Checkbox */}
                                    <div className="flex items-center gap-2 mt-3">
                                        <Field
                                            type="checkbox"
                                            name={`workExperience.list[${index}].isCurrentlyWorking`}
                                            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                                        />
                                        <span className="text-gray-700">Currently Working</span>
                                    </div>
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].isCurrentlyWorking`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* From Date */}
                                    <label className="block text-gray-600 font-medium mt-3">From Date</label>
                                    <Field
                                        name={`workExperience.list[${index}].fromDate`}
                                        type="date"
                                        className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].fromDate`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* To Date */}
                                    <label className="block text-gray-600 font-medium mt-3">To Date</label>
                                    <Field
                                        name={`workExperience.list[${index}].toDate`}
                                        type="date"
                                        disabled={values.workExperience.list[index].isCurrentlyWorking}
                                        className={`w-full p-2 border rounded-md mt-1 ${values.workExperience.list[index].isCurrentlyWorking
                                            ? "bg-gray-200 cursor-not-allowed"
                                            : "focus:ring-2 focus:ring-blue-400"
                                            }`}
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].toDate`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* Notice Period */}
                                    <label className="block text-gray-600 font-medium mt-3">Notice Period</label>
                                    <Field
                                        name={`workExperience.list[${index}].noticePeriod`}
                                        as="select"
                                        className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="NOT_APPLICABLE">Not Applicable</option>
                                        <option value="LESS_THAN_1_MONTH">Less than a month</option>
                                        <option value="TWO_MONTHS">2 months</option>
                                        <option value="THREE_MONTHS">3 months</option>
                                        <option value="MORE_THAN_3_MONTHS">More than 3 months</option>
                                    </Field>
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].noticePeriod`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* Salary */}
                                    <label className="block text-gray-600 font-medium mt-3">Salary</label>
                                    <Field
                                        name={`workExperience.list[${index}].currentSalary`}
                                        placeholder="Enter Salary"
                                        type="number"
                                        className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name={`workExperience.list[${index}].currentSalary`}
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />

                                    {/* Remove Experience Button */}
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                            {/* Add Work Experience Button */}
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
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full mt-4"
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
