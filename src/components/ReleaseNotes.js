import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

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
    color: ${color.blue[60]};
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  tbody tr {
    border-top: ${getSize(0.25)} solid ${color.divider.onSurface};
  }
  td {
    padding: ${getSize(2)};
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/release-notes/" }) {
        html
      }
    }
  `)
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} css={releaseNote} />
}
