import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import image from '../images/OGP.png'

export const Seo = ({ description, lang, meta, keywords, title, ogImagePath }) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const ogImage = ogImagePath ? `${data.site.siteMetadata.siteUrl}${ogImagePath}` : `${data.site.siteMetadata.siteUrl}${image}`
      return (
        <Helmet
          htmlAttributes={{
            lang,
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
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        >
          <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        </Helmet>
      )
    }}
  />
)

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
