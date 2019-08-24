import React from 'react'

import { css } from '@emotion/core'

import Colors from '../styles/Colors'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  grid-column: 1 / -1;
  ${Typography.Footnote};
  color: ${Colors.Gray};
  text-align: center;
  padding: ${Size(30)} 0 ${Size(10)};
`

export default () => <footer css={root}>© 2019 Keisuke Watanuki</footer>
