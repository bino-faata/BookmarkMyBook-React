import React, { useState, useEffect } from "react";
import BookList from "./BookList";

const Library = () => {
  const [books, setBooks] = useState([]);

  // **
  // * Render list once at application load
  // **

  useEffect(() => {
      let booksArr;
      if (localStorage.getItem("books") === null){
        booksArr = [];
      } else {
        booksArr = JSON.parse(localStorage.getItem("books"));
      };
      setBooks(booksArr);
  }, []);

  return (
    <>
      { books
        ? <BookList books={books} />
        : <h4>No books</h4>
      }
    </>
  );
};

export default Library;