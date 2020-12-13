import React from 'react'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import LinksToWork from '../components/LinksToWork'
import ReleaseNote from '../components/ReleaseNotes'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'
import FigmaActivity from '../components/FigmaActivity'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import { getSize } from '../styles/Size'
import { typography } from '../styles/Theme'

const topTitleStyle = css`
  padding: ${getSize(40)} 0;
  @media (max-width: 480px) {
    padding: 20vh 0;
  }
`

const headline = css`
  grid-column: 3 / 11;
  ${typography.headline2};
  margin-top: ${getSize(28)};
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
      <FigmaActivity />
      <h2 css={headline}>リリースノート</h2>
      <ReleaseNote />
      <Footer />
    </Layout>
  </>
)
