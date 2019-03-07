import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../styles/colors.js";

const titleBlur = keyframes`
  0% {
    filter: blur(0) contrast(1);
  }
  60% {
    filter: blur(0) contrast(1);
  }
  90% {
    filter: blur(4rem) contrast(2);
  }
  100% {
    filter: blur(0) contrast(1);
  }
`;

const titleSize = keyframes`
  0% {
    font-size: 8rem;
    padding-top: 40vh;
  }
  100% {
    font-size: 4.8rem;
    padding-top: 16rem;
  }
`;

const subtitleSize = keyframes`
  0% {
    font-size: 2.4rem;
    padding-bottom: 40vh;
  }
  100% {
    font-size: 2rem;
    padding-bottom: 16rem;
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
  animation: ${titleBlur} ${props => (props.WiP ? "4000ms" : "0")} ease-in-out
      normal,
    ${titleSize} 400ms ease-out 4400ms forwards;
`;

const WiP = styled.span`
  color: ${colors.Blue};
`;

const SubTitle = styled.h2`
  grid-column: span 12;
  font-family: source-han-sans-japanese, sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  font-feature-settings: "palt";
  letter-spacing: 0.02em;
  padding-bottom: 40vh;
  animation: ${subtitleSize} 300ms ease-out 4400ms forwards;
`;

export default class TopTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atanuk: "",
      space: "",
      ortfolio: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ atanuk: "atanuk", space: " ", ortfolio: "ortfolio" });
    }, 3700);
  }
  render() {
    return (
      <Container>
        <Title>Keisuke</Title>
        <Title WiP>
          <WiP>W</WiP>
          {this.state.atanuk}
          <WiP>i</WiP>
          {this.state.space}
          <WiP>P</WiP>
          {this.state.ortfolio}
        </Title>
        <SubTitle>頑張って早く公開します。絶賛製作中。</SubTitle>
      </Container>
    );
  }
}
