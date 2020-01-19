import React from "react";
import "./PreviewHeader.scss";

const SearchInput = () => {
  return <div>Tìm</div>;
};

const PreviewHeader = () => {
  return (
    <header className="preview-header">
      <div className="leftSide">
        <h1 className="site-title">Phan Phước Ý</h1>
      </div>
      <div className="rightSide">
        <SearchInput />
      </div>
    </header>
  );
};

export default PreviewHeader;
