import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <article className="pa3">
      <h1 className="f3 f2-m f1-l">Home Page</h1>
      <p className="lh-copy">
        This simple application allows you collect books what you read.
      </p>
      <p className="lh-copy">
        To watch your library click on <NavLink to="/library">Library</NavLink> link menu
      </p>
      <p className="lh-copy">
        Adding books is on the <NavLink to="/addbook">Add Book</NavLink> link menu
      </p>
    </article>
  );
};

export default Home;