import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./store";
import Header from "./components/common/Header/index";
import ProductContainer from "./components/container";
import Cart from "./components/cart/cart";

import "./styles.css";

const RouteMe = () => {
  return (
    <Router history={history}>
      <div class="main-body">
        <Header />
        <Switch>
          <Route exact path="/" component={ProductContainer} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouteMe;
