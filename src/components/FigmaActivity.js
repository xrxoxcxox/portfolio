import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Color from '../styles/Color'
import { getSize } from '../styles/Size'
import hexToRgba from 'hex-rgba'
import { typography } from '../styles/Theme'

const headline = css`
  grid-column: 3 / 11;
  margin-top: ${Size(28)};
  ${typography.headline2};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

const text = css`
  grid-column: 3 / 11;
  margin-top: ${Size(3)};
  ${typography.body1};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

const wrap = css`
  display: flex;
  justify-content: center;
  grid-column: span 12;
  margin-top: ${Size(4)};
  @media (max-width: 848px) {
    grid-column: 1 / -1;
    overflow: scroll;
  }
`

const root = css`
  align-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${Size(28.5)};
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  @media (max-width: 848px) {
    align-content: flex-start;
  }
`

const Chart = styled.li`
  background-color: ${(props) => (props.value ? hexToRgba(Color.Blue, (props.value / props.max) * 100) : Color.White)};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: ${Size(0.5)};
  height: ${Size(3)};
  margin: ${Size(0.5)};
  position: relative;
  width: ${Size(3)};
`

const ChartText = styled.span`
  display: none;
  ${Chart}:hover & {
    background-color: ${hexToRgba(Color.Black, 80)};
    border-radius: ${Size(1)};
    display: flex;
    left: 50%;
    padding: ${Size(2)} ${Size(4)};
    position: absolute;
    top: ${Size(-12)};
    transform: translateX(-50%);
    z-index: 1;
    ${typography.body3};
    &::after {
      border-left: ${Size(2.5)} solid transparent;
      border-right: ${Size(2.5)} solid transparent;
      border-top: ${Size(2)} solid ${hexToRgba(Color.Black, 80)};
      bottom: ${Size(-2)};
      content: '';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }
`

const chartValue = css`
  color: ${Color.White};
  font-weight: 600;
  white-space: nowrap;
`

const chartDate = css`
  color: ${hexToRgba(Color.White, 60)};
  margin-left: ${Size(2)};
  white-space: nowrap;
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
  const versionsCreatedAt = contents.flat().map(
    (content) => content.created_at.slice(0, 10) //先頭から10文字を取得することで「時間」を切り捨てて1日ずつのデータにしている
  )
  // data.allFigma.nodes より下のデータが何故か配列が何度も入れ子になっているのでflat()などを使って取り出している

  const days = 365
  const today = new Date()
  const period = [...Array(days)].map(() => new Intl.DateTimeFormat('sv-SE', { timeZone: 'UTC' }).format(today.setDate(today.getDate() - 1)))
  // yyyy-mm-dd形式にできるのが'sv-SE'という形式だったのでIntl.DateTimeFormatでは'ja-JP'ではなく'sv-SE'を使う

  const concatedversionsCreatedAt = period.concat(versionsCreatedAt)
  // versionsCreatedAtにはversion historyが記録されている日だけが格納されているので、periodと合成して全ての日のリストを作成する

  const allContributes = []
  concatedversionsCreatedAt.map((versionCreatedAt) => (allContributes[versionCreatedAt] = allContributes[versionCreatedAt] ? allContributes[versionCreatedAt] + 1 : 1))
  // 日毎の、1回以上version historyを記録した回数の配列

  const contributes = Object.entries(allContributes).sort().slice(-days)
  // 日付が昇順にも降順にもなっていないのでソートした後スライス

  const counter = []
  contributes.map(([_, value]) => counter.push(value - 1))
  const max = Math.max(...counter)
  // contributesからスコアだけ抜き出した配列を作った後、最大値を取得

  const charts = contributes.map(([key, value]) => (
    <Chart key={key} value={value - 1} max={max}>
      <ChartText>
        <span css={chartValue}>
          {value - 1} {value <= 1 ? 'contribution' : 'contributions'}
        </span>
        <span css={chartDate}>on {key}</span>
      </ChartText>
    </Chart>
  ))

  return (
    <>
      <h2 css={headline}>Figma Activity</h2>
      <p css={text}>私のFigma上での活動量のグラフ（β版）です。Figma APIからversion historyを取得しています。Figmaは一定時間で自動保存されるため、version historyの数≒活動量であると考えて実装しました。GiHubのContributions Graphと同じような考えで作っています。</p>
      <div css={wrap}>
        <ol css={root}>{charts}</ol>
      </div>
    </>
  )
}
