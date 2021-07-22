import React from "react";

const ExportLibrary = () => {

  const lsData = localStorage.getItem("books");

  return (
    <article className="pa3 measure center">
      <form className="pa4 black-80">
        <div>
          <label className="f6 b db mb2">Select all and copy selected data from this textarea to local file. Store file in safe place</label>
          <textarea readOnly rows="8" cols="30" value={lsData} id="data" name="data" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="notice-desc"></textarea>
        </div>
      </form>
    </article>
  );
};

export default ExportLibrary;