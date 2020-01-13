import React from "react";

// Import mockup data
import postData from "../mockupData/postData";

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
        <PostsNavigation postData={postData} />
        <PostsList postData={postData} />
      </SmallBoxContainer>
    </React.Fragment>
  );
};

export default Admin;
