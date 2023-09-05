import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  Alert,
  AlertTitle,
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
import {
  getTranslation,
} from "../../../translations"

export default function CTA(props: any) {
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const {seed} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  const {
    frontmatter,
  } = seed
  const {url} = frontmatter
  const seedId = "123roqywufasli"
  

  return (<>
            <Box sx={{}}>
              <CardActionArea
                sx={{
                  position: "relative",
                 p:1,
                }}
                onClick={() => {
                  dispatch(navigate(url, "_blank"))
                  return true
                }}>
                <Alert
                  sx={{minHeight: isBig ? null : 100}}
                  iconMapping={{
                    success: <Icon icon="buy" />,
                  }}
                >
                    <AlertTitle>
                      <Font>
                        {getTranslation("yes", locale)}
                      </Font>
                    </AlertTitle>

                    <Font variant="small">
                      {getTranslation("siteTagline", locale)}
                    </Font>
                    <Box sx={{my:3}}>
                    <Font variant="title">
                      {getTranslation("buyNow", locale)}
                    </Font>
                    </Box>

                  </Alert>
              </CardActionArea>
            </Box>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>
*/