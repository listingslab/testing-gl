import React from "react"
import "./fonts/gotham.css"
import { 
  useTheme, 
  Box,
  Typography, 
} from "@mui/material"

export function Font(props: any) {
  const textFont = "GothamBold"
  const theme = useTheme()
  const { 
    variant, 
    fontSize, 
    color, 
    children, 
    align, 
    width,
    fixedH,
  } = props  
  let textAlign = "left"
  let w: any = "100%"
  let c = theme.palette.text.primary
  let fH: any = null

  if (color) c = color
  if (color === "primary") c = theme.palette.primary.main
  if (color === "secondary") c = theme.palette.secondary.main
  if (width) w = width
  let textfontSize: any = "0.9rem"
  if (align) textAlign = align
  if (variant === "title") {
    textfontSize = "1.1rem"
  }
  if (variant === "small") {
    textfontSize = "0.75rem"
  }
  if (variant === "subheader") {
    textfontSize = "0.9rem"
  }
  if (variant === "giant") {
    textfontSize = "1.4rem"
  }

  if (fontSize) textfontSize = fontSize
  if (fixedH) fH = fixedH


  return (
    <Typography
      component="span"
      overflow={"hidden"}
      sx={{
        // border: "1px solid red",
        display: "block",
        overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        color: c,
        width: w,
        height: fH,
      }}>
      {children}
    </Typography>
  )
}
