import React from 'react'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'

import { css } from '@emotion/core'
import Color from '../styles/Color'
import Size from '../styles/Size'
import { getSize } from '../styles/Size'

const root = css`
  background-color: ${Color.Blue};
  border-radius: ${getSize(1)};
  box-shadow: 0 ${getSize(0.5)} ${getSize(2)} ${hexToRgba(Color.Black, 16)};
  color: ${Color.White};
  display: inline-block;
  padding: ${getSize(2)} ${getSize(4)};
  text-decoration: none;
`

export default ({ children, to, ...props }) => (
  <Link to={to} css={root} {...props}>
    {children}
  </Link>
)
