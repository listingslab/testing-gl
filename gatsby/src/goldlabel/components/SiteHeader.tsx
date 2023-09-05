import React from "react"
import {
  useTheme,
  useMediaQuery,
  Avatar,
  CardHeader,
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material"
import {
  usePwaDispatch,
  Font,
  Icon,
  usePwaSelect,
  selectPWA,
  navigate,
} from "../../"
import {getTranslation} from "../translations"

export default function SiteHeader(props:any) {
  let pageTitle: string = "404, bro :("
  const {appData} = props
  const {data, path} = appData
  // console.log("appData", data.markdownRemark, path)
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  pageTitle = getTranslation("siteTagline", locale)
  return (<>
            <AppBar sx={{boxShadow: "none", background: theme.palette.background.default}}>
                <Toolbar>
                <Container maxWidth="lg">

                    <CardHeader 
                      sx={{ml:1}}
                      avatar={ <IconButton 
                        color="primary"
                        onClick={() => {
                          dispatch(navigate("/", "_self"))
                        }}
                        >
                          <Avatar src="/svg/iOS.svg" alt={pageTitle} />
                      </IconButton>}
                          title={<Font variant="title" color={"secondary"}>
                                  {pageTitle}
                                </Font>}
                        />
                  </Container>
                </Toolbar>
            </AppBar>
          </>)
}




/*

                    <pre>{JSON.stringify(page, null, 2)}</pre>

subheader={ isBig ? <Font variant="small">
                                          {pageTagline}
                                        </Font> : <Font variant="small">
                                          {pageTagline}
                                        </Font> }
                                                          */