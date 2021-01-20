import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteUrl
          locale
        }
      }
    }
  `)

  const title = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
  const description = props.pagedesc || data.site.siteMetadata.description
  const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl

  const imgurl = props.pageimg
    ? `${data.site.siteMetadata.siteUrl}${props.pageimg}`
    : props.blogimg || `${data.site.siteMetadata.siteUrl}/images/thumb.jpg`

  const imgw = props.pageimgw || 500
  const imgh = props.pageimgh || 500

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang}/>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />

      <meta property="og.image" content={imgurl} />
      <meta property="og.width" content={imgw} />
      <meta property="og.height" content={imgh} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
