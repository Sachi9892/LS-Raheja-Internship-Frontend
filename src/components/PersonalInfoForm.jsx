// PersonalInfoForm.js
//import React from "react";
import { Field } from "formik";

const PersonalInfoForm = () => {
    return (
        <div>
            <h2>Personal Information</h2>
            <label>First Name:</label>
            <Field name="personalInfo.firstName" placeholder="First Name" />
            <label>Middle Name:</label>
            <Field name="personalInfo.middleName" placeholder="Middle Name" />
            <label>Last Name:</label>
            <Field name="personalInfo.lastName" placeholder="Last Name" />
            <label>Email:</label>
            <Field name="personalInfo.email" placeholder="Email" type="email" />
            <label>Phone:</label>
            <Field name="personalInfo.phone" placeholder="Phone" />
            <label>Date of Birth:</label>
            <Field name="personalInfo.dob" type="date" />
            <label>Gender:</label>
            <Field as="select" name="personalInfo.gender">
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </Field>
        </div>
    );
};

export default PersonalInfoForm;