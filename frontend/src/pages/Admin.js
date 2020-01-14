import React, { useState } from "react";

// Import mockup data
import postData from "../mockupData/postData";

// Import layout
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";

// Import custom components
import Header from "../components/Header/Header";
import PostsNavigation from "../components/Admin/PostsNavigation/PostsNavigation";
import PostsList from "../components/Admin/PostList/PostsList";

const Admin = () => {
  // Initialize states
  const [posts, setPosts] = useState(postData);

  // Declaring CRUD operation functions
  const editSelectPost = postId => {
    console.log(postId + " to be edited");
  };
  const deleteSelectedPost = postId => {
    // Conditionally delete post
    // if post type is not trashed, do not delete it permanently

    // if it's already trashed, remove it completely
    let newPosts = posts.filter(post => post.id !== postId);
    setPosts(newPosts);
  };
  const draftSelectedPost = postId => {
    console.log(postId + " to be moved to draft");
  };

  // Rendering
  return (
    <React.Fragment>
      <Header />
      <SmallBoxContainer>
        <PostsNavigation postData={posts} />
        <PostsList
          postData={posts}
          editSelectPost={editSelectPost}
          deleteSelectedPost={deleteSelectedPost}
          draftSelectedPost={draftSelectedPost}
        />
      </SmallBoxContainer>
    </React.Fragment>
  );
};

export default Admin;
