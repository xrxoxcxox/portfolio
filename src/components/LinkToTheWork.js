import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'
import Size from '../styles/Size'
import Typography from '../styles/Typography'
import Color from '../styles/Color'

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

const LinkToTheWork = ({ post }) => (
  <Link to={post.fields.slug} css={link}>
    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
    <h2>{post.frontmatter.title}</h2>
  </Link>
)

export default LinkToTheWork
