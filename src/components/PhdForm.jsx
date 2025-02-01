import { Field, ErrorMessage, useFormikContext } from "formik";

const PhdForm = () => {
    const { values, setFieldValue } = useFormikContext();

    const handlePhdStatusChange = (status) => {
        setFieldValue("phd.status", status);
        if (status === "NOT_APPLICABLE") {
            setFieldValue("phd.universityName", "");
            setFieldValue("phd.yearOfPassing", "");
        } else if (status === "PURSUING" || status === "THESIS_SUBMITTED") {
            setFieldValue("phd.yearOfPassing", "");
        }
    };

    const isPhdCompleted = values.phd?.status === "COMPLETED";
    const isNotApplicable = values.phd?.status === "NOT_APPLICABLE";

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">

            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">PhD Information</h2>

            {/* Ph.D. Status Dropdown */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">PhD Status</label>
                <Field
                    as="select"
                    name="phd.status"
                    onChange={(e) => handlePhdStatusChange(e.target.value)}
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select Status</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="PURSUING">Pursuing</option>
                    <option value="THESIS_SUBMITTED">Thesis Submitted</option>
                    <option value="NOT_APPLICABLE">Not Applicable</option>
                </Field>
                <ErrorMessage name="phd.status" component="div" className="text-red-500 text-sm" />
            </div>

            {/* University Name */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">University/Organization Name</label>
                <Field
                    name="phd.universityName"
                    placeholder="University/Organization Name"
                    className={`w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400 ${isNotApplicable ? "bg-gray-200 cursor-not-allowed" : ""
                        }`}
                    disabled={isNotApplicable}
                />
                <ErrorMessage name="phd.universityName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Year of Passing */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Year of Passing</label>
                <Field
                    name="phd.yearOfPassing"
                    type="number"
                    placeholder="Year of Passing"
                    className={`w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400 ${!isPhdCompleted ? "bg-gray-200 cursor-not-allowed" : ""
                        }`}
                    disabled={!isPhdCompleted}
                />
                <ErrorMessage name="phd.yearOfPassing" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Scopus Indexed Publications */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Number of Scopus Indexed Publications</label>
                <Field
                    name="phd.scopusIndexedPublications"
                    placeholder="Scopus Indexed Publications"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Scopus ID */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Scopus ID</label>
                <Field
                    name="phd.scopusId"
                    placeholder="Scopus ID"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* WoS Indexed Publications */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Number of WoS Indexed Publications</label>
                <Field
                    name="phd.wosIndexedPublications"
                    placeholder="WoS Indexed Publications"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* WoS ID */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">WoS ID</label>
                <Field
                    name="phd.wosId"
                    placeholder="WoS ID"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Papers Presented in Conference */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Paper Presented in Conferences</label>
                <Field
                    as="select"
                    name="phd.presentedInConference"
                    className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Field>
            </div>
        </div>
    );
};

export default PhdForm;