import React, { useState } from "react";
import Menu from "./Menu";
import Cities from "./Cities";
import items from "./data";

const allCities = ["all", ...new Set(items.map((item) => item.city))];
// console.log(allCities);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [cities, setCities] = useState(allCities);
  // console.log(cities);

  const filterItems = (city) => {
    if (city === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.city === city);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Indian Delicacies</h2>
          <div className="underline"></div>
        </div>
        <Cities filterItems={filterItems} cities={cities} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
