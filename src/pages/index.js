import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";
import Image from "../components/image";

import { css, keyframes } from "@emotion/core";
import colors from "../styles/colors.js";

const opacity = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  50% {
    max-height: 30rem;
  }
  100% {
    opacity: 1;
    max-height: 30rem;
  }
`;

const link = css`
  grid-column: span 6;
  overflow: hidden;
  animation: ${opacity} 400ms ease-out 900ms both;
  position: relative;
  @media (max-width: 414px) {
    :not(:first-of-type) {
      margin-top: 1.2rem;
    }
  }
  :hover {
    transition: all 0.2s ease-in-out;
    div {
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
    color: ${colors.White};
    opacity: 0;
  }
`;

export default () => (
  <Layout>
    <SEO title="Keisuke Watanuki Portfolio" />
    <TopTitle />
    <Link to="/about-this-portfolio" css={link}>
      <Image filename="about-this-portfolio.jpg" />
      <p>このポートフォリオを作った目的</p>
    </Link>
    <Link to="/about-me" css={link}>
      <Image filename="about-me.jpg" />
      <p>綿貫佳祐について</p>
    </Link>
  </Layout>
);
