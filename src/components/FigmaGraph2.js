import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { css } from '@emotion/core'
// import Color from '../styles/Color'
import Size from '../styles/Size'
// import Typography from '../styles/Typography'

const root = css`
  display: flex;
  grid-column: span 12;
  height: ${Size(10)};
  list-style: none;
`

// const useProjects = () => {
//   const [projects, setProjects] = useState([])
//   useEffect(() => {
//     const FIGMA_TEAM_ENDPOINT = `https://api.figma.com/v1/teams/681529201922078422/projects`
//     axios
//       .get(FIGMA_TEAM_ENDPOINT, {
//         headers: {
//           'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
//         },
//       })
//       .then((responseProjects) => {
//         setProjects(responseProjects.data.projects)
//       })
//   }, [])
//   return useFiles(projects)
// }

// const useFiles = (projects) => {
//   const [files, setFiles] = useState([])
//   useEffect(() => {
//     projects.forEach((project) => {
//       const FIGMA_PROJECT_ENDPOINT = `https://api.figma.com/v1/projects/${project.id}/files`
//       axios
//         .get(FIGMA_PROJECT_ENDPOINT, {
//           headers: {
//             'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
//           },
//         })
//         .then((responseFiles) => {
//           setFiles((files) => [...files, ...responseFiles.data.files])
//         })
//     })
//   }, [projects])
//   return useVersion(files)
// }

const useVersion = () => {
  const [versions, setVerions] = useState([])
  useEffect(() => {
    const files = [
      'ytX3yZP3v7M3df2CNlM1SM',
      'fEhtHRzGiCDAD7f2JXW9Hmau',
      'S4BeZk9p2DI5C42gSpIM1l',
    ]
    files.forEach((file) => {
      const FIGMA_VERSION_ENDPOINT = `https://api.figma.com/v1/files/${file}/versions`
      axios
        .get(FIGMA_VERSION_ENDPOINT, {
          headers: {
            'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
          },
        })
        .then((responseVersions) => {
          setVerions((versons) => [
            ...versons,
            ...responseVersions.data.versions,
          ])
        })
    })
  }, [])
  return versions.map((version) => version.created_at.slice(0, 10))
}

export default () => {
  const versionsCreatedAt = useVersion()

  const allContributes = {}
  versionsCreatedAt.map(
    (versionCreatedAt) =>
      (allContributes[versionCreatedAt] = allContributes[versionCreatedAt]
        ? allContributes[versionCreatedAt] + 1
        : 1)
  )

  const contributes = Object.entries(allContributes)

  return (
    <>
      <ul css={root}>
        {contributes.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </>
  )
}
