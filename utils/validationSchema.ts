import * as yup from "yup"

export const loginSchema = yup.object({
  username: yup.string().required("Required!"),
  password: yup.string().required("Required!"),
})

export const registerSchema = yup.object({
  firstname: yup.string().required("Required!"),
  lastname: yup.string().required("Required!"),
  nationalCode: yup.string().required("Required!").length(10),
  phoneNumber: yup
    .string()
    .required("Required!")
    .matches(
      /^0[0-9]{2,}[0-9]{7,}$/,
      "Please follow this format : 09xx xxx xxxx"
    ),
})
