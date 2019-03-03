import React from "react";
import Helmet from "react-helmet";
import styled, { keyframes } from "styled-components";
import colors from "../styles/colors.js";
import SEO from "../components/seo";

const contrast = keyframes`
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

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 103.2rem;
  padding: 0 2.4rem;
  height: 100vh;
  margin: auto;
`;

const Title = styled.h1`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: calc(2rem + 2vw);
  line-height: 1;
  margin-left: ${props => (props.WiP ? "calc(0.4rem + 0.8vw)" : 0)};
  animation: ${contrast} ${props => (props.WiP ? "2000ms" : "0")} ease-in-out
    normal;
`;

const WiP = styled.span`
  color: ${colors.Blue};
`;

export default class IndexPage extends React.Component {
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
    }, 1825);
  }
  render() {
    return (
      <>
        <Helmet>
          <script>
            {`
          (function(d) {
            var config = {
              kitId: 'wyq3rwo',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `}
          </script>
        </Helmet>
        <Container>
          <SEO title="Keisuke WiP" />
          <Title>Keisuke</Title>
          <Title WiP>
            <WiP>W</WiP>
            {this.state.atanuk}
            <WiP>i</WiP>
            {this.state.space}
            <WiP>P</WiP>
            {this.state.ortfolio}
          </Title>
        </Container>
      </>
    );
  }
}
