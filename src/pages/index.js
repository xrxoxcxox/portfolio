import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";

import aboutThisPortfolio from "../images/aboutportfolio.jpg";
import aboutMe from "../images/aboutme.jpg";

import styled from "styled-components";

const Work = styled.div`
  background-image: url(${props => props.title});
  background-size: contain;
  grid-column: span 6;
  height: 37.8rem;
`;

export default () => (
  <Layout>
    <SEO title="Keisuke Watanuki Portfolio" />
    <TopTitle />
    <Work title={aboutThisPortfolio} />
    <Work title={aboutMe} />
  </Layout>
);
