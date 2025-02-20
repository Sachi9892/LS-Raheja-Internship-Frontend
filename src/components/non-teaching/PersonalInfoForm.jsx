import { Field, ErrorMessage } from "formik";

const PersonalInfoForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Personal Information</h2>

            {/* First Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">First Name</label>
                <Field
                    name="personalInfo.firstName"
                    placeholder="First Name"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.firstName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Middle Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Middle Name</label>
                <Field
                    name="personalInfo.middleName"
                    placeholder="Middle Name"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Last Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Last Name</label>
                <Field
                    name="personalInfo.lastName"
                    placeholder="Last Name"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.lastName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Email</label>
                <Field
                    type="email"
                    name="personalInfo.email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Mobile Number</label>
                <Field
                    name="personalInfo.mobileNumber"
                    placeholder="Mobile Number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.mobileNumber" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Address */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Address</label>
                <Field
                    name="personalInfo.address"
                    placeholder="Address"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.address" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Date of Birth</label>
                <Field
                    type="date"
                    name="personalInfo.dob"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.dob" component="div" className="text-red-500 text-sm" />
            </div>
        </div>
    );
};

export default PersonalInfoForm;
