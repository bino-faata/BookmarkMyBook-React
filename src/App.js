import React from "react";
import { Route, HashRouter } from "react-router-dom";
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
      <HashRouter>        
        <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/library" component={Library} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/importlibrary" component={ImportLibrary} />
        <Route path="/exportlibrary" component={ExportLibrary} />
      </div>
      </HashRouter>
    </div>
  );
}

export default App;