import * as React from "react"
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  navigate,
} from "../../../../"

export default function Result(props: any) {
  const {seed} = props
  const dispatch = usePwaDispatch()
  const {frontmatter} = seed
  const {
    title, 
    slug,
    image,
    description,
    category,
  } = frontmatter

  let icon: string = "seed"


  return (<>
        <Card>
          <CardActionArea
            sx={{}}
            onClick={() => {
              dispatch(navigate(slug, "_self"))
            }}>
            <CardHeader
              title={<Font fixedH={24}>
                        {title}
                      </Font>}
              subheader={<Font fixedH={24} variant="small" color="primary">
                          {category}
                        </Font>}
            />
            <CardMedia 
              component={"img"}
              src={image}
              height={150}
              alt={description}
            />
          </CardActionArea>
        </Card>
      </>
  );
}
