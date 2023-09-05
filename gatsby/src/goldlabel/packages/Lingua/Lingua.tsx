import * as React from 'react'
import {goldlabelConfig} from "../../goldlabelConfig"
import {
  Avatar,
  useTheme,
  IconButton,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  setLingua,
  navigate,
  Icon,
  Font,
} from "../../../"
import {
  toggleLingua,
} from "../Lingua"

export default function Lingua (props: any) {
  const {appData} = props
  const pwa = usePwaSelect(selectPWA)
  const {locale, lingua} = pwa
  const theme = useTheme()
  const dispatch = usePwaDispatch()
  const {localeList, localeMeta} = goldlabelConfig
  // const seed_id = appData.data.markdownRemark.frontmatter.seed_id
  // console.log("seed_id", seed_id)
  const onOpenLingua = () => {
    dispatch(toggleLingua(true))
    return true
  }

  const closeLingua = () => {
    dispatch(toggleLingua(false))
    return true
  }

  return (
      <>
        <IconButton onClick={onOpenLingua}>
          <Icon icon="lingua" color="primary"/>
        </IconButton>

        <Dialog 
          open={lingua}
          fullScreen
          >
          <DialogTitle>
            <Font variant="title" align="center">
              Lingua
            </Font>
          </DialogTitle>

          <DialogContent>
            <Container maxWidth="xs">
              <List>
              { localeList.map((item: string, i: number) => {
                  return <ListItemButton
                            key={`locale_${i}`}
                            sx={{
                              borderBottom: item === locale ? "1px solid "+ theme.palette.primary.main : "none"
                            }}
                            onClick={(e:React.MouseEvent) => {
                              e.preventDefault()
                              dispatch(setLingua(item))
                              setTimeout(() => {
                                dispatch(navigate("/", "_self"))
                              }, 250)
                              closeLingua()
                            }}>
                              <ListItemAvatar>
                                <Avatar 
                                  sx={{
                                    border: item === locale ? "3px solid "+ theme.palette.primary.main : "none"
                                  }}
                                  src={`/svg/flags/${item}.svg`} 
                                  alt={localeMeta[item].localised}/>
                              </ListItemAvatar>
                              <ListItemText primary={<Font>{localeMeta[item].localised}</Font>} />
                          </ListItemButton>
                }) }
              </List>
            </Container>
          </DialogContent>
          
          <DialogActions>
            <IconButton
              color={"secondary"}
              onClick={closeLingua}>
                <Icon icon="cancel" color="primary" />
            </IconButton>
          </DialogActions>
        </Dialog>
      </>
  );
}
