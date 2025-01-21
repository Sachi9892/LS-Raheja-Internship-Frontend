// validations/workExperienceValidation.js
import * as Yup from "yup";

const workExperienceValidation = Yup.object().shape({
  isFresher: Yup.boolean().required("Specify if fresher"),
  experiences: Yup.array().when("isFresher", {
    is: false, // If not a fresher
    then: Yup.array()
      .of(
        Yup.object().shape({
          organizationName: Yup.string().required(
            "Organization name is required"
          ),
          jobTitle: Yup.string().required("Job title is required"),
          fromDate: Yup.date().required("From date is required"),
          toDate: Yup.date().nullable(),
          salary: Yup.string().required("Salary is required"),
          noticePeriod: Yup.string().nullable(),
          isCurrentlyWorking: Yup.boolean().nullable(),
        })
      )
      .min(1, "At least one work experience is required"),
    otherwise: Yup.array().nullable(),
  }),
});

export default workExperienceValidation;
