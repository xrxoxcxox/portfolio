import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

import image from '../images/OGP.png'

export const Seo = ({ title, description, ogImagePath }) => {
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
    <Helmet>
      <html lang='ja' />
      <title>{title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}</title>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:url' content={data.site.siteMetadata.siteUrl} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={ogImage} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:site' content={data.site.siteMetadata.author} />
      <meta property='twitter:title' content={metaTitle} />
      <meta property='twitter:description' content={metaDescription} />
      <link rel='icon' href='/icon.svg' type='image/svg+xml' />
    </Helmet>
  )
}
