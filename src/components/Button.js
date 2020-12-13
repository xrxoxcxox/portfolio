import React from 'react'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'

import { css } from '@emotion/core'
import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

const root = css`
  background-color: ${color.blue[60]};
  border-radius: ${getSize(1)};
  box-shadow: 0 ${getSize(0.5)} ${getSize(2)} ${hexToRgba(color.gray[90], 16)};
  color: ${color.gray[0]};
  display: inline-block;
  padding: ${getSize(2)} ${getSize(4)};
  text-decoration: none;
`

export default ({ children, to, ...props }) => (
  <Link to={to} css={root} {...props}>
    {children}
  </Link>
)
