import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

import styled from "styled-components";
import colors from "../styles/colors.js";

const UnderConstruction = styled.p`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 6rem;
  text-align: center;
  grid-column: span 12;
  align-self: flex-end;
  color: ${colors.Gray};
`;

const CustomLayout = styled(Layout)`
  height: 100vh;
  padding-bottom: 0;
`;

const ToIndex = styled(Link)`
  text-align: center;
  color: ${colors.Blue};
  margin-top: 4rem;
  grid-column: span 12;
  font-size: 1.4rem;
`;

export default () => (
  <CustomLayout>
    <SEO title="About this Portfolio" />
    <UnderConstruction>
      "About This Portfolio" is
      <br />
      Under Construction...
    </UnderConstruction>
    <ToIndex to="/">サイトトップへ戻る</ToIndex>
  </CustomLayout>
);
