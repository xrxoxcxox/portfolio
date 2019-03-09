import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";

import aboutThisPortfolio from "../images/about-this-portfolio.jpg";
import aboutMe from "../images/about-me.jpg";

import styled from "styled-components";

const Work = styled.div`
  background-image: url(${props => props.title});
  background-size: contain;
  width: 100%;
  height: 37.8rem;
  cursor: pointer;
`;

const LinkBlock = styled(Link)`
  grid-column: span 6;
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
