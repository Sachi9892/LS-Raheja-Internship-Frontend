import { useState } from "react";

import DegreeApplicationForm from "./degree/DegreeApplicationFrom";
import JuniorApplicationForm from "./junior/JuniorApplicationForm";
import NonTeachingApplicationForm from "./non-teaching/NonTeachingApplicationForm";



const ApplicationSelection = () => {

    const [selectedForm, setSelectedForm] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {!selectedForm ? (
                <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
                    <h2 className="text-xl font-bold mb-4">Apply for:</h2>

                    <button
                        onClick={() => setSelectedForm("degree")}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md mb-3 w-full hover:bg-blue-700"
                    >
                        Apply for Degree College
                    </button>

                    <button
                        onClick={() => setSelectedForm("nonTeaching")}
                        className="bg-green-500 text-white px-6 py-2 rounded-md mb-3 w-full hover:bg-green-700"
                    >
                        Apply for Non-Teaching
                    </button>

                    <button
                        onClick={() => setSelectedForm("junior")}
                        className="bg-purple-500 text-white px-6 py-2 rounded-md w-full hover:bg-purple-700"
                    >
                        Apply for Junior College
                    </button>
                </div>
            ) : (
                <div className="w-full">
                    {/* Render the selected form */}
                    {selectedForm === "degree" && <DegreeApplicationForm />}
                    {selectedForm === "nonTeaching" && <NonTeachingApplicationForm />}
                    {selectedForm === "junior" && <JuniorApplicationForm />}

                    {/* Back Button */}
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setSelectedForm(null)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationSelection;
