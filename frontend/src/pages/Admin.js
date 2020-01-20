import React from "react";

// Import layout
import MediumBoxContainer from "../components/stateless/MediumBoxContainer/MediumBoxContainer";
import AdminFooter from "../components/stateless/AdminFooter/AdminFooter";

// Import custom components
import Header from "../components/Header/Header";
import PostsNavigation from "../components/Admin/PostsNavigation/PostsNavigation";
import PostsList from "../components/Admin/PostList/PostsList";

const Admin = () => {
  // Rendering
  return (
    <React.Fragment>
      <Header />
      <MediumBoxContainer>
        <PostsNavigation />
        <PostsList />
      </MediumBoxContainer>
      <AdminFooter />
    </React.Fragment>
  );
};

export default Admin;
