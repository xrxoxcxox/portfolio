import React from "react";
import hexToRgba from "hex-rgba";

import WorkTitle from "../components/workTitle";
import Image from "../components/image";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const aboveTheFold = css`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: inherit;
  position: relative;
  margin-top: 4rem;
  @media (max-width: 768px) {
    margin-top: 2.4rem;
  }
`;

const keyVisual = css`
  grid-column: 5 / -1;
  filter: brightness(120%);
  @media (max-width: 768px) {
    grid-column: 2 / -1;
  }
  @media (max-width: 414px) {
    grid-column: 1 / -1;
  }
`;

const title = css`
  position: absolute;
  bottom: 4.8rem;
  text-shadow: 0 0 1.2rem ${hexToRgba(colors.White, 40)};
  @media (max-width: 768px) {
    bottom: 0.6em;
  }
  @media (max-width: 414px) {
    position: static;
    margin-top: 0.4rem;
  }
`;

export default ({ image, children }) => (
  <div css={aboveTheFold}>
    <Image filename={image} css={keyVisual} />
    <WorkTitle css={title}>{children}</WorkTitle>
  </div>
);
