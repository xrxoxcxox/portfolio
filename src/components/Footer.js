import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/react'

import { getSize } from '../styles/Size'
import { color, typography } from '../styles/Theme'

const root = css`
  ${typography.body3};
  color: ${color.text.onSurface.mediumEmphasis};
  display: flex;
  grid-column: 1 / -1;
  justify-content: center;
  padding: ${getSize(30)} 0 ${getSize(10)};
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`

const link = css`
  margin-left: ${getSize(6)};
`

export const Footer = () => (
  <footer css={root}>
    <span>© 2019 Keisuke Watanuki</span>
    <Link to='/release-notes' css={link}>
      リリースノート
    </Link>
  </footer>
)
