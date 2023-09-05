import * as React from "react"
import {
  Box,
  Button,
  Collapse,
  Grid,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  toggleMore,
  usePwaSelect,
  selectPWA,
} from "../../../../"
import {getTranslation} from "../../../translations"

export default function SeedInfo(props: any) {
  const {seed} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, more} = pwa
  const {
    html,
    frontmatter,
  } = seed
  const {
    title,
    description,
  } = frontmatter
  return (<>
          <Button
            fullWidth
            variant={"text"}
            sx={{m:1}}
            onClick={() => {
              dispatch(toggleMore(!more))
            }}>
            <Font>{getTranslation("toggleMore", locale)}</Font>
          </Button>

                {!more ?<Box sx={{mx:2}}>
                  <Font>
                    <Box sx={{my:2}}>
                      {description} {seed.excerpt}
                    </Box>
                </Font></Box> : null}

                <Collapse in={more} timeout="auto" unmountOnExit>
                    <Grid item xs={12}> 
                      <Box sx={{mx:2}}>
                        <Font>
                          <span dangerouslySetInnerHTML={{ __html: html }}/>
                        </Font>
                      </Box>
                  </Grid>
                </Collapse>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>

*/