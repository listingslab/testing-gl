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
import {updateFilter} from "../../Sihab"

export default function SeedTitle(props: any) {
  const {seed} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  const {
    frontmatter,
  } = seed
  const {title} = frontmatter
  return (<>
      <Box sx={{}}>
        <Box sx={{mb:2}}>
          <Font variant="title">
            {title}
          </Font>
        </Box>
      </Box>
    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>
*/