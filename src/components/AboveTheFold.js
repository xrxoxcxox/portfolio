import React from 'react'
import Image from './Image'

import { css } from '@emotion/core'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  display: grid;
  grid-column: 1 / -1;
  grid-column-gap: inherit;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  margin-top: ${Size(10)};
  position: relative;
  @media (max-width: 768px) {
    margin-top: ${Size(6)};
  }
`

const visual = css`
  grid-column: 3 / 11;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const visualWithText = css`
  grid-column: 5 / -1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const title = css`
  ${Typography.Title}
  bottom: ${Size(8)};
  grid-column: 1 / -1;
  line-height: 8rem;
  position: absolute;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-top: ${Size(1)};
    position: static;
  }
  span {
    background-color: ${Color.White};
    padding: 0 ${Size(3)};
    @media (max-width: 768px) {
      background-color: transparent;
      padding: 0;
    }
  }
`

export default ({ image, alt, children, type }) => (
  <div css={root}>
    <Image
      filename={image}
      alt={alt}
      css={type === 'center' ? visual : visualWithText}
    />
    {children && <h1 css={title}>{children}</h1>}
  </div>
)
