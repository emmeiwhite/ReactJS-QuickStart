import React, { Fragment } from "react";
// import logo from "./logo.svg";
// react-router-dom
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import MainNavBar from "./components/MainNavBar";
import FactListPage from "./components/FactListPage";
import HelpPage from "./components/HelpPage";
import FactEditPage from "./components/FactEditPage";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <MainNavBar />
        <Route path="/help" component={HelpPage} />
        <Route path="/EditFact/:factId" component={FactEditPage} />
        <Route path="/" exact component={FactListPage} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
