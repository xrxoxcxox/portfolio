import React from 'react'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Colors from '../styles/Colors.js'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const container = css`
  grid-column: 1 / -1;
`

const title = css`
  ${Typography.Title};
  font-weight: 900;
  margin-top: ${Size(30)};
`

const body = css`
  ${Typography.Body};
  margin-top: ${Size(6)};
`

const link = css`
  display: inline-block;
  color: ${Colors.White};
  background-color: ${Colors.Blue};
  font-weight: 500;
  text-decoration: none;
  border-radius: ${Size(1)};
  box-shadow: 0 ${Size(0.5)} ${Size(2)} ${hexToRgba(Colors.Black, 16)};
  margin-top: ${Size(12)};
  padding: ${Size(3)};
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
        <Link to='/' css={link}>
          サイトトップへ戻る
        </Link>
      </div>
      <Footer />
    </Layout>
  </>
)

export default NotFoundPage
