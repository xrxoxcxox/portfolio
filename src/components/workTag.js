import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const info = css`
  grid-column: 3 / 5;
  position: absolute;
  p {
    font-size: 1.6rem;
  }
  ul {
    display: block;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${colors.Gray};
    border-left: 0.1rem solid ${colors.Gray};
    margin: 0.4rem 0 0 0;
    padding: 0.4rem 0 0.4rem 1.2rem;
    list-style-type: none;
  }
  @media (max-width: 768px) {
    grid-column: 2 / 4;
  }
  @media (max-width: 414px) {
    grid-column: 1 / -1;
    position: static;
    padding-bottom: 2.4rem;
  }
`;

function Tag({ year, tags }) {
  const tagItems = tags.map(tag => <li key={tag}>{tag}</li>);
  return (
    <div css={info}>
      <p>{year}</p>
      <ul>{tagItems}</ul>
    </div>
  );
}

export default Tag;
