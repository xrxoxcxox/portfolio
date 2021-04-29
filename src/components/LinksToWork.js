import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import styled from '@emotion/styled'
import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

/* 画像にhoverしたときにタイトルにスタイルをあてたいため、タグの入れ子でスタイル指定 */
const LinkToWork = styled(Link)`
  grid-column: span 6;
  text-decoration: none;
  .gatsby-image-wrapper {
    border-radius: ${getSize(1)};
    transition: all 200ms ease-in-out;
  }
  &:hover {
    .gatsby-image-wrapper {
      filter: brightness(0.87);
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
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: all 200ms ease-in-out;
  }
  ${LinkToWork}:hover &::after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
`

export const LinksToWork = () => {
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
                  gatsbyImageData(width: 504, quality: 85, layout: CONSTRAINED)
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
      <GatsbyImage image={edge.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt='' />
      <Headline as='h2'>{edge.node.frontmatter.title}</Headline>
    </LinkToWork>
  ))
}
