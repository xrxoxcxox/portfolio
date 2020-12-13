import React from 'react'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color, typography } from '../styles/Theme'

const headline = css`
  ${typography.headline3};
`

const contents = css`
  border-left: ${getSize(0.25)} solid ${color.divider.onSurface};
  ${typography.body3};
  color: ${color.text.onSurface.mediumEmphasis};
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
