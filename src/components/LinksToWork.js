import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

/* 画像にhoverしたときにタイトルにスタイルをあてたいため、タグの入れ子でスタイル指定 */
const LinkToWork = styled(Link)`
  grid-column: span 6;
  text-decoration: none;
  .gatsby-image-wrapper {
    border: 1px solid ${color.divider.onSurface};
    border-radius: ${getSize(1)};
    transition: all 200ms ease-in-out;
  }
  &:hover {
    .gatsby-image-wrapper {
      border: 1px solid ${color.blue[60]};
      opacity: 0.8;
    }
  }
  &:nth-of-type(n + 3) {
    margin-top: ${getSize(10)};
  }
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    :not(:first-of-type) {
      margin-top: ${getSize(8)};
    }
  }
`

const Headline = styled.div`
  display: inline-block;
  margin-top: ${getSize(1)};
  &::after {
    border-bottom: ${getSize(0.25)} solid ${color.blue[60]};
    content: '';
    display: block;
    transition: all 200ms ease-in-out;
    width: 0;
  }
  ${LinkToWork}:hover &::after {
    width: 100%;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }, sort: { order: DESC, fields: [frontmatter___end] }) {
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
  `)
  return data.allMdx.edges.map((edge) => (
    <LinkToWork to={edge.node.fields.slug} key={edge.node.id}>
      <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
      <Headline as='h2'>{edge.node.frontmatter.title}</Headline>
    </LinkToWork>
  ))
}
