import React from "react";
import styled, { keyframes } from "styled-components";
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

const Container = styled.div`
  grid-column: span 12;
  align-self: center;
`;

const Title = styled.h1`
  display: inline-block;
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 8rem;
  font-feature-settings: "salt";
  margin-left: ${props => (props.WiP ? "1.2rem" : 0)};
  padding-top: 40vh;
  animation: ${titleBlur} ${props => (props.WiP ? "1000ms" : "0")} ease-in-out
      normal,
    ${titleSize} 400ms ease-out 600ms forwards;
`;

const WiP = styled.span`
  display: inline-block;
  color: ${colors.Blue};
`;

const Hide = styled.span`
  display: inline-block;
  white-space: pre;
  animation: ${appear} 1000ms ease-out backwards;
`;

const SubTitle = styled.h2`
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
  <Container>
    <Title>Keisuke</Title>
    <Title WiP>
      <WiP>W</WiP>
      <Hide>atanuk</Hide>
      <WiP>i</WiP>
      <Hide> </Hide>
      <WiP>P</WiP>
      <Hide>ortfolio</Hide>
    </Title>
    <SubTitle>頑張って早く公開します。絶賛製作中。</SubTitle>
  </Container>
);
