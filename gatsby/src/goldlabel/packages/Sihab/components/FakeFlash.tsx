import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  CardMedia,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  navigate,
} from "../../../../"
import {getTranslation} from "../../../translations"

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

  return (<>
            <Box sx={{height: isBig ? 270 : 100}}>
              <CardActionArea
                sx={{
                  position: "relative",
                }}
                onClick={() => {
                  dispatch(navigate(url, "_blank"))
                  return true
                }}>
                
                  {isBig ? <Box sx={{
                    position:"absolute",
                    width: "100%",
                  }}>
                    <CardMedia 
                      component={"img"}
                      src="/jpg/sensiseeds.jpg"
                      height={isBig ? 270 : 100}
                    />
                  </Box> : null }
                  
                <Box sx={{
                  position:"absolute",
                  width: "100%",
                  top: 10
                }}>
                  <Font fontSize="1.6rem" align="center" color="primary">
                    {getTranslation("buyFrom", locale)}
                  </Font>
                </Box>
              </CardActionArea>
            </Box>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>



<Button
                    sx={{m:1}}
                    color="primary"
                    onClick={() => {
                      dispatch(updateFilter("breederFilter", seedBreeder))
                    }}>
                    <Box sx={{display: "flex"}}>
                      <Box sx={{mr:1.5}}>
                        <Icon icon="spy" />
                      </Box>
                      <Box sx={{mt:0.25}}>
                        <Font variant="small">
                          {seedBreeder}
                        </Font>
                      </Box>
                    </Box>
                  </Button>
                  <Button
              sx={{m:1}}
              color="primary"
              onClick={() => {
                dispatch(updateFilter("heightFilter", seedHeight))
              }}>
              <Box sx={{display: "flex"}}>
                <Box sx={{mr:1.5}}>
                  <Icon icon="soil" />
                </Box>
                <Box sx={{mt:0.25}}>
                  <Font variant="small">
                    {seedHeight}
                  </Font>
                </Box>
              </Box>
            </Button>
            <Button
              sx={{m:1}}
              color="primary"
              onClick={() => {
                dispatch(updateFilter("daysFilter", seedDays))
              }}>
              <Box sx={{display: "flex"}}>
                <Box sx={{mr:1.5}}>
                  <Icon icon="calendar" />
                </Box>
                <Box sx={{mt:0.25}}>
                  <Font variant="small">
                    {seedDays}
                  </Font>
                </Box>
              </Box>
            </Button>
                  <Button
                    sx={{m:1}}
                    color="primary"
                    onClick={() => {
                      dispatch(updateFilter("yieldFilter", seedYield))
                    }}>
                    <Box sx={{display: "flex"}}>
                      <Box sx={{mr:1.5}}>
                        <Icon icon="seed" />
                      </Box>
                      <Box sx={{mt:0.25}}>
                        <Font variant="small">
                          {seedYield}
                        </Font>
                      </Box>
                    </Box>
                  </Button>
                  <Button
                    sx={{m:1}}
                    color="primary"
                    onClick={() => {
                      dispatch(updateFilter("climateFilter", seedClimate))
                    }}>
                    <Box sx={{display: "flex"}}>
                      <Box sx={{mr:1.5}}>
                        <Icon icon="temp" />
                      </Box>
                      <Box sx={{mt:0.25}}>
                        <Font variant="small">
                          {seedClimate}
                        </Font>
                      </Box>
                    </Box>
                  </Button>
                  
                  
                  */