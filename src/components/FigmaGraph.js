import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { css } from '@emotion/core'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  grid-column: 1 / -1;
`

export default () => {
  const [data, setData] = useState([])
  const FIGMA_ENDPOINT =
    'https://api.figma.com/v1/teams/681529201922078422/projects'
  useEffect(() => {
    axios
      .get(FIGMA_ENDPOINT, {
        headers: {
          'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
        },
      })
      .then((response) => {
        setData(response.data.projects)
      })
  }, [])
  return (
    <>
      <ul css={root}>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
