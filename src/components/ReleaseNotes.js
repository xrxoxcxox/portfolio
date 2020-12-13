import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import { getSize } from '../styles/Size'

const releaseNote = css`
  grid-column: 3 / 11;
  height: ${getSize(54)};
  margin-top: ${getSize(3)};
  overflow-y: scroll;
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    height: ${getSize(60)};
  }
  a {
    color: ${Color.Blue};
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  tbody tr {
    border-top: ${getSize(0.25)} solid ${Color.Gray80};
  }
  td {
    padding: ${getSize(2)};
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/release-notes/" }) {
          html
        }
      }
    `}
    render={(data) => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} css={releaseNote} />}
  />
)
