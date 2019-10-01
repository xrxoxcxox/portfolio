import React from 'react'

import { css } from '@emotion/core'

import Colors from '../styles/Colors'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  grid-row: span 2;
  grid-column: 5 / 11;
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    grid-row: span 1;
    grid-column: 1 / -1;
    margin-top: ${Size(6)};
  }
  h2:not([class]) {
    ${Typography.Headline1}
    font-weight: 500;
    margin-top: ${Size(16)};
    @media (max-width: 768px) {
      margin-top: ${Size(10)};
    }
  }
  h3:not([class]) {
    ${Typography.Headline2}
    font-weight: 600;
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
    ${Typography.Body1}
    margin-top: ${Size(4)};
    margin-left: ${Size(4)};
  }
  a:not([class]) {
    color: ${Colors.Blue};
  }
  small:not([class]) {
    display: block;
    ${Typography.Body3};
    color: ${Colors.Gray400};
    margin-top: ${Size(2)};
  }
`

export default ({ className, children }) => (
  <section css={root} className={className}>
    {children}
  </section>
)
