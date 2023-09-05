import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"
import {
  usePwaDispatch,  
} from "../../../../"
import {
  updateEditDoc,
  updateNewDoc,
} from "../../../Backoffice"

export function EditableMultiline(props: any) {
  let fieldValue = null
  const dispatch = usePwaDispatch()
  const {
    field,
    fieldData,
    mode,
  } = props
  const {title, name} = field
  if (fieldData[field.name]) fieldValue = fieldData[field.name]
  
  return (<Box sx={{my:1}}>
            <TextField 
              value={fieldValue || ""}
              fullWidth
              multiline
              rows={3}
              label={title}
              onChange={(e:any) => {
                if (mode === "edit") dispatch(updateEditDoc(name, e.target.value))
                if (mode === "create") dispatch(updateNewDoc(name, e.target.value))
              }}
            />
          </Box>)
}

