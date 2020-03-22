import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'

const releaseNote = css`
  grid-column: 3 / 11;
  height: ${Size(54)};
  margin-top: ${Size(3)};
  overflow-y: scroll;
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    height: ${Size(60)};
  }
  a {
    color: ${Color.Blue};
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  tbody tr {
    border-top: ${Size(0.25)} solid ${Color.Gray80};
  }
  td {
    padding: ${Size(2)};
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
    render={data => (
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        css={releaseNote}
      />
    )}
  />
)
