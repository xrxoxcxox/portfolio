import React from 'react'

import Image from '../components/image'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'

const aboveTheFold = css`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: inherit;
  position: relative;
  margin-top: 4rem;
  @media (max-width: 768px) {
    margin-top: 2.4rem;
  }
`

const keyVisual = css`
  grid-column: 5 / -1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const title = css`
  grid-column: 1 / -1;
  position: absolute;
  bottom: 3.2rem;
  font-size: 6.4rem;
  line-height: 8rem;
  font-weight: bold;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    font-size: calc(2rem + 4vw);
    line-height: 1.4;
    margin-top: 0.4rem;
  }
  span {
    padding: 0 1.2rem;
    background-color: ${Colors.White};
    @media (max-width: 768px) {
      padding: 0;
      background-color: transparent;
    }
  }
`

export default ({ image, alt, children }) => (
  <div css={aboveTheFold}>
    <Image filename={image} alt={alt} css={keyVisual} />
    <h1 css={title}>{children}</h1>
  </div>
)
