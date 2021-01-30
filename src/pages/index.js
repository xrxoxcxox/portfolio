import React from 'react'

import { Footer } from '../components/Footer'
import { Layout } from '../components/Layout'
import { LinksToWork } from '../components/LinksToWork'
import { Seo } from '../components/Seo'
import { TopTitle } from '../components/TopTitle'
import { FigmaActivity } from '../components/FigmaActivity'

import { css } from '@emotion/react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { getSize } from '../styles/Size'
import { typography } from '../styles/Theme'

const topTitleStyle = css`
  padding: ${getSize(40)} 0;
  @media (max-width: 480px) {
    padding: 20vh 0;
  }
`

const figmaActivityStyle = css`
  margin-top: ${getSize(4)};
`

const headline = css`
  grid-column: 3 / 11;
  ${typography.headline2};
  margin-top: ${getSize(28)};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

const text = css`
  grid-column: 3 / 11;
  margin-top: ${getSize(3)};
  ${typography.body1};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <Seo title='' />
    <Layout>
      <TopTitle css={topTitleStyle} />
      <LinksToWork />
      <h2 css={headline}>Figma Activity</h2>
      <p css={text}>私のFigma上での活動量のグラフ（β版）です。Figma APIからversion historyを取得しています。Figmaは一定時間で自動保存されるため、version historyの数≒活動量であると考えて実装しました。GiHubのContributions Graphと同じような考えで作っています。</p>
      <FigmaActivity css={figmaActivityStyle} />
      <Footer />
    </Layout>
  </>
)
