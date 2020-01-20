import React from "react";
import "./PreviewHeader.scss";

// Import router
import { Link } from "react-router-dom";

const SearchInput = () => {
  return <div>Tìm</div>;
};

const PreviewHeader = () => {
  return (
    <header className="preview-header">
      <div className="leftSide">
        <Link to="/preview">
          <h1 className="site-title">Phan Phước Ý</h1>
        </Link>
      </div>
      <div className="rightSide">
        <SearchInput />
      </div>
    </header>
  );
};

export default PreviewHeader;
