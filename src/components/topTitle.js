import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { css, keyframes } from "@emotion/core";
import colors from "../styles/colors.js";

const titleBlur = keyframes`
  0% {
    filter: blur(0) contrast(1);
  }
  30% {
    filter: blur(0) contrast(1);
  }
  50% {
    filter: blur(4rem) contrast(2);
  }
  85% {
    filter: blur(0) contrast(1);
  }
`;

const appear = keyframes`
0% {
  clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  max-width: 0%;
}
45% {
  clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  max-width: 0%;
}
85% {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  max-width: 100%;
}
`;

const container = css`
  grid-column: 1 / -1;
  margin: 16rem 0;
  @media (max-width: 480px) {
    margin: 20vh 0;
  }
`;

const title = css`
  display: inline-block;
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: calc(2rem + 4vw);
  font-feature-settings: "salt";
  white-space: pre-wrap;
`;

const titleWip = css`
  ${title}
  animation: ${titleBlur} 600ms ease-out 200ms normal;
`;

const wip = css`
  display: inline-block;
  color: ${colors.Blue};
`;

const hide = css`
  display: inline-block;
  white-space: pre;
  animation: ${appear} 600ms ease-out 200ms backwards;
`;

const subTitle = css`
  grid-column: span 12;
  font-weight: 400;
  font-size: calc(1.2rem + 1vw);
  font-feature-settings: "palt";
  letter-spacing: 0.02em;
`;

const TopTitle = ({ data }) => (
  <div css={container}>
    <h1 css={title}>Keisuke </h1>
    <h1 css={titleWip}>
      <span css={wip}>W</span>
      <span css={hide}>atanuk</span>
      <span css={wip}>i</span>
      <span css={hide}> </span>
      <span css={wip}>P</span>
      <span css={hide}>ortfolio</span>
    </h1>
    <h2 css={subTitle}>{data.site.siteMetadata.description}</h2>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => <TopTitle data={data} {...props} />}
  />
);
