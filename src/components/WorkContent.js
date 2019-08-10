import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'

const root = css`
  grid-row: span 2;
  grid-column: 5 / 11;
  margin-top: 6.4rem;
  @media (max-width: 768px) {
    grid-row: span 1;
    grid-column: 1 / -1;
    margin-top: 2rem;
  }
  h2:not([class]) {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 500;
    margin-top: 6.4rem;
    @media (max-width: 768px) {
      font-size: 2.8rem;
      line-height: 3.8rem;
      margin-top: 4rem;
    }
  }
  h3:not([class]) {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 600;
    margin-top: 3.2rem;
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
      margin-top: 2.4rem;
    }
  }
  p:not([class]) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    &:not(:first-of-type) {
      margin-top: 1.6rem;
    }
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  ul:not([class]) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-top: 1.6rem;
    margin-left: 1.2em;
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
    margin-top: 0.8rem;
  }
`

export default ({ className, children }) => (
  <section css={root} className={className}>
    {children}
  </section>
)
