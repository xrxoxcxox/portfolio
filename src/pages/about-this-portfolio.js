import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import WorkTitle from "../components/workTitle";
import Image from "../components/image";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const layout = css`
  height: 100vh;
  padding-bottom: 0;
`;

const aboveTheFold = css`
  grid-column: 1 / 13;
  display: grid;
  grid-column-gap: inherit;
  position: relative;
  margin-top: 4rem;
`;

const title = css`
  position: absolute;
  bottom: 4.8rem;
  text-shadow: 0 0 1.2rem rgba(255, 255, 255, 0.4);
`;

const keyVisual = css`
  grid-column: 5 / 13;
  filter: brightness(120%);
`;

export default () => (
  <Layout css={layout}>
    <SEO title="About This Portfolio" />
    <Header />
    <div css={aboveTheFold}>
      <Image filename="about-this-portfolio.jpg" css={keyVisual} />
      <WorkTitle css={title}>
        このポートフォリオを
        <br />
        作った目的
      </WorkTitle>
    </div>
  </Layout>
);
