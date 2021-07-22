import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {

  return (
  <section className="cf w-100 pa2-ns">
    {
      books
      ? books.map(book => <Book
                              key={book.id}
                              author={book.author}
                              title={book.title}
                              genre={book.genre}
                              cover={book.cover}
                             />)
      : <h4 className="pa2 measure center">No Books</h4>
    }
  </section>
  );
};

export default BookList;