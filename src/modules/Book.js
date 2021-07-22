import React from "react";

const Book = ({ author, title, genre, cover }) => {

  return (

      <article className="fl w-100 w-50-m  w-25-ns pa2-ns b--black-10">
        <div className="aspect-ratio aspect-ratio--3x4">
          <img src={cover} alt="Cover" className="db bg-center cover aspect-ratio--object" />
        </div>
        <div className="pa1 bt b--black-20">
          <p className="f4 black"><strong>{title}</strong></p>
          <p className="f5 black mv1">{author}</p>
          <p className="f5 black mv1"><small>{genre}</small></p>
          <a className="link tc ph3 pv1 db bg-animate bg-gray hover-bg-red white f6 br1" href="/">Remove Book</a>
        </div>
      </article>

  )
};


export default Book;