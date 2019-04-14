import React from "react";
import { Link } from "gatsby";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const link = css`
  color: ${colors.Blue};
  margin-top: 6.4rem;
  grid-column: 5 / 9;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    grid-column: 2 / -1;
  }
`;

export default () => (
  <Link to="/" css={link}>
    サイトトップへ戻る
  </Link>
);
