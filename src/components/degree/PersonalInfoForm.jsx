import { Field, ErrorMessage } from "formik";

const PersonalInfoForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Personal Information</h2>

            {/* Role Selection */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Role:</label>
                <Field
                    as="select"
                    name="personalInfo.role"
                    className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select</option>
                    <option value="PROFESSOR">PROFESSOR</option>
                    <option value="ASSISTANT_PROFESSOR">ASSISTANT PROFESSOR</option>
                    <option value="ASSOCIATE_PROFESSOR">ASSOCIATE PROFESSOR</option>
                    <option value="VISITING_FACULTY">VISITING FACULTY</option>
                </Field>
                <ErrorMessage name="personalInfo.role" component="div" className="text-red-500 text-sm" />
            </div>

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
                <ErrorMessage name="personalInfo.middleName" component="div" className="text-red-500 text-sm" />
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
                    name="personalInfo.email"
                    placeholder="Email"
                    type="email"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Phone */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Phone</label>
                <Field
                    name="personalInfo.phone"
                    placeholder="Phone"
                    type="tel"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.phone" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Date of Birth</label>
                <Field
                    name="personalInfo.dob"
                    type="date"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.dob" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Gender */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Gender</label>
                <Field as="select" name="personalInfo.gender" className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400">
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </Field>
                <ErrorMessage name="personalInfo.gender" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Marital Status */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Marital Status</label>
                <Field as="select" name="personalInfo.maritalStatus" className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400">
                    <option value="">Select Marital Status</option>
                    <option value="MARRIED">Married</option>
                    <option value="SINGLE">Single</option>
                    <option value="DIVORCED">Divorced</option>
                    <option value="WIDOWED">Widowed</option>
                </Field>
                <ErrorMessage name="personalInfo.maritalStatus" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Number of Children */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Number of Children</label>
                <Field
                    name="personalInfo.noOfChilds"
                    placeholder="Number of Children"
                    type="number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.noOfChilds" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Caste */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Caste</label>
                <Field
                    name="personalInfo.caste"
                    placeholder="Caste"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.caste" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Aadhar Number */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Aadhar Number</label>
                <Field
                    name="personalInfo.aadhar"
                    placeholder="Aadhar Number"
                    type="number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.aadhar" component="div" className="text-red-500 text-sm" />
            </div>

            {/* PAN */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">PAN</label>
                <Field
                    name="personalInfo.pan"
                    placeholder="PAN"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.pan" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Passport Number */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Passport Number</label>
                <Field
                    name="personalInfo.passport"
                    placeholder="Passport Number"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="personalInfo.passport" component="div" className="text-red-500 text-sm" />
            </div>
        </div>
    );
};

export default PersonalInfoForm;
