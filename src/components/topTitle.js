import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { css, keyframes } from '@emotion/core'
import Colors from '../styles/Colors'

const titleBlur = keyframes`
  0% {
    filter: blur(0) contrast(1);
  }
  30% {
    filter: blur(0) contrast(1);
  }
  50% {
    filter: blur(4rem) contrast(2);
  }
  85% {
    filter: blur(0) contrast(1);
  }
`

const appear = keyframes`
0% {
  clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  max-width: 0%;
}
45% {
  clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  max-width: 0%;
}
85% {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  max-width: 100%;
}
`

const container = css`
  grid-column: 1 / -1;
  margin: 16rem 0;
  @media (max-width: 480px) {
    margin: 20vh 0;
  }
`

const title = css`
  display: inline;
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 6.4rem;
  font-feature-settings: 'salt';
  white-space: pre-wrap;
`

const titleWip = css`
  ${title}
  animation: ${titleBlur} 600ms ease-out 200ms normal;
`

const titleBlock = css`
  @media (max-width: 768px) {
    display: block;
  }
`

const wip = css`
  color: ${Colors.Blue};
`

const hide = css`
  white-space: pre;
  animation: ${appear} 600ms ease-out 200ms backwards;
`

const space = css`
  @media (max-width: 768px) {
    display: none;
  }
`

const subTitle = css`
  grid-column: 1 / -1;
  font-weight: 400;
  font-size: 1.6rem;
  font-feature-settings: 'palt';
  letter-spacing: 0.02em;
  @media (max-width: 768px) {
    margin-top: 1.2rem;
    line-height: 1.6;
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
        <span css={hide}>atanuk</span>
        <span css={wip}>i</span>
        <span css={[hide, space]}> </span>
      </span>
      <span css={titleBlock}>
        <span css={wip}>P</span>
        <span css={hide}>ortfolio</span>
      </span>
    </h1>
    <h2 css={subTitle}>{data.site.siteMetadata.description}</h2>
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
