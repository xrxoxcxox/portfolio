import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'
import { getSize } from '../styles/Size'
import { color, elevation } from '../styles/Theme'

const root = css`
  background-color: ${color.blue[60]};
  border-radius: ${getSize(1)};
  box-shadow: ${elevation[1]};
  color: ${color.gray[0]};
  display: inline-block;
  padding: ${getSize(2)} ${getSize(4)};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: ${color.blue[80]};
    box-shadow: ${elevation[2]};
  }
`

export default ({ children, to, ...props }) => (
  <Link to={to} css={root} {...props}>
    {children}
  </Link>
)
