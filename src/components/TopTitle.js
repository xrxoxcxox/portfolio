import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  align-items: center;
  display: flex;
  grid-column: 1 / -1;
  margin: ${Size(40)} 0;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    margin: 20vh 0;
  }
`

const icon = css`
  flex-shrink: 0;
  height: 6.4rem;
  width: 6.4rem;
`

const content = css`
  margin-left: 2.4rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2.4rem;
  }
`

const title = css`
  display: inline;
  font-family: proxima-nova, sans-serif;
  font-feature-settings: 'salt';
  font-size: 6.4rem;
  font-weight: 900;
  line-height: 7.2rem;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    line-height: 6.8rem;
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
  color: ${Color.Blue};
`

const subTitle = css`
  ${Typography.Body1}
  font-feature-settings: 'palt';
  grid-column: 1 / -1;
  letter-spacing: 0.02em;
  @media (max-width: 768px) {
    margin-top: ${Size(3)};
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div css={root}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          aria-hidden='true'
          alt=''
          css={icon}
        />
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
    )}
  />
)

const query = graphql`
  query {
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
`
