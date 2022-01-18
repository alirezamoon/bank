import { Button, styled, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useFormik } from "formik"
import { loginSchema } from "../utils"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2))
  //   },
  // })

  const LoginCard = styled(Box)(({ theme }) => ({
    [theme.breakpoints.only("xs")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  }))

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(90deg,#276678 0%,#1687A7 30%, #276678 100%)",
        // bgcolor: { [theme.breakpoints.only("xs")]: "#f00" },
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
        }}
      >
        <Typography
          variant="h4"
          sx={{
            pb: "30px",
            color: "blue.main",
          }}
        >
          Login
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
            label="username"
            placeholder="phone number"
            variant="standard"
            sx={{ width: "100%", mb: "20px" }}
            name="username"
            onChange={formik.handleChange}
            helperText={formik.errors.username}
            error={Boolean(formik.errors.username) && formik.touched.username}
          />

          <TextField
            color="blue"
            label="password"
            placeholder="national code"
            variant="standard"
            sx={{ width: "100%", mb: "40px" }}
            name="password"
            onChange={formik.handleChange}
            helperText={formik.errors.password}
            error={Boolean(formik.errors.password) && formik.touched.password}
          />
          <Button
            color="blue"
            variant="contained"
            sx={{ color: "white", width: "100%", fontWeight: "bold" }}
            type="submit"
          >
            Login
          </Button>
        </Box>
        <Box sx={{ display: "felx", mt: "45px" }}>
          <Typography sx={{ display: "inline" }}>
            Don't have an account?
          </Typography>
          <Button color="blue">Sing up</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
