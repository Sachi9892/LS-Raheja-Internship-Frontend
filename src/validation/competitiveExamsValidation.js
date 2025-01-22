//validation/competitiveExamsValidation

import * as Yup from "yup";

const competitiveExamsValidation = Yup.array().of(
  Yup.object().shape({
    examName: Yup.string().required("Exam name is required"),
    isAppeared: Yup.boolean().required("Specify if appeared"),
    yearOfPassing: Yup.string().when("isAppeared", {
      is: true,
      then: Yup.string().required("Year of passing is required"),
      otherwise: Yup.string().nullable(),
    }),
  })
);

export default competitiveExamsValidation;
