import React from "react";

// Import layout
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";

// Import custom components
import Header from "../components/Header/Header";
import PostsNavigation from "../components/Admin/PostsNavigation/PostsNavigation";
import PostsList from "../components/Admin/PostList/PostsList";

const Admin = () => {
  return (
    <React.Fragment>
      <Header />
      <SmallBoxContainer>
        <PostsNavigation />
        <PostsList />
      </SmallBoxContainer>
    </React.Fragment>
  );
};

export default Admin;
