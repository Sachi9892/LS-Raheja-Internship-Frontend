import { Field, ErrorMessage, useFormikContext } from "formik";

const CourseTaughtForm = () => {

    const { setFieldValue } = useFormikContext();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Courses Taught</h2>

            {/* College Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">College Name</label>
                <Field
                    name="courseDto.collegeName"
                    placeholder="Name of the College"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.collegeName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Class Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Class Name</label>
                <Field
                    name="courseDto.className"
                    placeholder="Name of the Class"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.className" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Subject Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Subject Name</label>
                <Field
                    name="courseDto.subjectName"
                    placeholder="Name of the Subject"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.subjectName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Degree Type */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Degree Type</label>
                <Field

                    name="courseDto.degreeType"
                    placeholder="Junior/Degree"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                >

                </Field>
                <ErrorMessage name="courseDto.degreeType" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Type of Contract */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Type of Contract</label>
                <Field
                    name="courseDto.typeOfContract"
                    placeholder="Temporary / Permanent / CHB"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                >

                </Field>
                <ErrorMessage name="courseDto.typeOfContract" component="div" className="text-red-500 text-sm" />
            </div>

            {/* From Date */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">From Date</label>
                <Field
                    name="courseDto.fromDate"
                    type="date"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.fromDate" component="div" className="text-red-500 text-sm" />
            </div>

            {/* To Date */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">To Date</label>
                <Field
                    name="courseDto.toDate"
                    type="date"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.toDate" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Years of Experience */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Years of Experience</label>
                <Field
                    name="courseDto.yearOfExp"
                    placeholder="Years of Experience"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.yearOfExp" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Last Salary */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Last Salary</label>
                <Field
                    name="courseDto.lastSalary"
                    placeholder="Last Salary"
                    type="number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.lastSalary" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Approved by University */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Approved by University</label>
                <Field
                    as="select"
                    name="courseDto.approvedByUniversity"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                        // Convert the string value to a boolean
                        const value = e.target.value === "true";
                        setFieldValue("courseDto.approvedByUniversity", value);
                    }}
                >
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Field>
                <ErrorMessage name="courseDto.approvedByUniversity" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Letter Number */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Letter Number</label>
                <Field
                    name="courseDto.letterNO"
                    placeholder="Letter Number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.letterNO" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Letter Date */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Letter Date</label>
                <Field
                    name="courseDto.letterDate"
                    type="date"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="courseDto.letterDate" component="div" className="text-red-500 text-sm" />
            </div>
        </div>
    );
};

export default CourseTaughtForm;