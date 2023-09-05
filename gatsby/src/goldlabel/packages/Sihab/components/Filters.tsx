import * as React from "react"
import {
  Box,
  Chip,
  Container,
  Grid,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  InputString,
} from "../../../../"
import {updateFilter} from "../../Sihab"

export default function Filters() {
  
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {sihab} = pwa
  const {
    strFilter,
  } = sihab

  return (<>
        
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
          <InputString 
          label="Search"
          value={strFilter || ""}
          onChange={(str) => {
            dispatch(updateFilter("strFilter", str))
          }}
        />
          </Grid>
          <Grid item xs={12} md={6}>
          {strFilter ? <>
          <Chip 
            sx={{m:1}}
            color="primary"
            variant="outlined"
            label={<Font variant="small">
                    {strFilter}
                  </Font>}
            icon={<Box sx={{m:1, mt:1.5}}>
                    <Icon icon="text" />
                  </Box>}
            onDelete={() => {
              dispatch(updateFilter("strFilter", null))
            }}
          />
        </> : null }
          </Grid>
        </Grid>
        
        

        

    </>
  )
}

/*
<pre>{JSON.stringify(sihab, null, 2)}</pre>

*/