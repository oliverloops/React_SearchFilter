import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import "./App.css";
//UI components
import SearchFilter from "./components/SearchFilter";
import Card from "./components/Card";

const Header = () => (
  <header>
    <GiMaterialsScience size={50} />
  </header>
);

const Footer = () => (
  <footer>
    <small>The Science Search Filter ©2021</small>
  </footer>
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SearchFilter />
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
