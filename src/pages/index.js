import React from "react";
import AdobeFonts from "../components/adobeFonts";
import SEO from "../components/seo";
import TopTitle from "../components/topTitle";

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <AdobeFonts />
        <SEO title="Keisuke Watanuki Portfolio" />
        <TopTitle />
      </>
    );
  }
}
