import * as React from "react"
import {
  Card,
  CardHeader,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  navigate,
} from "../../../../"

export default function ResultSmall(props: any) {
  const {seed} = props
  const dispatch = usePwaDispatch()
  const {frontmatter} = seed
  const {
    title, 
    slug,
    // image,
    category,
  } = frontmatter
  

  return (<>
        <Card>
          <CardActionArea
            sx={{}}
            onClick={() => {
              dispatch(navigate(slug, "_self"))
            }}>
            <CardHeader 
              // avatar={<Avatar src={image} alt={title}/>}
              title={<Font fixedH={24}>
                      {title}
                    </Font>}
              subheader={<Font fixedH={24} variant="small" color={"primary"}>
                          {category}
                        </Font>}
            />
          </CardActionArea>
        </Card>
      </>
  );
}

