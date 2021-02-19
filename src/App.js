import React from "react";
import "./App.css";
//UI components
import SearchFilter from "./components/SearchFilter";
import Card from "./components/Card";

const App = () => {
  return (
    <main>
      <SearchFilter />
      <Card />
    </main>
  );
};

export default App;
