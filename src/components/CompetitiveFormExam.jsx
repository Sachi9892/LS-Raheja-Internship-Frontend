import { Field, useFormikContext } from "formik";

const CompetitiveExamsForm = () => {

    const { values } = useFormikContext(); // Access Formik values

    return (
        <div>
            <h3>Competitive Exams</h3>
            {values.competitiveExams.map((exam, index) => (
                <div key={index}>
                    <label>{exam.examName}</label>
                    <Field
                        name={`competitiveExams.${index}.isAppeared`}
                        type="checkbox"
                    />{" "}
                    Yes
                    <Field
                        name={`competitiveExams.${index}.yearOfPassing`}
                        type="text"
                        placeholder="Enter Year"
                        disabled={!values.competitiveExams[index].isAppeared}
                    />
                </div>
            ))}
        </div>
    );
};

export default CompetitiveExamsForm;
