import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

import styled from "styled-components";

const UnderConstruction = styled.p`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 6rem;
  text-align: center;
  grid-column: span 12;
  align-self: center;
`;

const CustomLayout = styled(Layout)`
  height: 100vh;
  padding-bottom: 0;
`;

export default () => (
  <CustomLayout>
    <SEO title="About this Portfolio" />
    <UnderConstruction>Under Construction...</UnderConstruction>
  </CustomLayout>
);
