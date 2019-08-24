import React from 'react'
import Button from '../components/Button'

import { css } from '@emotion/core'
import Size from '../styles/Size'

const link = css`
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: calc(100% - ${Size(8)});
    margin-right: auto;
    margin-left: auto;
  }
`

export default () => (
  <Button to='/' override={link}>
    サイトトップへ戻る
  </Button>
)
