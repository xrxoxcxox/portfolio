import React from 'react'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import { getSize } from '../styles/Size'
import { typography } from '../styles/Theme'

const headline = css`
  ${typography.headline3};
`

const contents = css`
  border-left: ${getSize(0.25)} solid ${Color.Gray300};
  ${typography.body3};
  color: ${Color.Gray400};
  list-style-type: none;
  margin: ${getSize(2)} 0 0 0;
  padding: ${getSize(1)} 0 ${getSize(1)} ${getSize(3)};
`

export default ({ start, end, tags, ...props }) => {
  const tagItems = tags.map((tag) => <li key={tag}>{tag}</li>)
  return (
    <div {...props}>
      <span css={headline}>
        {start} ~ {end}
      </span>
      <ul css={contents}>{tagItems}</ul>
    </div>
  )
}
