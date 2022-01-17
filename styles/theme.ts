import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"]
  }
  interface PaletteOptions {
    blue: PaletteOptions["primary"]
  }

  interface PaletteColor {
    lighter?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true
  }
}
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    blue: true
  }
}

const theme = createTheme({
  palette: {
    blue: {
      main: "#1687A7",
      light: "#D3E0EA",
      dark: "#276678",
      lighter: "#F6F5F5",
    },
  },
})

export default theme
