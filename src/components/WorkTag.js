import React from 'react'

import { css } from '@emotion/react'

import { getSize } from '../styles/Size'
import { color, typography } from '../styles/Theme'

const headline = css`
  ${typography.body3};
  color: ${color.text.onSurface.mediumEmphasis};
  &:nth-of-type(n + 2) {
    margin-top: ${getSize(6)};
  }
`

const term = css`
  ${typography.body2};
  display: block;
  margin-top: ${getSize(2)};
`

const list = css`
  ${typography.body2};
  list-style-type: none;
  margin-top: ${getSize(2)};
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const listItem = css`
  margin-right: ${getSize(4)};
  @media (min-width: 769px) {
    &:nth-of-type(n + 2) {
      margin-top: ${getSize(1)};
    }
  }
`

export const WorkTag = ({ start, end, tags, categories, tools, ...props }) => {
  const categoryItems = categories.map((category) => (
    <li key={category} css={listItem}>
      {category}
    </li>
  ))
  const toolItems = tools.map((tool) => (
    <li key={tool} css={listItem}>
      {tool}
    </li>
  ))
  return (
    <div {...props}>
      <h2 css={headline}>期間</h2>
      <span css={term}>
        {start} ~ {end}
      </span>
      {categories.length > 0 && (
        <>
          <h2 css={headline}>担当領域</h2>
          <ul css={list}>{categoryItems}</ul>
        </>
      )}
      {tools.length > 0 && (
        <>
          <h2 css={headline}>使用ツール</h2>
          <ul css={list}>{toolItems}</ul>
        </>
      )}
    </div>
  )
}
