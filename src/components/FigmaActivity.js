import React, { useState, useEffect } from 'react'

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
      bottom: ${Size(-6)};
      content: '${(props) => props.value} ${(props) => (props.value === 1 ? 'contribution' : 'contributions')}';
      font-weight: 600;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      white-space: nowrap;
      z-index: 1;
      ${Typography.Body3};
    }
    &::after {
      bottom: ${Size(-10)};
      content: 'on ${(props) => props.date}';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      white-space: nowrap;
      z-index: 1;
      ${Typography.Body3};
    }
  }
`

const useVersions = () => {
  const [versions, setVerions] = useState([])
  useEffect(() => {
    const token = { 'X-FIGMA-TOKEN': process.env.GATSBY_FIGMA_TOKEN }
    const getProject = async () => {
      const response = await fetch(`https://api.figma.com/v1/teams/${process.env.GATSBY_FIGMA_TEAM_ID}/projects`, { headers: token })
      const result = await response.json()
      const projects = await result.projects
      getFiles(projects)
    }
    const getFiles = (projects) => {
      projects.map(async (project) => {
        const response = await fetch(`https://api.figma.com/v1/projects/${project.id}/files`, { headers: token })
        const result = await response.json()
        const files = await result.files
        getVersions(files)
      })
    }
    const getVersions = (files) => {
      files.map(async (file) => {
        const response = await fetch(`https://api.figma.com/v1/files/${file.key}/versions`, { headers: token })
        const result = await response.json()
        setVerions((version) => [...version, ...result.versions])
      })
    }
    getProject()
  }, [])
  return versions.map((version) => version.created_at.slice(0, 10))
}

export default () => {
  const versionsCreatedAt = useVersions()

  const allContributes = []
  versionsCreatedAt.map((versionCreatedAt) => (allContributes[versionCreatedAt] = allContributes[versionCreatedAt] ? allContributes[versionCreatedAt] + 1 : 1))

  const contributes = Object.entries(allContributes).sort()
  const counter = []
  contributes.map(([_, value]) => counter.push(value)).slice(0, 100)
  const max = Math.max(...counter)

  return (
    <>
      <h2 css={headline}>Figma Activity</h2>
      <p css={text}>私のFigma上での活動量のグラフ（β版）です。Figma APIからversion historyを取得しています。Figmaは一定時間で自動保存されるため、version historyの数≒活動量であると考えて実装しました。GiHubのContributions Graphと同じような考えで作っています。</p>
      <ul css={root}>
        {contributes.slice(0, 100).map(([key, value]) => (
          <Chart key={key} value={value} max={max} percentage={value / max} date={key}></Chart>
        ))}
      </ul>
    </>
  )
}
