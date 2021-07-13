import React, { useState } from 'react';
import logo from "../img/book.png";

const AddBook = () => {

  const [values, setValues] = useState({
    author: "",
    title: "",
    genre: "",
    cover: `${logo}`
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleAuthorInputChange = (event) => {
    setValues({...values, author: event.target.value});
  };

  const handleTitleInputChange = (event) => {
    setValues({...values, title: event.target.value});
  };

  const handleGenreInputChange = (event) => {
    setValues({...values, genre: event.target.value});
  };

  const handleCoverInputChange = (event) => {
    setValues({...values, cover: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.author && values.title && values.genre) {
      setValid(true);
    };
    setSubmitted(true);
  };

  return (
    <main className="pa4 black-80">
      <form className="measure center" onSubmit={handleSubmit} >
        <fieldset id="addBook" className="ba b--transparent ph0 mh0">

        {
          submitted
          ?
          <div className="flex items-center justify-center pa4 bg-washed-green dark-green">
            <span className="lh-title ml3">Book successfully added!</span>
          </div>
          : <legend className="f4 fw6 ph0 mh0 dark-green">Adding Book</legend>
        }

          <div className="mt3">
            <label className="f7 b db mb2">Book author name</label>
            <input id="name"
                  required
                  onChange={handleAuthorInputChange}
                  value={values.author}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="author-name"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Book Title</label>
            <input id="title"
                  required
                  onChange={handleTitleInputChange}
                  value={values.title}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="title"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Genre (sci-fi, fantasy, horror etc.)</label>
            <input id="genre"
                  required
                  onChange={handleGenreInputChange}
                  value={values.genre}
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="genre"></input>
          </div>
          <div className="mv3">
            <label className="f7 b db mb2">Book Cover URL</label>
            <input id="cover"
                  onChange={handleCoverInputChange}
                  value={values.cover}
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