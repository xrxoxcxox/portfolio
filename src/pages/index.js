import React from 'react'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import LinkToTheWork from '../components/LinkToTheWork'
import ReleaseNote from '../components/ReleaseNotes'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'

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

export default () => {
  return (
    <>
      <GlobalStyle />
      <Seo title='' />
      <Layout>
        <TopTitle />
        <LinkToTheWork />
        <h2 css={headline}>リリースノート</h2>
        <ReleaseNote />
        <Footer />
      </Layout>
    </>
  )
}
