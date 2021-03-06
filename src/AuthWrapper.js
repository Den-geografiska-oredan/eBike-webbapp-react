import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { withCookies } from "react-cookie";

import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";
// import Rent from './components/Rent/Rent';
// import HomePage from './components/HomePage/HomePage/HomePage';
// import BikeActive from './components/BikeActive/BikeActive';
import Rent from "@/pages/Rent/Rent";
import HomePage from "@/pages/HomePage/HomePage";
import BikeActive from "@/pages/BikeActive/BikeActive";

// import "./App.css";
import App from "./App";

const AuthWrapper = (props) => {
  const root = useSelector((state) => state.root);

  return (
    <>
      <Switch>
        <Route path="/" render={() => <App cookies={props.cookies} />} />
      </Switch>
    </>
  );
};

export default withCookies(AuthWrapper);
