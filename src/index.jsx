import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import RouteMe from "./routes";

render(
  <Provider store={store}>
    <RouteMe />
  </Provider>,
  document.getElementById("root")
);
