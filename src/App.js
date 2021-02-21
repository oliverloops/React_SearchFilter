import React, { useState, useEffect } from "react";
import { GiMaterialsScience } from "react-icons/gi";
import "./App.css";
//UI components
import SearchFilter from "./components/SearchFilter";
import Card from "./components/Card";

//Layout sample components
const Header = () => (
  <header>
    <GiMaterialsScience size={50} />
  </header>
);

const Footer = () => (
  <footer>
    <small>The NASA Patents Filter ©2021</small>
  </footer>
);

const App = () => {
  const [storedItems, setStoredItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState("");

  const getField = (e) => {
    setFilteredItems(e.target.value.toLowerCase());
  };

  // HTTP Request to NASA API
  const getData = async () => {
    await fetch(
      "https://api.nasa.gov/techtransfer/patent/?engine&api_key=YOUR_API_KEY"
    )
      .then((res) => res.json())
      .then((data) => {
        setStoredItems([data.results.slice(0, 10)]);
      });
  };

  //Filter items function
  const filtered = storedItems.map((elem) => {
    return elem.filter((items) =>
      items[1].toLowerCase().includes(filteredItems)
    );
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
