import React from 'react'
import Button from '../components/Button'

import { css } from '@emotion/core'
import Size from '../styles/Size'

const link = css`
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: calc(100% - ${Size(8)});
  }
`

export default props => (
  <div {...props}>
    <Button to='/' css={link}>
      ポートフォリオトップへ戻る
    </Button>
  </div>
)
