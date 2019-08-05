import React from "react";
import hexToRgba from "hex-rgba";

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
  /* filter: brightness(120%); */
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const title = css`
  grid-column: 1 / -1;
  position: absolute;
  bottom: 3.2rem;
  font-size: 6.4rem;
  line-height: 8rem;
  font-weight: bold;
  /* text-shadow: 0 0 1.2rem ${hexToRgba(colors.White, 40)}; */
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    font-size: calc(2rem + 4vw);
    line-height: 1.4;
    margin-top: 0.4rem;
  }
  span {
    padding: 0 1.2rem;
    background-color: ${colors.White};
    @media (max-width: 768px) {
      padding: 0;
      background-color: transparent;
    }
  }
`;

export default ({ image, children }) => (
  <div css={aboveTheFold}>
    <Image filename={image} css={keyVisual} />
    <h1 css={title}>{children}</h1>
  </div>
);
