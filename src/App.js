import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Page,
  Header,
  Content,
  Footer,
  NewsItem,
  PageNewsList
} from "./components";

// <Route path="/item/:itemId" component={NewsItem} />;

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={PageNewsList} />
              <Route
                path="/item/:itemId"
                render={({ match }) => (
                  <NewsItem id={parseInt(match.params.itemId, 10)} />
                )}
              />
            </Switch>
          </Content>
          <Footer />
        </Page>
      </Router>
    );
  }
}

export default App;
