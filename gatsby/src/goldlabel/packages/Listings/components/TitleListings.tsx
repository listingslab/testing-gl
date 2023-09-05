import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
} from "../../../../"

export default function TitleListings(props: any) {
  const {frontmatter} = props
  if (!frontmatter) return null
  const {
    title,
    description,
  } = frontmatter
  return (<>
      <Box sx={{my:1}}>
          <Font variant="title">
            {title} {description}
          </Font>
      </Box>
    </>
  )
}
