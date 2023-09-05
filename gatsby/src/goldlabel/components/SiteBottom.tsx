import * as React from "react"
import {
  useTheme,
  AppBar,
  Toolbar,
  Box,
  Container,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  PWANav,
} from "../../"

export default function SiteBottom(props: any) {
  const {children, appData} = props
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const pwa = usePwaSelect(selectPWA)
  const {darkmode} = pwa
  return (
    <>
    <Box sx={{ pt: "80px", pb:"80px" }}>
      {children}
    </Box>
    <AppBar 
      position="fixed"
      sx={{ 
        top: "auto", 
        bottom: 0,
        boxShadow: "none",
        background: theme.palette.background.default,
      }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{flexGrow:1}} />
            <PWANav appData={appData}/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
