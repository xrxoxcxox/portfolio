import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const layout = css`
  height: 100vh;
  padding-bottom: 0;
`;

const text = css`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 6rem;
  text-align: center;
  grid-column: span 12;
  align-self: flex-end;
  color: ${colors.Gray};
`;

const link = css`
  text-align: center;
  color: ${colors.Blue};
  margin-top: 4rem;
  grid-column: 6 / 8;
  font-size: 1.4rem;
  align-self: flex-start;
`;

export default () => (
  <Layout css={layout}>
    <SEO title="About Me" />
    <p css={text}>
      "About Me" is
      <br />
      Under Construction...
    </p>
    <Link to="/" css={link}>
      サイトトップへ戻る
    </Link>
  </Layout>
);
