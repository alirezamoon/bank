import { Button, Icon, styled, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useFormik } from "formik"
import { CaretLeft } from "react-iconly"
import { registerSchema } from "../utils"
import Link from "next/link"

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      nationalCode: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(90deg,#276678 0%,#1687A7 30%, #276678 100%)",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "blue.lighter",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          px: "45px",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "100%",
          overflow: "hidden",
          py: "60px",
          boxShadow: "1px 1px 3px #aaa",
          mx: "8px",
          position: "relative",
        }}
      >
        <Link href="/login">
          <Button
            sx={{ position: "absolute", top: "15px", left: "10px" }}
            color="blue"
          >
            <Icon component={CaretLeft} set="broken" primaryColor="#276678" />
          </Button>
        </Link>
        <Typography
          variant="h4"
          sx={{
            pb: "30px",
            color: "blue.main",
          }}
        >
          Register
        </Typography>
        <Box
          component="form"
          sx={{
            my: "20px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            color="blue"
            label="firstname"
            placeholder="phone number"
            variant="standard"
            sx={{ width: "100%", mb: "20px" }}
            name="firstname"
            onChange={formik.handleChange}
            helperText={
              Boolean(formik.errors.firstname) && formik.touched.firstname
                ? formik.errors.firstname
                : null
            }
            error={Boolean(formik.errors.firstname) && formik.touched.firstname}
          />
          <TextField
            color="blue"
            label="lastname"
            placeholder="phone number"
            variant="standard"
            sx={{ width: "100%", mb: "20px" }}
            name="lastname"
            onChange={formik.handleChange}
            helperText={
              Boolean(formik.errors.lastname) && formik.touched.lastname
                ? formik.errors.lastname
                : null
            }
            error={Boolean(formik.errors.lastname) && formik.touched.lastname}
          />
          <TextField
            color="blue"
            label="nationalCode"
            placeholder="phone number"
            variant="standard"
            sx={{ width: "100%", mb: "20px" }}
            name="nationalCode"
            onChange={formik.handleChange}
            helperText={
              Boolean(formik.errors.nationalCode) && formik.touched.nationalCode
                ? formik.errors.nationalCode
                : null
            }
            error={
              Boolean(formik.errors.nationalCode) && formik.touched.nationalCode
            }
          />
          <TextField
            color="blue"
            label="phoneNumber"
            placeholder="national code"
            variant="standard"
            sx={{ width: "100%", mb: "40px" }}
            name="phoneNumber"
            onChange={formik.handleChange}
            helperText={
              Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber
                ? formik.errors.phoneNumber
                : null
            }
            error={
              Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber
            }
          />
          <Button
            color="blue"
            variant="contained"
            sx={{ color: "white", width: "100%", fontWeight: "bold" }}
            type="submit"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
