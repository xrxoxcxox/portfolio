import React from 'react'
import AdobeFonts from './AdobeFonts'

import { css } from '@emotion/core'

import Size from '../styles/Size'

const layout = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, minmax(${Size(3)}, ${Size(16)}));
  grid-column-gap: ${Size(6)};
  justify-content: center;
  align-content: flex-start;
  padding: 0 ${Size(3)} ${Size(20)};
  @media (max-width: 480px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 0;
  }
`

export default ({ children, className }) => (
  <div css={layout} className={className}>
    <AdobeFonts />
    {children}
  </div>
)
