import { Field, ErrorMessage, FieldArray, useFormikContext } from "formik";

const WorkExperienceForm = () => {
    
    const { values, setFieldValue } = useFormikContext();

    const handleFresherChange = (isFresher) => {
        setFieldValue("isFresher", isFresher);

        // Clear work experience list when switching to "Fresher"
        if (isFresher) {
            setFieldValue("workExp", []);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Work Experience Information</h2>

            {/* Fresher or Experienced Selection */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="isFresher"
                        value="true"
                        checked={values.isFresher === true}
                        onChange={() => handleFresherChange(true)}
                        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                    />
                    <span className="text-gray-700">Fresher</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="isFresher"
                        value="false"
                        checked={values.isFresher === false}
                        onChange={() => handleFresherChange(false)}
                        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                    />
                    <span className="text-gray-700">Experienced</span>
                </label>
            </div>
            <ErrorMessage name="isFresher" component="div" className="text-red-500 text-sm mb-4" />

            {/* Work Experience List */}
            {!values.isFresher && (
                <FieldArray name="workExp">
                    {({ push, remove, form }) => {
                        // Check if any entry is currently working
                        const hasCurrentlyWorking = form.values.workExp.some(exp => exp.isCurrentlyWorking);

                        return (
                            <div>
                                {form.values.workExp.map((work, index) => {
                                    const isCurrentlyWorking = work.isCurrentlyWorking;

                                    return (
                                        <div key={index} className="mb-6 border-b-2 pb-4">
                                            {/* 1. Organization Name */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">Organization Name</label>
                                                <Field
                                                    name={`workExp[${index}].orgName`}
                                                    placeholder="Organization Name"
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].orgName`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 2. Position */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">Position</label>
                                                <Field
                                                    name={`workExp[${index}].position`}
                                                    placeholder="Position"
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].position`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 3. Work Nature */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">Nature Of The Work:</label>
                                                <Field
                                                    name={`workExp[${index}].workNature`}
                                                    placeholder="Work Nature"
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].workNature`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 4. From Date */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">From Date</label>
                                                <Field
                                                    type="date"
                                                    name={`workExp[${index}].fromDate`}
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].fromDate`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 5. To Date */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">To Date</label>
                                                <Field
                                                    type="date"
                                                    name={`workExp[${index}].toDate`}
                                                    disabled={isCurrentlyWorking} // Disable if currently working
                                                    className={`w-full p-2 border rounded-md mt-1 ${isCurrentlyWorking
                                                        ? "bg-gray-200 cursor-not-allowed"
                                                        : "focus:ring-2 focus:ring-blue-400"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].toDate`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 6. Currently Working Checkbox */}
                                            <div className="flex items-center gap-2 mt-3">
                                                <Field
                                                    type="checkbox"
                                                    name={`workExp[${index}].isCurrentlyWorking`}
                                                    checked={isCurrentlyWorking}
                                                    disabled={hasCurrentlyWorking && !isCurrentlyWorking} // Only one entry allowed to be currently working
                                                    onChange={() => {
                                                        setFieldValue(
                                                            `workExp[${index}].isCurrentlyWorking`,
                                                            !isCurrentlyWorking
                                                        );
                                                    }}
                                                    className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                                                />
                                                <span className="text-gray-700">Currently Working</span>
                                            </div>
                                            <ErrorMessage
                                                name={`workExp[${index}].isCurrentlyWorking`}
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />

                                            {/* 7. Salary */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">Salary:</label>
                                                <Field
                                                    type="number"
                                                    name={`workExp[${index}].salary`}
                                                    placeholder="e.g 30000"
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].salary`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* 8. Reason for Leaving */}
                                            <div className="mb-4">
                                                <label className="block text-gray-600 font-medium">Reason for Leaving</label>
                                                <Field
                                                    name={`workExp[${index}].rfl`}
                                                    placeholder="Reason for Leaving"
                                                    className="w-full p-2 border rounded-md mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`workExp[${index}].rfl`}
                                                    component="div"
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                            >
                                                Remove Work Experience
                                            </button>
                                        </div>
                                    );
                                })}

                                {/* Add New Work Experience Button */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        push({
                                            orgName: "",
                                            position: "",
                                            workNature: "",
                                            fromDate: "",
                                            toDate: "",
                                            salary: "",
                                            rfl: "",
                                            isCurrentlyWorking: false,
                                        })
                                    }
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Add Work Experience
                                </button>
                            </div>
                        );
                    }}
                </FieldArray>
            )}
        </div>
    );
};

export default WorkExperienceForm;