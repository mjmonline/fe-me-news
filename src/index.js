import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import * as ducks from "./ducks";
import { reduxFetch } from "./utils";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// ROOT
const rootReducer = combineReducers({
  ...ducks.ui.reducer,
  ...ducks.data.reducer
});

// Stolen from https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxFetch)
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
