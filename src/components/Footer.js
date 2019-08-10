import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'

const root = css`
  grid-column: span 12;
  font-size: 1.4rem;
  color: ${Colors.Gray};
  text-align: center;
`

export default ({ className }) => (
  <footer className={className} css={root}>
    © 2019 Keisuke Watanuki
  </footer>
)
