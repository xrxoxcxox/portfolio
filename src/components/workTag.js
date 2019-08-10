import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'
import Size from '../styles/Size'

const root = css`
  grid-column: 3 / 5;
  position: sticky;
  top: ${Size(24)};
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    margin-top: ${Size(5)};
  }
`

const headline = css`
  font-size: 2rem;
`

const contents = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${Colors.Gray};
  border-left: ${Size(0.25)} solid ${Colors.Gray};
  margin: ${Size(1)} 0 0 0;
  padding: ${Size(1)} 0 ${Size(1)} ${Size(3)};
  list-style-type: none;
`

export default ({ className, year, tags }) => {
  const tagItems = tags.map(tag => <li key={tag}>{tag}</li>)
  return (
    <div css={root} className={className}>
      <span css={headline}>{year}</span>
      <ul css={contents}>{tagItems}</ul>
    </div>
  )
}
