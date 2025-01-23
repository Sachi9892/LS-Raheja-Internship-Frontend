//import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

const PhdForm = () => {
    const { values } = useFormikContext(); // Access Formik context to get form values

    // Extract Ph.D. status from form values
    const phdStatus = values?.phd?.status;

    // Conditions for enabling/disabling fields
    const isPhdCompleted = phdStatus === "COMPLETED";

    const isNotApplicable = phdStatus === "NOT_APPLICABLE" || phdStatus === "NO";

    return (
        <div>
            <h2>Ph.D. Information</h2>

            {/* Ph.D. Status Dropdown */}
            <label>Do you have a Ph.D.?</label>
            <Field as="select" name="phd.status">
                <option value="">Select</option>
                <option value="COMPLETED">Completed</option>
                <option value="PURSUING">Pursuing</option>
                <option value="THESIS_SUBMITTED">Thesis Submitted</option>
                <option value="NOT_APPLICABLE">Not Applicable</option>
            </Field>

            {/* Organization Name */}
            <label>University/Organization Name:</label>
            <Field
                name="phd.universityName"
                placeholder="University/Organization Name"
                disabled={isNotApplicable} // Disable for NOT_APPLICABLE or NO
            />
            <ErrorMessage name="phd.universityName" component="div" style={{ color: "red" }} />

            {/* Year of Passing */}
            <label>Year of Passing:</label>
            <Field
                name="phd.yearOfPassing"
                disabled={!isPhdCompleted} // Enable only if status is COMPLETED
            />
            <ErrorMessage name="phd.yearOfPassing" component="div" style={{ color: "red" }} />

            {/* Number of Scopus Indexed Publications */}
            <label>Number of Scopus Indexed Publications:</label>
            <Field
                name="phd.scopusIndexedPublications"
                placeholder="Scopus Indexed Publications"
            //disabled={isNotApplicable} // Disable for NOT_APPLICABLE or NO
            />

            {/* Scopus ID */}
            <label>Scopus ID:</label>
            <Field
                name="phd.scopusId"
                placeholder="Scopus ID"
            //disabled={isNotApplicable} // Disable for NOT_APPLICABLE or NO
            />

            {/* Number of WoS Indexed Publications */}
            <label>Number of WoS Indexed Publications:</label>
            <Field
                name="phd.wosIndexedPublications"
                placeholder="WoS Indexed Publications"
            //disabled={isNotApplicable} // Disable for NOT_APPLICABLE or NO
            />

            {/* WoS ID */}
            <label>WoS ID:</label>
            <Field
                name="phd.wosId"
                placeholder="WoS ID"
            //disabled={isNotApplicable} // Disable for NOT_APPLICABLE or NO
            />

            {/* Papers presnted in confrence */}
            <Field as="select" name="phd.presentedInConference">
                <option value="">Paper Presented in Conferences</option>
                <option value="True">Yes</option>
                <option value="False">False</option>
            </Field>

        </div>
    );
};

export default PhdForm;