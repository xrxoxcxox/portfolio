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
  height: 720px;
`

const useFilesList = (fileKey) => {
  const [versions, setVerions] = useState([])
  useEffect(() => {
    const FIGMA_VERSIONS_ENDPOINT = `https://api.figma.com/v1/files/${fileKey}/versions`
    axios
      .get(FIGMA_VERSIONS_ENDPOINT, {
        headers: {
          'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
        },
      })
      .then((response) => {
        setVerions(response.data.versions)
      })
  }, [fileKey])
  const createdAtArray = versions.map((version) =>
    version.created_at.slice(0, 10)
  )
  return createdAtArray
}

const filesArray = (fileKeys) => {
  const allFilesList = fileKeys.map((fileKey) => useFilesList(fileKey))
  return Array.prototype.concat.apply([], allFilesList)
}

export default () => {
  const filesList = filesArray([
    'S4BeZk9p2DI5C42gSpIM1l',
    'fEhtHRzGiCDAD7f2JXW9Hmau',
  ])

  const now = new Date()
  const days = [...Array(100)].map((_, i) =>
    new Intl.DateTimeFormat('sv-SE', {
      dateStyle: 'short',
    }).format(now - i * 86400000)
  )

  const concatedArray = days.concat(filesList)
  const contributes = {}
  concatedArray.map(
    (createdAt) =>
      (contributes[createdAt] = contributes[createdAt]
        ? contributes[createdAt] + 1
        : 1)
  )

  return (
    <>
      <ul css={root}>
        {Object.entries(contributes).map(([key, value]) => (
          <li key={key}>
            {key}: {value - 1}
          </li>
        ))}
      </ul>
    </>
  )
}

// const FileList = (id) => {
//   const [file, setFile] = useState([])
//   const FIGMA_PROJECTS_ENDPOINT = 'https://api.figma.com/v1/projects'
//   useEffect(() => {
//     axios
//       .get(`${FIGMA_PROJECTS_ENDPOINT}/${id.id}/files`, {
//         headers: {
//           'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
//         },
//       })
//       .then((response) => {
//         setFile(response.data.files)
//       })
//   }, [])
//   return (
//     <>
//       <ul key={id.id}>
//         {file.map((item) => (
//           <>
//             <li key={item.key}>{item.name}</li>
//           </>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default () => {
//   const [project, setProject] = useState([])
//   const FIGMA_TEAMS_ENDPOINT =
//     'https://api.figma.com/v1/teams/681529201922078422/projects'
//   useEffect(() => {
//     axios
//       .get(FIGMA_TEAMS_ENDPOINT, {
//         headers: {
//           'X-FIGMA-TOKEN': '40392-21150d59-5fb8-4040-95ef-76e5c2100b59',
//         },
//       })
//       .then((response) => {
//         setProject(response.data.projects)
//       })
//   }, [])
//   return (
//     <>
//       <ul css={root}>
//         {project.map((item) => (
//           <>
//             <li key={item.id}>{item.name}</li>
//             <FileList id={item.id} />
//           </>
//         ))}
//       </ul>
//     </>
//   )
// }
