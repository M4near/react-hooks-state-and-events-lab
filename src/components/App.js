import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [theme, setTheme]= useState("")

  function themeMode() {
    setTheme((appClass) => !appClass);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = theme ? "App dark" : "App light"
  const appMode = theme ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={themeMode}>{appMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
