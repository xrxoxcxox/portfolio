import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'
import Size from '../styles/Size'

const root = css`
  grid-row: span 2;
  grid-column: 5 / 11;
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    grid-row: span 1;
    grid-column: 1 / -1;
    margin-top: ${Size(5)};
  }
  h2:not([class]) {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 500;
    margin-top: ${Size(16)};
    @media (max-width: 768px) {
      font-size: 2.8rem;
      line-height: 3.8rem;
      margin-top: ${Size(10)};
    }
  }
  h3:not([class]) {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 600;
    margin-top: ${Size(8)};
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
      margin-top: ${Size(6)};
    }
  }
  p:not([class]) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    &:not(:first-of-type) {
      margin-top: ${Size(4)};
    }
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  ul:not([class]) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-top: ${Size(4)};
    margin-left: ${Size(3)};
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  a:not([class]) {
    color: ${Colors.Blue};
  }
  small:not([class]) {
    display: block;
    font-size: 1.2rem;
    color: ${Colors.Gray};
    margin-top: ${Size(2)};
  }
`

export default ({ className, children }) => (
  <section css={root} className={className}>
    {children}
  </section>
)
