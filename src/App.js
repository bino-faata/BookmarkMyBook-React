import React from "react";
import Header from "./modules/Header";
import Home from "./modules/Home";
import Library from "./modules/Library";
import AddBook from "./modules/AddBook.js";
import ImportLibrary from "./modules/ImportLibrary";
import ExportLibrary from "./modules/ExportLibrary";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content"></div>
    </div>
  );
}

export default App;
