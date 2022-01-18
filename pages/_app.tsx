import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material"
import theme from "../theme/theme"
import { useCookies } from "react-cookie"
import { useEffect } from "react"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const [cookies] = useCookies()
  const router = useRouter()
  useEffect(() => {
    if (!cookies?.token) {
      router.replace("/login")
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
