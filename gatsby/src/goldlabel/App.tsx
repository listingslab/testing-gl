import React from "react"
import isEqual from "react-fast-compare"
import {
  Container,
} from "@mui/material"
import {
  Notifyer,
  SiteHeader,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  boot,
  setRoute,
  SiteBottom,
} from "../"

export default function App(props: any) {
  const {
    appData,
    location,
    children,
  } = props
  const pwa = usePwaSelect(selectPWA)
  const {route} = pwa
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
    dispatch(boot())
    if (!isEqual(route, location)){
      dispatch(setRoute(location))
    }
  }, [location, route, dispatch])

  return (<><Container maxWidth="lg">
              <Notifyer />
              <SiteHeader appData={appData} />
              <SiteBottom appData={appData} >
                {children}
              </SiteBottom>   
            </Container>
          </>)
}
