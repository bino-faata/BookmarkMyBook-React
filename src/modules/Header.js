import React from 'react';

const Header = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l b black v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l dib w2 h2" href="/" title="Home">
        BookmarkMyBook
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/library" title="Library">Library</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/addbook" title="Add Book">Add Book</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/importlibrary" title="Import JSON">Import JSON</a>
        <a className="link dim dark-gray f6 f5-l dib" href="/exportlibrary" title="Export JSON">Export JSON</a>
      </div>
    </nav>
  );
};

export default Header;