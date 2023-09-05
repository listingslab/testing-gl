import * as React from "react"
import {
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  CardHeader,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  Icon,
} from "../../../"
import {
  useSeeds,
  updateFilter,
  Result,
  Filters,
} from "../Sihab"


export default function Results(props: any) {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, sihab} = pwa
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const seeds = useSeeds(locale)
  const {
    showNumber,
    maxResults,
    strFilter,
  } = sihab
  let filteredSeeds: Array<any> = []
  if (seeds.length) {
    for (let i: number = 0; i < seeds.length; i++) {
      if (strFilter){
        if (seeds[i].frontmatter.title.toLowerCase().includes(strFilter.toLowerCase())) {
          filteredSeeds.push(seeds[i])
        }
      } else {
        filteredSeeds.push(seeds[i])
      }
    }
  }

  return (<>
    <Box sx={{}}>
        <Box sx={{my:1}}>
          <Filters />
          {filteredSeeds.length ? <Font color="primary">
           {`${filteredSeeds.length} results ${strFilter ? `for "${strFilter}"` : ""}`} 
          </Font> : null }
        </Box>

          {filteredSeeds.length ? <><Grid container spacing={1}>
            {filteredSeeds.map((item: any, i: number) => {
              if (i > maxResults) return null
              return <Grid key={`seed_${i}`} item xs={12} sm={6} md={4} lg={3}>
                        <Result seed={item} />
                      </Grid>
          })}
        </Grid>
      </> : <>
                <Font>
                  Try one of these filters
                </Font>
              <CardActionArea
                onClick={() => {
                  dispatch(updateFilter("strFilter", "Skunk"))
                }}>
                <CardHeader 
                  avatar={<Icon icon="spy" color="primary"/>}
                  title={<Font>Skunk</Font>}
                />
              </CardActionArea>

              <CardActionArea
                onClick={() => {
                  dispatch(updateFilter("strFilter", "Jack Herer"))
                }}>
                <CardHeader 
                  avatar={<Icon icon="spy" color="primary"/>}
                  title={<Font>Jack Herer</Font>}
                />
              </CardActionArea>

            </>
        }
        {maxResults > filteredSeeds ? <></> : <>
          <Font>
            Show All?
          </Font>
        </>}
      </Box>
    </>
  )
}
