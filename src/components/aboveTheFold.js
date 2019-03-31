import React from "react";
import hexToRgba from "hex-rgba";

import WorkTitle from "../components/workTitle";
import Image from "../components/image";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const aboveTheFold = css`
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(12, 6.4rem);
  grid-column-gap: inherit;
  position: relative;
  margin-top: 4rem;
`;

const keyVisual = css`
  grid-column: 5 / 13;
  filter: brightness(120%);
`;

const title = css`
  position: absolute;
  bottom: 4.8rem;
  text-shadow: 0 0 1.2rem ${hexToRgba(colors.White, 40)};
`;

export default ({ image, children }) => (
  <div css={aboveTheFold}>
    <Image filename={image} css={keyVisual} />
    <WorkTitle css={title}>{children}</WorkTitle>
  </div>
);
