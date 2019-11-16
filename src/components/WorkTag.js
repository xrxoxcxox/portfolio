import React from 'react'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const headline = css`
  ${Typography.Headline2};
`

const contents = css`
  ${Typography.Body3};
  color: ${Color.Gray400};
  border-left: ${Size(0.25)} solid ${Color.Gray300};
  margin: ${Size(1)} 0 0 0;
  padding: ${Size(1)} 0 ${Size(1)} ${Size(3)};
  list-style-type: none;
`

export default ({ year, tags, ...props }) => {
  const tagItems = tags.map(tag => <li key={tag}>{tag}</li>)
  return (
    <div {...props}>
      <span css={headline}>{year}</span>
      <ul css={contents}>{tagItems}</ul>
    </div>
  )
}
