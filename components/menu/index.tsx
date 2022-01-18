import { Button } from "@mui/material"
import { Box, styled } from "@mui/system"
import Link from "next/link"

const Menu = () => {
  const MenuItem = styled(Button)({
    color: "#F6F5F5",
  })

  return (
    <Box
      sx={{
        height: "100vh",
        width: "300px",
        bgcolor: "blue.dark",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <Link href="/dashboard">
        <MenuItem>Dashboard</MenuItem>
      </Link>
      <Link href="/makeADeposit">
        <MenuItem>Make a Deposit</MenuItem>
      </Link>
      <Link href="/transferMoney">
        <MenuItem>Transfer Money</MenuItem>
      </Link>
      <Link href="/payElectricityBills">
        <MenuItem>Pay Electricity Bills</MenuItem>
      </Link>
      <Link href="/buyTraffic">
        <MenuItem>Buy Traffic</MenuItem>
      </Link>
    </Box>
  )
}

export default Menu
