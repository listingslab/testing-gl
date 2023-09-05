import * as React from "react"
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
} from "../../../../"

export default function SeedChips(props: any) {
  const {seed} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {sihab} = pwa
  const {
    frontmatter,
  } = seed
  const {
    strain_type,
    flowering_min,
    flowering_max,
    heigh_gain,
    climate_zone,
    category,
    seed_id,
  } = frontmatter


  let seedType: string = strain_type
  let seedFlowerMin: number = flowering_min
  let seedFlowerMax: number = flowering_max
  let seedDays: string = flowering_max
  let seedHeight: string = heigh_gain
  let seedClimate: string = climate_zone
  let seedBreeder: string = category
  let seedYield: string = frontmatter.yield
  let seedId: string = seed_id
  seedDays = `${seedFlowerMin}-${seedFlowerMax} days`
  if (seedFlowerMin === 0) seedDays = ""


  return (<>
      <Box sx={{}}>
        <List>
          {seedHeight ? <ListItem>
            <ListItemIcon>
              <Icon icon={"tree"}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">
                        {seedHeight}
                      </Font>}
            />
          </ListItem> : null}
          
          {seedClimate ? <ListItem>
            <ListItemIcon>
              <Icon icon={"temp"}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">
                        {seedClimate}
                      </Font>}
            />
          </ListItem> : null}
          
          {seedBreeder ? <ListItem>
            <ListItemIcon>
              <Icon icon={"business"}/>
            </ListItemIcon>
            <ListItemText
              primary={<Font variant="small">
                        {seedBreeder}
                      </Font>}
            />
          </ListItem> : null}
          
          {seedYield ? <ListItem>
            <ListItemIcon>
              <Icon icon={"yield"}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">
                        {seedYield}
                      </Font>}
            />
          </ListItem> : null}
          
          {seedType ? <ListItem>
            <ListItemIcon>
              <Icon icon={"spy"}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">
                        {seedType}
                      </Font>}
            />
          </ListItem> : null}
          
          {seedDays ? <ListItem>
            <ListItemIcon>
              <Icon icon={"calendar"}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">
                        {seedDays}
                      </Font>}
            />
          </ListItem> : null}
          
        </List>
        
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