import React from "react";
import "./App.css";
//UI components
import SearchFilter from "./components/SearchFilter";
import Card from "./components/Card";

const App = () => {
  return (
    <main>
      <SearchFilter />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default App;
