import React from 'react'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const headline = css`
  ${Typography.Headline3};
`

const contents = css`
  border-left: ${Size(0.25)} solid ${Color.Gray300};
  ${Typography.Body3};
  color: ${Color.Gray400};
  list-style-type: none;
  margin: ${Size(2)} 0 0 0;
  padding: ${Size(1)} 0 ${Size(1)} ${Size(3)};
`

export default ({ start, end, tags, ...props }) => {
  const tagItems = tags.map((tag) => <li key={tag}>{tag}</li>)
  return (
    <div {...props}>
      <span css={headline}>{start} ~ {end}</span>
      <ul css={contents}>{tagItems}</ul>
    </div>
  )
}
