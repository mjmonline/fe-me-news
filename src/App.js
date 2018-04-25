import React, { Component } from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Content />
        <Footer />
      </Page>
    );
  }
}

export default App;
