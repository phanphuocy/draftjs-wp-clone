import React from "react";

// Import custom components
import Header from "../components/Header/Header";
import { Route } from "react-router-dom";

const Preview = () => {
  return (
    <React.Fragment>
      <Header />
      <p>This is preview page</p>
    </React.Fragment>
  );
};

export default Preview;
