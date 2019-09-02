import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainNavBar from "./components/MainNavBar";
import ListFacts from "./components/ListFacts";

function App() {
  return (
    <div>
      <MainNavBar />
      <ListFacts />
    </div>
  );
}

export default App;
