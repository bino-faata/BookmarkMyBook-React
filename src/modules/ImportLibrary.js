import React from "react";

const ImportLibrary = () => {
  return(
    <article className="pa3 measure center">
      <form className="pa4 black-80">
        <div>
          <label className="f6 b db mb2">Paste data from previosly saved export</label>
          <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="notice-desc"></textarea>
          <input type="submit" value="Import" />
        </div>
      </form>
    </article>
  );
};

export default ImportLibrary;