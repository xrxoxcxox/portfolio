import React from "react";
// eslint-disable-next-line
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";

import { css } from "@emotion/core";
// eslint-disable-next-line
import colors from "../styles/colors.js";

const layout = css`
  min-height: 100vh;
  padding-bottom: 12rem;
`;

export default () => (
  <Layout css={layout}>
    <SEO title="About Me" />
    <Header />
    <AboveTheFold image="about-me.jpg">綿貫佳祐について</AboveTheFold>
  </Layout>
);
