import React from "react";

import styled from "@emotion/styled";

const Work = styled.div`
  background-image: url(${props => props.title});
  background-size: contain;
  width: 100%;
  height: 37.8rem;
  cursor: pointer;
`;

export default ({ title }) => <Work title={title} />;
