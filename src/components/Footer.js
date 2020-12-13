import React from 'react'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import { typography } from '../styles/Theme'

const root = css`
  ${typography.body3};
  color: ${Color.Gray400};
  grid-column: 1 / -1;
  padding: ${Size(30)} 0 ${Size(10)};
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`

export default () => <footer css={root}>© 2019 Keisuke Watanuki</footer>
