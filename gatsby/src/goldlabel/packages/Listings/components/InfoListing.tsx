import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
} from "../../../../"
import {getTranslation} from "../../../translations"

export default function InfoListing(props: any) {
  const {frontmatter, html} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, more} = pwa
  const {
    icon,
    description,
  } = frontmatter
  return (<>
            <Box sx={{mx:2}}>
              <Font>
                <span dangerouslySetInnerHTML={{ __html: html }}/>
              </Font>
            </Box>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>

*/