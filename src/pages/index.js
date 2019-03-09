import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";
import Work from "../components/work";

import styled, { keyframes } from "styled-components";

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

const LinkBlock = styled(Link)`
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
    <LinkBlock to="/about-this-portfolio">
      <Work title={aboutThisPortfolio} />
    </LinkBlock>
    <LinkBlock to="/about-me">
      <Work title={aboutMe} />
    </LinkBlock>
  </Layout>
);
