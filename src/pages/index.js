import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";
import Work from "../components/work";

import { css, keyframes } from "@emotion/core";

import aboutThisPortfolio from "../images/about-this-portfolio.jpg";
import aboutMe from "../images/about-me.jpg";

const opacity = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  50% {
    max-height: 37.8rem;
  }
  100% {
    opacity: 1;
    max-height: 37.8rem;
  }
`;

const link = css`
  grid-column: span 6;
  overflow-y: hidden;
  animation: ${opacity} 400ms ease-out 800ms backwards;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.16);
    transform: translateY(-0.2rem);
  }
`;

export default () => (
  <Layout>
    <SEO title="Keisuke Watanuki Portfolio" />
    <TopTitle />
    <Link to="/about-this-portfolio" css={link}>
      <Work title={aboutThisPortfolio} />
    </Link>
    <Link to="/about-me" css={link}>
      <Work title={aboutMe} />
    </Link>
  </Layout>
);
