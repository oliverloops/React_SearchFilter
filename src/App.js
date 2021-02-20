import React, { useState, useEffect } from "react";
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
  const [storedItems, setStoredItems] = useState([]);

  const getField = (e) => {
    console.log(e.target.value.toLowerCase());
  };

  //API KEY: tJXFaU9v7qQ4aQgAbMna0qLLDxinIbjUesY3oULu

  // HTTP Request to NASA API
  async function getData() {
    await fetch(
      "https://api.nasa.gov/techtransfer/patent/?engine&api_key=tJXFaU9v7qQ4aQgAbMna0qLLDxinIbjUesY3oULu"
    )
      .then((res) => res.json())
      .then((data) => {
        setStoredItems((elems) => [...elems, data.results.slice(0, 10)]);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(storedItems);

  return (
    <>
      <Header />
      <main>
        <SearchFilter getField={getField} />
        <div className="cards-container">
          {storedItems.length === 0 ? (
            <span>Loading...</span>
          ) : (
            storedItems.map((elem, key) => {
              <Card key={key} title={elem} desc={"A desc..."} />;
            })
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
