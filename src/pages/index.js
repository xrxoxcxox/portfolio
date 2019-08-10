import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import TopTitle from '../components/topTitle'
import Footer from '../components/footer'
import Image from '../components/image'

import { css, keyframes } from '@emotion/core'
import { GlobalStyle } from '../styles/GlobalStyle'
import Colors from '../styles/Colors'

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const link = css`
  grid-column: span 6;
  position: relative;
  animation: ${opacity} 400ms ease-out 400ms both;
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    :not(:first-of-type) {
      margin-top: 1.2rem;
    }
  }
  :hover,
  :active {
    transition: all 0.2s ease-in-out;
    .gatsby-image-wrapper {
      /* Imageコンポーネントにクラス名などが渡せないためここで指定 */
      filter: brightness(40%);
      transition: all 0.2s ease-in-out;
    }
    p {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
  p {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
    font-size: 2.4rem;
    color: ${Colors.White};
    opacity: 0;
  }
`

const footer = css`
  margin-top: 8rem;
`

export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title='' />
      <TopTitle />
      <Link to='/about-this-portfolio' css={link}>
        <Image
          filename='about_this_portfolio.jpg'
          alt='ポートフォリオを作っている最中'
        />
        <p>ポートフォリオについて</p>
      </Link>
      <Link to='/about-me' css={link}>
        <Image filename='about_me.jpg' alt='綿貫佳祐' />
        <p>綿貫佳祐について</p>
      </Link>
      <Footer css={footer} />
    </Layout>
  </>
)
