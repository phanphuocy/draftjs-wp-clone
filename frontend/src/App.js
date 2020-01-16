import React, { useState } from "react";

// Import context
import PostState from "./context/postContext/PostState";

// Import routers
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import custom components

// Import custom pages
import Admin from "./pages/Admin";
import Preview from "./pages/Preview";
import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";

function App() {
  // // Declaring CRUD operation functions
  // const createNewPost = (postMetadata, postContent) => {
  //   let newPosts = [...posts];
  //   newPosts.unshift(postMetadata);
  //   setPosts(newPosts);
  //   console.log("Successfully added new post");
  // };
  // const editSelectPost = postId => {
  //   console.log(postId + " to be edited");
  // };
  //
  // const draftSelectedPost = postId => {
  //   console.log(postId + " to be moved to draft");
  //   let selectedPost = posts.filter(post => post.id === postId);
  //   selectedPost[0].status = "draft";
  //   let newPosts = [...posts];
  //   console.log(newPosts);
  //   setPosts(newPosts);
  // };

  return (
      <PostState>
        <Router>
          <Switch>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/admin/new-post">
              <NewPost/>
            </Route>
            <Route path="/admin/edit-post/:postId">
              <EditPost />
            </Route>
            <Route path="/admin">
              <Admin
              />
            </Route>
            <Route path="/" exact>
              <Redirect to="/admin/published" />
            </Route>
          </Switch>
        </Router>
      </PostState>
  );
}

export default App;
