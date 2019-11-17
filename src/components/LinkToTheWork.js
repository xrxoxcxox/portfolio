import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

/* 画像にhoverしたときにpにスタイルをあてたいため、タグの入れ子でスタイル指定 */
const link = css`
  grid-column: span 6;
  text-decoration: none;
  h2 {
    ${Typography.Body1};
    display: inline-block;
    margin-top: ${Size(1)};
    &::after {
      content: '';
      display: block;
      width: 0;
      transition: all 0.25s ease-out;
      border-bottom: ${Size(0.25)} solid currentColor;
    }
  }
  &:hover {
    .gatsby-image-wrapper {
      opacity: 0.8;
    }
    h2::after {
      width: 100%;
    }
  }
  &:nth-of-type(n + 3) {
    margin-top: ${Size(10)};
  }
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    :not(:first-of-type) {
      margin-top: ${Size(4)};
    }
  }
`

const LinkToTheWork = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      return data.allMarkdownRemark.edges.map(edge => {
        return (
          <Link to={edge.node.fields.slug} css={link} key={edge.node.id}>
            <Img
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            />
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
        )
      })
    }}
  />
)

export default LinkToTheWork
