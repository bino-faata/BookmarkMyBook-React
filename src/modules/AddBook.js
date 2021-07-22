import React, { useState } from 'react';
import logo from "../img/book.png";

const AddBook = () => {
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const [bookValues, setBookValues] = useState({
    "id": uid(),
    "author": "",
    "title": "",
    "genre": "",
    "cover": `${logo}`
  });

  const [submitted, setSubmitted] = useState(false);


  const handleAuthorInputChange = (event) => {
    setBookValues({...bookValues, author: event.target.value});
  };

  const handleTitleInputChange = (event) => {
    setBookValues({...bookValues, title: event.target.value});
  };

  const handleGenreInputChange = (event) => {
    setBookValues({...bookValues, genre: event.target.value});
  };

  const handleCoverInputChange = (event) => {
    setBookValues({...bookValues, cover: event.target.value});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    saveToLocalStorage(bookValues);
    removeNotify();
  };

  const removeNotify = () => {
    setTimeout(
      () => setSubmitted(false),
      4000
    )
  };

  const saveToLocalStorage = (bookValues) => {
    let books;
    if(localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    };

    books.push(bookValues);
    localStorage.setItem("books", JSON.stringify(books));

  };

  return (
    <main className="pa4 black-80">
      <form className="measure center" onSubmit={handleSubmit} >
        <fieldset id="addBook" className="ba b--transparent ph0 mh0">

        {
          submitted
          ?
          <div className="flex items-center justify-center pa2 bg-washed-green dark-green">
            <span className="lh-title ml3">Book successfully added!</span>
          </div>
          : <legend className="f4 fw6 ph0 mh0 dark-green">Adding Book</legend>
        }

          <div className="mt3">
            <label className="f7 b db mb2">Book author name</label>
            <input id="name"
                  required
                  onChange={handleAuthorInputChange}
                  value={bookValues.author}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="author-name"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Book Title</label>
            <input id="title"
                  required
                  onChange={handleTitleInputChange}
                  value={bookValues.title}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="title"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Genre (sci-fi, fantasy, horror etc.)</label>
            <input id="genre"
                  required
                  onChange={handleGenreInputChange}
                  value={bookValues.genre}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="genre"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Book Cover URL</label>
            <input id="cover"
                  onChange={handleCoverInputChange}
                  value={bookValues.cover}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="cover-img"></input>
          </div>
        </fieldset>
        <div className="mv3">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent dark-pink grow pointer f6 dib"
                type="submit"
                value="Add Book"></input>
        </div>
      </form>
    </main>
  );
};

export default AddBook;