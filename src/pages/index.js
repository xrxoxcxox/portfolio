import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";

import aboutThisPortfolio from "../images/about-this-portfolio.jpg";
import aboutMe from "../images/about-me.jpg";

import styled, { keyframes } from "styled-components";

const Work = styled.div`
  background-image: url(${props => props.title});
  background-size: contain;
  width: 100%;
  height: 37.8rem;
  cursor: pointer;
`;

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
  animation: ${opacity} 600ms ease-in 850ms backwards;
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
