import React from 'react'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color, typography } from '../styles/Theme'

const root = css`
  ${typography.body3};
  color: ${color.text.onSurface.mediumEmphasis};
  grid-column: 1 / -1;
  padding: ${getSize(30)} 0 ${getSize(10)};
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`

export const Footer = () => <footer css={root}>© 2019 Keisuke Watanuki</footer>
