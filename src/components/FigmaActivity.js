import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

export default () => {
  const data = useStaticQuery(graphql`
    {
      allFigma {
        nodes {
          content {
            created_at
          }
        }
      }
    }
  `)

  const contents = data.allFigma.nodes[0].content
  const versionsCreatedAt = contents.flat().map(content => (
    content.created_at.slice(0, 10) //先頭から10文字を取得することで「時間」を切り捨てて1日ずつのデータにしている
  ))
  // data.allFigma.nodes より下のデータが何故か配列が何度も入れ子になっているのでflat()などを使って取り出している

  const allContributes = []
  versionsCreatedAt.map((versionCreatedAt) => versionCreatedAt !== undefined && (allContributes[versionCreatedAt] = allContributes[versionCreatedAt] ? allContributes[versionCreatedAt] + 1 : 1))

  const contributes = Object.entries(allContributes).sort()
  const counter = []
  contributes.map(([_, value]) => counter.push(value)).slice(-100)
  const max = Math.max(...counter)

  return (
    <>
      <h2 css={headline}>Figma Activity</h2>
      <p css={text}>私のFigma上での活動量のグラフ（β版）です。Figma APIからversion historyを取得しています。Figmaは一定時間で自動保存されるため、version historyの数≒活動量であると考えて実装しました。GiHubのContributions Graphと同じような考えで作っています。</p>
      <ul css={root}>
        {contributes.slice(-100).map(([key, value]) => (
          <Chart key={key} value={value} max={max} percentage={value / max} date={key}></Chart>
        ))}
      </ul>
    </>
  )
}
