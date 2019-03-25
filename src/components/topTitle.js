import React from "react";

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

const titleSize = keyframes`
  0% {
    padding-top: 40vh;
  }
  100% {
    padding-top: 16rem;
  }
`;

const subtitleSize = keyframes`
  0% {
    padding-bottom: 40vh;
  }
  100% {
    padding-bottom: 16rem;
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
  grid-column: span 12;
  align-self: center;
`;

const title = css`
  display: inline-block;
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 8rem;
  font-feature-settings: "salt";
  padding-top: 40vh;
  animation: ${titleSize} 400ms ease-out 600ms forwards;
`;

const titleWip = css`
  ${title}
  margin-left: 1.2rem;
  animation: ${titleBlur} 1000ms ease-in-out normal,
    ${titleSize} 400ms ease-out 600ms forwards;
`;

const wip = css`
  display: inline-block;
  color: ${colors.Blue};
`;

const hide = css`
  display: inline-block;
  white-space: pre;
  animation: ${appear} 1000ms ease-out backwards;
`;

const subTitle = css`
  grid-column: span 12;
  font-family: source-han-sans-japanese, sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  font-feature-settings: "palt";
  letter-spacing: 0.02em;
  padding-bottom: 40vh;
  animation: ${subtitleSize} 300ms ease-out 600ms forwards;
`;

export default () => (
  <div css={container}>
    <h1 css={title}>Keisuke</h1>
    <h1 css={titleWip}>
      <span css={wip}>W</span>
      <span css={hide}>atanuk</span>
      <span css={wip}>i</span>
      <span css={hide}> </span>
      <span css={wip}>P</span>
      <span css={hide}>ortfolio</span>
    </h1>
    <h2 css={subTitle}>頑張って早く公開します。絶賛製作中。</h2>
  </div>
);
