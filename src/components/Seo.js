import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import image from '../images/OGP.png'

export const Seo = ({ description, title, ogImagePath }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)
  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle = title || data.site.siteMetadata.title
  const ogImage = ogImagePath ? `${data.site.siteMetadata.siteUrl}${ogImagePath}` : `${data.site.siteMetadata.siteUrl}${image}`
  return (
    <Helmet
      htmlAttributes={{
        lang: `ja`,
      }}
      title={title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:url`,
          content: data.site.siteMetadata.siteUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link rel='icon' href='/icon.svg' type='image/svg+xml' />
    </Helmet>
  )
}
