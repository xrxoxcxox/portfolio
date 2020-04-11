import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const headline = css`
  grid-column: 3 / 11;
  margin-top: ${Size(28)};
  ${Typography.Headline2};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

const text = css`
  grid-column: 3 / 11;
  margin-top: ${Size(3)};
  ${Typography.Body1};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

const root = css`
  align-items: flex-end;
  border-bottom: ${Size(0.25)} solid ${Color.Gray20};
  border-top: ${Size(0.25)} solid ${Color.Gray20};
  display: flex;
  grid-column: span 12;
  height: ${Size(48)};
  justify-content: space-between;
  list-style: none;
  margin-top: ${Size(3)};
`

const Chart = styled.li`
  background-color: ${Color.Gray50};
  flex-grow: 1;
  height: calc(${(props) => props.percentage} * 95%);
  margin: 0 ${Size(0.25)};
  position: relative;
  &:hover {
    background-color: ${Color.Blue};
    transition: all 100ms ease-in-out;
    &::before {
      bottom: -2em;
      content: '${(props) => props.date}';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      white-space: nowrap;
      z-index: 1;
      ${Typography.Body3};
    }
    &::after {
      bottom: -3.2em;
      content: '${(props) => props.value}';
      font-weight: 600;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      white-space: nowrap;
      z-index: 1;
      ${Typography.Body3};
    }
  }
`

// TODO team_idの指定だけで全ファイルの活動履歴を取得して、APIへのリクエストも走りすぎないようにする

// const useProjects = () => {
//   const [projects, setProjects] = useState([])
//   useEffect(() => {
//     const FIGMA_TEAM_ENDPOINT = `https://api.figma.com/v1/teams/681529201922078422/projects`
//     axios
//       .get(FIGMA_TEAM_ENDPOINT, {
//         headers: {
//           'X-FIGMA-TOKEN': 'process.env.GATSBY_FIGMA_TOKEN',
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
//             'X-FIGMA-TOKEN': 'process.env.GATSBY_FIGMA_TOKEN',
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
    const files = process.env.GATSBY_FIGMA_FILE_KEYS.split(',')
    files.forEach((file) => {
      const FIGMA_VERSION_ENDPOINT = `https://api.figma.com/v1/files/${file}/versions`
      axios
        .get(FIGMA_VERSION_ENDPOINT, {
          headers: {
            'X-FIGMA-TOKEN': process.env.GATSBY_FIGMA_TOKEN,
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

  const allContributes = []
  versionsCreatedAt.map(
    (versionCreatedAt) =>
      (allContributes[versionCreatedAt] = allContributes[versionCreatedAt]
        ? allContributes[versionCreatedAt] + 1
        : 1)
  )

  const contributes = Object.entries(allContributes).sort()
  const counter = []
  contributes.map(([_, value]) => counter.push(value)).slice(0, 100)
  const max = Math.max(...counter)

  return (
    <>
      <h2 css={headline}>Figma Activity</h2>
      <p css={text}>
        私のFigma上での活動量のグラフ（β版）です。Figma APIからversion
        historyを取得しています。Figmaは一定時間で自動保存されるため、version
        historyの数≒活動量であると考えて実装しました。GiHubのContributions
        Graphと同じような考えで作っています。
      </p>
      <ul css={root}>
        {contributes.slice(0, 100).map(([key, value]) => (
          <Chart
            key={key}
            value={value}
            max={max}
            percentage={value / max}
            date={key}
          ></Chart>
        ))}
      </ul>
    </>
  )
}
