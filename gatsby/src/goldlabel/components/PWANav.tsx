import * as React from "react"
import {
  useTheme,
  IconButton,
} from "@mui/material"
import {
  usePwaDispatch,
  resetRedux,
  Icon,
  usePwaSelect,
  selectPWA,
  toggleDarkmode,
} from "../../"
import {Lingua} from "../packages/Lingua"

export default function PWANav(props: any) {
  const {appData} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {darkmode} = pwa
  return (
    <>
      <IconButton 
        onClick={() => {
          dispatch(resetRedux())
        }}
        color="primary">
        <Icon icon="refresh" />
      </IconButton>
      <IconButton 
        onClick={() => {
          dispatch(toggleDarkmode(!darkmode))
        }}
        color="primary">
        <Icon icon={darkmode ? "light" : "dark"} />
      </IconButton>
      <Lingua appData={appData}/>
    </>
  )
}
