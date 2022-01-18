import { Box } from "@mui/system"
import Menu from "../menu"

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box component="main" sx={{ bgcolor: "blue.lighter", flexGrow: 1 }}>
        {children}
      </Box>
      <Menu />
    </Box>
  )
}

export default Layout
