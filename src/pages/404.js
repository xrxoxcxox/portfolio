import React from 'react'

import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { css } from '@emotion/core'
import { GlobalStyle } from '../styles/GlobalStyle'
import { getSize } from '../styles/Size'
import { typography } from '../styles/Theme'

const container = css`
  grid-column: 1 / -1;
`

const title = css`
  ${typography.title};
  margin-top: ${getSize(30)};
`

const body = css`
  margin-top: ${getSize(6)};
`

const button = css`
  margin-top: ${getSize(12)};
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: calc(100% - ${getSize(8)});
  }
`

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Seo title='404: Not found' />
    <Layout>
      <div css={container}>
        <Header />
        <h1 css={title}>
          お探しのページは
          <br />
          見つかりませんでした
        </h1>
        <p css={body}>
          ページが移動、または削除されてしまったかもしれません。
          <br />
          再度URLをご確認ください。
        </p>
        <Button to='/' css={button}>
          ポートフォリオのトップへ戻る
        </Button>
      </div>
      <Footer />
    </Layout>
  </>
)

export default NotFoundPage
