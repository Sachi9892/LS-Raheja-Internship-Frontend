import { Field, ErrorMessage } from "formik";

const AwardForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Awards</h2>

            {/* Title */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Title</label>
                <Field
                    name="awardDto.title"
                    placeholder="Title of the Award"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="awardDto.title" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Organization Name */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Organization Name</label>
                <Field
                    name="awardDto.orgName"
                    placeholder="Name of the Organization"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="awardDto.orgName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Nature of Award */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Nature of Award</label>
                <Field
                    name="awardDto.nature"
                    placeholder="Nature of the Award"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="awardDto.nature" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Organization Recognition */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Organization Recognition</label>
                <Field
                    name="awardDto.orgRecorgnize"
                    placeholder="Recognition by Organization"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="awardDto.orgRecorgnize" component="div" className="text-red-500 text-sm" />
            </div>

           
        </div>
    );
};

export default AwardForm;