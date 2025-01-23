// validation/workExperienceValidation.js

export const validateWorkExperience = (values) => {
  const errors = {};

  if (
    values.workExperience.isFresher === null ||
    values.workExperience.isFresher === undefined
  ) {
    errors.workExperience = {
      isFresher: "Please select Fresher or Experienced",
    };
  } else if (!values.workExperience.isFresher) {
    const listErrors = values.workExperience.list.map((experience) => {
      const experienceErrors = {};
      if (!experience.organizationName) {
        experienceErrors.organizationName = "Organization Name is required";
      }
      if (!experience.jobTitle) {
        experienceErrors.jobTitle = "Job Title is required";
      }
      if (!experience.fromDate) {
        experienceErrors.fromDate = "From Date is required";
      }
      if (!experience.isCurrentlyWorking && !experience.toDate) {
        experienceErrors.toDate =
          "To Date is required if not currently working";
      }
      if (experience.isCurrentlyWorking && !experience.noticePeriod) {
        experienceErrors.noticePeriod =
          "Notice Period is required if currently working";
      }
      return Object.keys(experienceErrors).length ? experienceErrors : null;
    });

    if (listErrors.some((error) => error !== null)) {
      errors.workExperience = { list: listErrors };
    }
  }
  return errors;
};
