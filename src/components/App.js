import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  let [items, setItems]= useState(itemData)
  let[isDarkMode, setIsDarkMode] = useState(false);


  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode ={isDarkMode} onDarkModeClick={onDarkModeClick}/>
        <ShoppingList items ={items}/>
    </div>
  );
}

export default App;
