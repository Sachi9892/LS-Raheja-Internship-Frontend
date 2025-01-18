//import React from "react";
import { Field } from "formik";

const AddressForm = () => {
    return (
        <div>
            <h2>Address Information</h2>
            <label>State:</label>
            <Field as="select" name="address.state">
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="STATE2">State 2</option>
                {/* Add more states here */}
            </Field>
            <label>City:</label>
            <Field name="address.city" placeholder="City" />
            <label>Pin Code:</label>
            <Field name="address.pinCode" placeholder="Pin Code" />
        </div>
    );
};

export default AddressForm;