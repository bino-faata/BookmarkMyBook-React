import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l b black dark-pink link dim w-100 w-25-l tc tl-l mb2 mb0-l dib w2 h2" href="/" title="Home">
        <h2 className="">BookmarkMyBook</h2>
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <NavLink className="link navlink dim black f6 f5-l dib mr3 mr4-l" replace exact to="/" title="Home">Home</NavLink>
        <NavLink className="link navlink dim black f6 f5-l dib mr3 mr4-l" to="/library" title="Library">Library</NavLink>
        <NavLink className="link navlink dim black f6 f5-l dib mr3 mr4-l" to="/addbook" title="Add Book">Add Book</NavLink>
        <NavLink className="link navlink dim black f6 f5-l dib mr3 mr4-l" to="/importlibrary" title="Import JSON">Import JSON</NavLink>
        <NavLink className="link navlink dim black f6 f5-l dib" to="/exportlibrary" title="Export JSON">Export JSON</NavLink>
      </div>
    </nav>
  );
};

export default Header;