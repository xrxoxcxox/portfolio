import React from 'react'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'

const root = css`
  grid-column: 3 / 5;
  position: sticky;
  top: 9.6rem;
  margin-top: 6.4rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    margin-top: 2rem;
  }
`

const headline = css`
  font-size: 2rem;
`

const contents = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${Colors.Gray};
  border-left: 0.1rem solid ${Colors.Gray};
  margin: 0.4rem 0 0 0;
  padding: 0.4rem 0 0.4rem 1.2rem;
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
