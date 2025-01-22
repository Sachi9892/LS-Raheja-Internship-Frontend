// PersonalInfoForm.js
//import React from "react";
import { Field , ErrorMessage } from "formik";

const PersonalInfoForm = () => {
    return (
        <div>
            <label>Role: </label>
            <Field as="select" name="personalInfo.role">
                <option value="">Select</option>
                <option value="PROFESSOR">PROFESSOR</option>
                <option value="ASSISTANT_PROFESSOR">ASSISTANT PROFESSOR</option>
                <option value="ASSOCIATE_PROFESSOR">ASSOCIATE PROFESSOR</option>
                <option value="VISITING_FACULTY">VISTING FACULTY</option>
            </Field>
            <ErrorMessage name="personalInfo.role" component="div" style={{ color: "red" }} />

            <h2>Personal Information</h2>

            <label>First Name:</label>
            <Field name="personalInfo.firstName" placeholder="First Name" />
            <ErrorMessage name="personalInfo.firstName" component="div" style={{ color: "red" }} />

            <label>Middle Name:</label>
            <Field name="personalInfo.middleName" placeholder="Middle Name" />
            <ErrorMessage name="personalInfo.middleName" component="div" style={{ color: "red" }} />

            <label>Last Name:</label>
            <Field name="personalInfo.lastName" placeholder="Last Name" />
            <ErrorMessage name="personalInfo.lastName" component="div" style={{ color: "red" }} />
            
            <label>Email:</label>
            <Field name="personalInfo.email" placeholder="Email" type="email" />
            <ErrorMessage name="personalInfo.email" component="div" style={{ color: "red" }} />

            <label>Phone:</label>
            <Field name="personalInfo.phone" placeholder="Phone" />
            <ErrorMessage name="personalInfo.phone" component="div" style={{ color: "red" }} />

            <label>Date of Birth:</label>
            <Field name="personalInfo.dob" type="date" />
            <ErrorMessage name="personalInfo.dob" component="div" style={{ color: "red" }} />

            <label>Gender:</label>
            <Field as="select" name="personalInfo.gender">
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </Field>
            <ErrorMessage name="personalInfo.gender" component="div" style={{ color: "red" }} />
        </div>
    );
};

export default PersonalInfoForm;