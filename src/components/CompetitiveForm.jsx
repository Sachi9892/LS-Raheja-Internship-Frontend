// CompetitiveExamsForm.js
//import React from "react";
import { FieldArray, Field } from "formik";

const CompetitiveExamsForm = () => {
    return (
        <div>
            <h2>Competitive Exams</h2>
            <FieldArray name="competitiveExams">
                {({ push, remove, form }) => (
                    <div>
                        {form.values.competitiveExams.map((_, index) => (
                            <div key={index}>
                                <label>Exam Name:</label>
                                <Field name={`competitiveExams[${index}].examName`} placeholder="Exam Name" />
                                <label>Year of Passing:</label>
                                <Field name={`competitiveExams[${index}].yearOfPassing`} />
                                <button type="button" onClick={() => remove(index)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => push({})}>Add Exam</button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default CompetitiveExamsForm;