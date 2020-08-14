import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import AppNavbar from "./components/AppNavbar";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
