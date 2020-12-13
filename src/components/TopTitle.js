import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

const root = css`
  align-items: center;
  display: flex;
  grid-column: 1 / -1;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const icon = css`
  flex-shrink: 0;
  height: 64px;
  width: 64px;
`

const content = css`
  margin-left: ${getSize(6)};
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: ${getSize(6)};
  }
`

const title = css`
  display: inline;
  font-family: proxima-nova, sans-serif;
  font-feature-settings: 'salt';
  font-size: 64px;
  font-weight: 900;
  line-height: 72px;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    line-height: 68px;
  }
`

const titleWip = css`
  ${title}
`

const titleBlock = css`
  @media (max-width: 768px) {
    display: block;
  }
`

const wip = css`
  color: ${color.blue[60]};
`

const subTitle = css`
  font-feature-settings: 'palt';
  grid-column: 1 / -1;
  letter-spacing: 0.02em;
  @media (max-width: 768px) {
    margin-top: ${getSize(3)};
  }
`

export default ({ ...props }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 64, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div css={root} className={props.className}>
      <Img fluid={data.file.childImageSharp.fluid} aria-hidden='true' alt='' css={icon} />
      <div css={content}>
        <h1 css={title}>
          <span css={titleBlock}>Keisuke </span>
        </h1>
        <h1 css={titleWip}>
          <span css={titleBlock}>
            <span css={wip}>W</span>
            <span>atanuk</span>
            <span css={wip}>i </span>
          </span>
          <span css={titleBlock}>
            <span css={wip}>P</span>
            <span>ortfolio</span>
          </span>
        </h1>
        <p css={subTitle}>{data.site.siteMetadata.description}</p>
      </div>
    </div>
  )
}
