import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  Alert,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  navigate,
} from "../../../../"

export default function CallToAction(props: any) {
  const {frontmatter} = props
  if (!frontmatter) return null
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  const {
    slug,
    title,
    bookSlug,
  } = frontmatter

  return (<>
            <Box sx={{}}>
              <CardActionArea
                sx={{
                  position: "relative",
                 p:1,
                }}
                onClick={() => {
                  dispatch(navigate("/diving/abc-diving/", "_self"))
                  return true
                }}>
                <Alert
                  iconMapping={{
                    success: <Icon icon="favorite" />,
                  }}>
                    <Font variant="title">
                      ABC Diving 
                    </Font>
                  </Alert>
              </CardActionArea>
            </Box>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>
*/