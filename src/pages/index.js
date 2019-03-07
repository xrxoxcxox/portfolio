import React from "react";
import AdobeFonts from "../components/adobeFonts";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";

import aboutPortfolio from "../images/aboutportfolio.jpg";
import aboutMe from "../images/aboutme.jpg";

import styled from "styled-components";

const AboutPortfolio = styled.div`
  background-image: url(${aboutPortfolio});
  background-size: contain;
  grid-column: span 6;
  height: 37.8rem;
`;

const AboutMe = styled.div`
  background-image: url(${aboutMe});
  background-size: contain;
  grid-column: span 6;
  height: 37.8rem;
`;

export default () => (
  <>
    <AdobeFonts />
    <SEO title="Keisuke Watanuki Portfolio" />
    <Layout>
      <TopTitle />
      <AboutPortfolio />
      <AboutMe />
    </Layout>
  </>
);
