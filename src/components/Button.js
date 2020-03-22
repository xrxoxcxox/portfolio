import React from 'react'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'

import { css } from '@emotion/core'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  background-color: ${Color.Blue};
  border-radius: ${Size(1)};
  box-shadow: 0 ${Size(0.5)} ${Size(2)} ${hexToRgba(Color.Black, 16)};
  color: ${Color.White};
  display: inline-block;
  padding: ${Size(2)} ${Size(4)};
  ${Typography.Body1};
  text-decoration: none;
`

export default ({ children, to, ...props }) => (
  <Link to={to} css={root} {...props}>
    {children}
  </Link>
)
