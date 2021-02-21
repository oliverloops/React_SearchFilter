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
  const [filteredItems, setFilteredItems] = useState("");

  const getField = (e) => {
    console.log(e.target.value.toLowerCase());
    setFilteredItems(e.target.value.toLowerCase());
  };

  // HTTP Request to NASA API
  const getData = async () => {
    await fetch(
      "https://api.nasa.gov/techtransfer/patent/?engine&api_key=tJXFaU9v7qQ4aQgAbMna0qLLDxinIbjUesY3oULu"
    )
      .then((res) => res.json())
      .then((data) => {
        setStoredItems([data.results.slice(0, 10)]);
      });
  };

  //Filter items function
  const filtered = storedItems.filter((elem, id) => {
    return elem[id][1].includes(filteredItems);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <SearchFilter getField={getField} />
        <div className="cards-container">
          {filtered.map((elem) =>
            elem.map((item, key) => (
              <Card key={key} image={item[10]} title={item[1]} desc={item[3]} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
