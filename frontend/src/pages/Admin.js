import React from "react";

// Import layout
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";

// Import custom components
import Header from "../components/Header/Header";
import PostsNavigation from "../components/Admin/PostsNavigation/PostsNavigation";
import PostsList from "../components/Admin/PostList/PostsList";

const Admin = props => {
  // Getting data props
  const {
    postData,
    createNewPost,
    editSelectPost,
    deleteSelectedPost,
    draftSelectedPost
  } = props;

  // Rendering
  return (
    <React.Fragment>
      <Header />
      <SmallBoxContainer>
        <PostsNavigation postData={postData} />
        <PostsList
          postData={postData}
          createNewPost={createNewPost}
          editSelectPost={editSelectPost}
          deleteSelectedPost={deleteSelectedPost}
          draftSelectedPost={draftSelectedPost}
        />
      </SmallBoxContainer>
    </React.Fragment>
  );
};

export default Admin;
