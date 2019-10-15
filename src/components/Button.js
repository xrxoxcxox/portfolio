import React from 'react'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'

import { css } from '@emotion/core'
import Colors from '../styles/Colors.js'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  display: inline-block;
  color: ${Colors.White};
  background-color: ${Colors.Blue};
  ${Typography.Body1};
  text-decoration: none;
  border-radius: ${Size(1)};
  box-shadow: 0 ${Size(0.5)} ${Size(2)} ${hexToRgba(Colors.Black, 16)};
  padding: ${Size(2)} ${Size(3)};
`

export default ({ children, to, ...props }) => (
  <Link to={to} css={root} {...props}>
    {children}
  </Link>
)
