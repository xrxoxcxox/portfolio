import React from 'react'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  grid-column: 5 / 11;
  grid-row: span 2;
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: span 1;
    margin-top: ${Size(6)};
  }
  h2:not([class]) {
    ${Typography.Headline1}
    margin-top: ${Size(16)};
    @media (max-width: 768px) {
      margin-top: ${Size(10)};
    }
  }
  h3:not([class]) {
    ${Typography.Headline2}
    margin-top: ${Size(8)};
    @media (max-width: 768px) {
      margin-top: ${Size(6)};
    }
  }
  p:not([class]) {
    ${Typography.Body1}
    &:not(:first-of-type) {
      margin-top: ${Size(5)};
    }
  }
  ul:not([class]) {
    margin-left: ${Size(4)};
    ${Typography.Body1}
    margin-top: ${Size(4)};
  }
  a:not([class]) {
    color: ${Color.Blue};
  }
  small:not([class]) {
    ${Typography.Body3};
    color: ${Color.Gray400};
    display: block;
    margin-top: ${Size(2)};
  }
`

export default ({ children }) => <article css={root}>{children}</article>
