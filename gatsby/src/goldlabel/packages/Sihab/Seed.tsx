import * as React from "react"
import {
  Box,
  Grid,
  CardMedia,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
} from "../../../"
import {
  Results,
  SeedTitle,
  SeedChips,
  CTA,
  SeedInfo,
} from "../Sihab"
import {getTranslation} from "../../translations"

export default function Seed(props: any) {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {seed} = props
  const {
    frontmatter,
  } = seed
  const {
    slug,
    image,
  } = frontmatter
  const isBig = true
  let isHome = false
  if (slug === "/") isHome = true

  return (
    <Box sx={{ display: "block"}}>
        <Grid container spacing={1}>
          
          <Grid item xs={12}>
            { isHome ? <Results /> : null}
          </Grid>

          {slug !== "/" ? <>

            <Grid item xs={12}>
              <SeedTitle seed={seed}/>
            </Grid>


            <Grid item xs={12} md={4} lg={3}>
              <CTA seed={seed}/>
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <CardMedia
                height={isBig ? 270 : 100}
                component={"img"}
                src={image}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <SeedChips seed={seed}/>
            </Grid>

            <Grid item xs={12}>
              <SeedInfo seed={seed}/>
            </Grid>
    
          </> : null }
        </Grid>
    </Box>
  );
}

/*

          <pre>{JSON.stringify(seed.excerpt, null, 2)}</pre>

          <Grid item xs={12}>
            
          </Grid>
*/