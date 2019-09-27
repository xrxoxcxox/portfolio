import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'

import Colors from '../styles/Colors'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const container = css`
  grid-column: 1 / -1;
  margin: ${Size(40)} 0;
  @media (max-width: 480px) {
    margin: 20vh 0;
  }
`

const title = css`
  display: inline;
  font-family: proxima-nova, sans-serif;
  ${Typography.Title};
  font-weight: 900;
  font-feature-settings: 'salt';
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 6.4rem;
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
  color: ${Colors.Blue};
`

const subTitle = css`
  grid-column: 1 / -1;
  font-weight: 400;
  ${Typography.Body}
  font-feature-settings: 'palt';
  letter-spacing: 0.02em;
  @media (max-width: 768px) {
    margin-top: ${Size(3)};
  }
`

const TopTitle = ({ data }) => (
  <div css={container}>
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
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => <TopTitle data={data} {...props} />}
  />
)
