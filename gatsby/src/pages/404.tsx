import * as React from "react"
import { AppShell } from "../"
import {
  Alert,
  Container,
} from "@mui/material"
import {
  Font,
} from "../"

export default function NotFoundPage(data: any) {

  // console.log("{...data}", {...data})
  return <AppShell appData={{...data}}>
            <Container maxWidth="sm">
            <Alert
              sx={{m:1, mt:3}}
              severity="error">
                <Font>404 bro :(</Font>
                <Font>{data.location.pathname}</Font>
            </Alert>
            </Container>
          </AppShell>
}
