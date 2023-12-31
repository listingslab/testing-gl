import {GatsbyShape} from "./src/types"
import type {GatsbyConfig} from "gatsby"
import {goldlabelConfig} from "./src/goldlabel/goldlabelConfig"

const siteTitle = goldlabelConfig.siteTitle
const siteDescription = goldlabelConfig.siteDescription
const siteUrl = goldlabelConfig.siteUrl
const siteIcon = goldlabelConfig.siteIcon
const siteImage = goldlabelConfig.siteImage
const siteTwitter = goldlabelConfig.siteTwitter
const siteTheme = goldlabelConfig.siteTheme
const siteKeywords = goldlabelConfig.siteKeywords

const siteMetadata: GatsbyShape =  {
  siteTitle,
  title: siteTitle,
  siteUrl,
  siteDescription,
  description: siteDescription,
  siteIcon,
  siteImage,
  image: siteImage,
  siteKeywords,
  siteTwitter,
  twitterUsername: siteTwitter,
  siteTheme,
}

const config: GatsbyConfig = {
  siteMetadata,
  graphqlTypegen: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en',
          url: siteMetadata.siteUrl,
          site_name: siteMetadata.siteTitle,
        },
        twitter: {
          handle: siteMetadata.siteTwitter,
          site: siteMetadata.siteTwitter,
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: `/`,
        display: `standalone`,
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        background_color: siteTheme,
        theme_color: siteTheme,
      }
    },
    {
      resolve: 'gatsby-plugin-offline'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
      __key: "markdown"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
}
export default config
