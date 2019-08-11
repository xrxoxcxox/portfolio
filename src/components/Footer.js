import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'
import Typography from '../styles/Typography'

const root = css`
  grid-column: span 12;
  ${Typography.Callout};
  color: ${Colors.Gray};
  text-align: center;
`

export default ({ className }) => (
  <footer className={className} css={root}>
    © 2019 Keisuke Watanuki
  </footer>
)
