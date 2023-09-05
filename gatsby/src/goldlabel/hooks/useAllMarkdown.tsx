import { graphql, useStaticQuery } from "gatsby"

export const useAllMarkdown = () => {
  const data = useStaticQuery(graphql`
  query Everything {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
          image
          slug
          url
          category
          locale
        }
        html
        excerpt
      }
    }
  }
}
`)

    const {allMarkdownRemark} = data   
    const {edges} = allMarkdownRemark
    const docs: Array<any> = []
    for(let i = 0; i < edges.length; i++){        
        const {node} = edges[i]
        const {frontmatter} = node
                docs.push({
                    order: frontmatter.order,
                    ...node,
                  })
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}