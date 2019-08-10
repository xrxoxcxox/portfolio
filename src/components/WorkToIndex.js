import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'

const link = css`
  color: ${Colors.Blue};
  margin-top: 6.4rem;
  grid-column: 5 / 9;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
  }
`

export default () => (
  <Link to='/' css={link}>
    サイトトップへ戻る
  </Link>
)
