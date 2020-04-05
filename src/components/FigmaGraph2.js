import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { css } from '@emotion/core'
// import Color from '../styles/Color'
// import Size from '../styles/Size'
// import Typography from '../styles/Typography'

const root = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  grid-column: span 12;
  height: 400px;
  line-height: 2;
`

const useProjects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const FIGMA_TEAM_ENDPOINT = `https://api.figma.com/v1/teams/681529201922078422/projects`
    axios
      .get(FIGMA_TEAM_ENDPOINT, {
        headers: {
          'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
        },
      })
      .then((responseProjects) => {
        setProjects(responseProjects.data.projects)
        console.log(projects)
      })
  }, [])
  return useFiles(projects)
}

const useFiles = (projects) => {
  const [files, setFiles] = useState([])
  useEffect(() => {
    projects.forEach((project) => {
      const FIGMA_PROJECT_ENDPOINT = `https://api.figma.com/v1/projects/${project.id}/files`
      axios
        .get(FIGMA_PROJECT_ENDPOINT, {
          headers: {
            'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
          },
        })
        .then((responseFiles) => {
          setFiles((files) => [...files, ...responseFiles.data.files])
        })
    })
  }, [projects])
  return files
}

export default () => {
  const items = useProjects()
  return (
    <>
      <ul css={root}>
        {items.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
