import * as React from 'react'
import {
  Grid,
  CardMedia,
} from "@mui/material"
import {
  ListListings,
  TitleListings,
  CallToAction,
  InfoListing,
} from "../Listings"

export default function Listings (props: any) {
  const {frontmatter, html} = props
  const {image} = frontmatter
  return (
      <>
        <Grid container spacing={1}>

          <Grid item xs={12} md={4} lg={4}>
            
            <CallToAction frontmatter={frontmatter}/>
            <ListListings frontmatter={frontmatter} />
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <TitleListings frontmatter={frontmatter}/>
            {image ? <CardMedia
                height={270}
                component={"img"}
                src={image}
                /> : null }
              
            <InfoListing frontmatter={frontmatter} html={html}/>
          </Grid>

        </Grid>
        
      </>
  );
}

/* 
<pre>{JSON.stringify(appData, null, 2)}</pre> 
*/
