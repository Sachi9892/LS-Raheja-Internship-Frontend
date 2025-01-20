//import React from "react";
import { Field, useFormikContext } from "formik";

const CompetitiveExamsForm = () => {

    const { values, setFieldValue } = useFormikContext(); // Access Formik values and setFieldValue

    const handleCheckboxChange = (index) => {
        const isChecked = values.competitiveExams[index].isAppeared;
        setFieldValue(`competitiveExams.${index}.isAppeared`, !isChecked);

        // Clear yearOfPassing if unchecked
        if (isChecked) {
            setFieldValue(`competitiveExams.${index}.yearOfPassing`, null);
        }
    };

    return (
        <div>
            <h3>Competitive Exams</h3>
            {values.competitiveExams.map((exam, index) => (
                <div key={index}>
                    <label>{exam.examName}</label>
                    <input
                        type="checkbox"
                        name={`competitiveExams.${index}.isAppeared`}
                        checked={exam.isAppeared}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    Yes
                    <Field
                        name={`competitiveExams.${index}.yearOfPassing`}
                        type="text"
                        placeholder="Enter Year"
                        disabled={!exam.isAppeared}
                    />
                </div>
            ))}
        </div>
    );
};

export default CompetitiveExamsForm;
