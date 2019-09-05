import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MainNavBar from "./components/MainNavBar";
import FactListPage from "./components/FactListPage";

function App() {
  return (
    <div>
      <MainNavBar />
      <FactListPage limit={2} />
    </div>
  );
}

export default App;
