import React from 'react'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import LinksToTheWork from '../components/LinksToTheWork'
import ReleaseNote from '../components/ReleaseNotes'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'
import FigmaGraph from '../components/FigmaGraph'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const headline = css`
  grid-column: 3 / 11;
  ${Typography.Headline2};
  margin-top: ${Size(28)};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <Seo title='' />
    <Layout>
      <TopTitle />
      <LinksToTheWork />
      <FigmaGraph />
      <h2 css={headline}>リリースノート</h2>
      <ReleaseNote />
      <Footer />
    </Layout>
  </>
)
