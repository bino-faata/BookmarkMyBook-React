import React from "react";
import Book from "./Book";

const BookList = () => {
  return (
  <section className="cf w-100 pa2-ns">
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  );
};

export default BookList;
// render books