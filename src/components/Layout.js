import React from 'react'
import AdobeFonts from './AdobeFonts'

import { css } from '@emotion/core'

import Size from '../styles/Size'

const layout = css`
  align-content: flex-start;
  display: grid;
  grid-column-gap: ${Size(6)};
  grid-template-columns: repeat(12, minmax(${Size(3)}, ${Size(16)}));
  grid-template-rows: auto;
  justify-content: center;
  padding: 0 ${Size(3)};
  @media (max-width: 480px) {
    grid-column-gap: 0;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 ${Size(4)} ${Size(10)};
  }
`

export default ({ children }) => (
  <div css={layout}>
    <AdobeFonts />
    {children}
  </div>
)
