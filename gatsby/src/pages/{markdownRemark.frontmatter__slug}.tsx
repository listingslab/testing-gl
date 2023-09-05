import * as React from "react"
import { graphql } from "gatsby"
import {
  Alert,
  Container,
  Grid,
} from "@mui/material"
import {
  AppShell,
} from "../"
import {Listings} from "../goldlabel/packages/Listings"

export default function MarkdownPage(data: any) {
  const { markdownRemark } = data.data
  if(!markdownRemark) return <>
    <Alert
      severity="error"
      sx={{m:2}}
      onClose={() => {
        window.open("/", "_self")
      }}>
      You'll need to clean and rebuild gatsby
    </Alert></>

  return (
    <AppShell appData={{...data}}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={1}>
          <Grid item xs={12}>   
            <Listings 
              frontmatter={{...data.data.markdownRemark.frontmatter}} 
              html={markdownRemark.html}
            />
          </Grid>
        </Grid>
      </Container>
    </AppShell>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        description
        image
        slug
        bookSlug
        bookcover
        url
        category
        locale
      }
    }
  }
`

/*
<pre>{JSON.stringify(frontmatter, null, 2)}</pre>
*/
