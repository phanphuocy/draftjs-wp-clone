import React from "react";

// Import custom components
import Header from "../components/Header/Header";
import PostsNavigation from "../components/Admin/PostsNavigation/PostsNavigation";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";

const Admin = () => {
  return (
    <React.Fragment>
      <Header />
      <SmallBoxContainer>
        <PostsNavigation />
      </SmallBoxContainer>
    </React.Fragment>
  );
};

export default Admin;
