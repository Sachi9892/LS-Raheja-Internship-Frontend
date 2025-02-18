import { Field, ErrorMessage } from "formik";

const AddressForm = () => {
    return (


        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-3 border-2 border-black">

            <h2 className="text-2xl font-bold text-gray-700 mb-4">Address Information</h2>

            {/* State Selection */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">State:</label>
                <Field
                    as="select"
                    name="address.state"
                    className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select State</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="STATE2">State 2</option>
                    {/* Add more states here */}
                </Field>
                <ErrorMessage name="address.state" component="div" className="text-red-500 text-sm" />
            </div>

            {/* City */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">City:</label>
                <Field
                    name="address.city"
                    placeholder="City"
                    className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="address.city" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Pin Code */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium">Pin Code:</label>
                <Field
                    name="address.pinCode"
                    placeholder="Pin Code"
                    className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="address.pinCode" component="div" className="text-red-500 text-sm" />
            </div>
        </div>

    );
};

export default AddressForm;
