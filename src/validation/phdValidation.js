import * as Yup from "yup";

const phdValidation = Yup.object().shape({
  status: Yup.string().required("PhD status is required"),
  universityName: Yup.string().when("status", {
    is: (status) =>
      ["PURSUING", "THESIS_SUBMITTED", "COMPLETED"].includes(status),
    then: Yup.string().required("University name is required"),
    otherwise: Yup.string().nullable(),
  }),
  yearOfPassing: Yup.string().when("status", {
    is: "COMPLETED",
    then: Yup.string().required("Year of passing is required"),
    otherwise: Yup.string().nullable(),
  }),
  scopusIndexedPublications: Yup.number().optional(),
  scopusId: Yup.string().optional(),
  presentedInConference: Yup.boolean().optional(),
  wosIndexedPublications: Yup.number().optional(),
  wosId: Yup.string().optional(),
});


export default phdValidation;
