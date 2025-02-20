import { Field, ErrorMessage } from "formik";

const AdditionalInfoForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Additional Information</h2>

            {/* Mother Tongue */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Mother Tongue</label>
                <Field name="addInfo.motherTounge" placeholder="Mother Tongue" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.motherTounge" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Other Language */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Other Language</label>
                <Field name="addInfo.otherLanguage" placeholder="Other Language" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.otherLanguage" component="div" className="text-red-500 text-sm" />
            </div>

            {/* ETS (English Typing Speed) */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">English Typing Speed Per Minute</label>
                <Field type="number" name="addInfo.ets" placeholder="40" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.ets" component="div" className="text-red-500 text-sm" />
            </div>

            {/* MTS (Marathi Typing Spped) */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Marathi Typing Speed Per Minute</label>
                <Field type="number" name="addInfo.mts" placeholder="40" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.mts" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Joining Date */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Joining Date If Selected: </label>
                <Field type="date" name="addInfo.joinDate" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.joinDate" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Expected Salary */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Expected Salary</label>
                <Field type="number" name="addInfo.expectedSalary" placeholder="Expected Salary" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.expectedSalary" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Comments */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Comments</label>
                <Field as="textarea" name="addInfo.comment" placeholder="Additional Comments" className="w-full p-2 border rounded-md mt-1" />
                <ErrorMessage name="addInfo.comment" component="div" className="text-red-500 text-sm" />
            </div>
        </div>
    );
};

export default AdditionalInfoForm;
