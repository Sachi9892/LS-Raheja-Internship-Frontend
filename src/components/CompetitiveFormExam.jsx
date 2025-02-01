import { Field, useFormikContext, ErrorMessage } from "formik";

const CompetitiveExamsForm = () => {
    const { values, setFieldValue } = useFormikContext(); // Access Formik values and setFieldValue

    const handleCheckboxChange = (index) => {
        const isChecked = values.competitiveExams[index].isAppeared;
        setFieldValue(`competitiveExams.${index}.isAppeared`, !isChecked);

        // Clear yearOfPassing if unchecked
        if (!isChecked) {
            setFieldValue(`competitiveExams.${index}.yearOfPassing`, "");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">

            <h3 className="text-2xl font-bold text-gray-700 mb-4">Competitive Exams</h3>

            {values.competitiveExams.map((exam, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md">
                    {/* Exam Name */}
                    <label className="block text-gray-600 font-medium">{exam.examName}</label>

                    {/* Checkbox for Exam Appearance */}
                    <div className="flex items-center gap-3 mt-2">
                        <input
                            type="checkbox"
                            name={`competitiveExams.${index}.isAppeared`}
                            checked={exam.isAppeared}
                            onChange={() => handleCheckboxChange(index)}
                            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                        />
                        <span className="text-gray-700">Appeared?</span>
                    </div>
                    <ErrorMessage
                        name={`competitiveExams.${index}.isAppeared`}
                        component="div"
                        className="text-red-500 text-sm"
                    />

                    {/* Year of Passing */}
                    <div className="mt-4">
                        <label className="block text-gray-600 font-medium">Year of Passing:</label>
                        <Field
                            name={`competitiveExams.${index}.yearOfPassing`}
                            type="number"
                            placeholder="Enter Year"
                            disabled={!exam.isAppeared}
                            className={`mt-1 p-2 border rounded-md w-full ${!exam.isAppeared ? "bg-gray-200 cursor-not-allowed" : "focus:ring-2 focus:ring-blue-400"
                                }`}
                        />
                        <ErrorMessage
                            name={`competitiveExams.${index}.yearOfPassing`}
                            component="div"
                            className="text-red-500 text-sm"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompetitiveExamsForm;
