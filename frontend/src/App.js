import React, { useState } from "react";

// Import routers
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import custom components

// Import mockup data
import postData from "./mockupData/postData";
import postContent from "./mockupData/postContent";

// Import custom pages
import Admin from "./pages/Admin";
import Preview from "./pages/Preview";
import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";

function App() {
  // Initialize states
  const [posts, setPosts] = useState(postData);

  // Declaring CRUD operation functions
  const createNewPost = (postMetadata, postContent) => {
    let newPosts = [...posts];
    newPosts.unshift(postMetadata);
    setPosts(newPosts);
    console.log("Successfully added new post");
  };
  const editSelectPost = postId => {
    console.log(postId + " to be edited");
  };
  const deleteSelectedPost = postId => {
    // Conditionally delete post
    // if post type is not trashed, do not delete it permanently
    let selectedPost = posts.filter(post => post.id === postId);
    console.log(selectedPost);
    if (selectedPost.length > 0) {
      if (selectedPost[0].status !== "trashed") {
        // Check if status is not trashed
        selectedPost[0].status = "trashed";
        let newPosts = [...posts];
        setPosts(newPosts);
      } else {
        // if it's already trashed, remove it completely
        let newPosts = posts.filter(post => post.id !== postId);
        setPosts(newPosts);
      }
    } else {
      console.log("Post does not exist");
    }
  };
  const draftSelectedPost = postId => {
    console.log(postId + " to be moved to draft");
    let selectedPost = posts.filter(post => post.id === postId);
    selectedPost[0].status = "draft";
    let newPosts = [...posts];
    console.log(newPosts);
    setPosts(newPosts);
  };

  return (
    <Router>
      <Switch>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/admin/new-post">
          <NewPost createNewPost={createNewPost} />
        </Route>
        <Route path="/admin/edit-post/:postId">
          <EditPost />
        </Route>
        <Route path="/admin">
          <Admin
            postData={postData}
            createNewPost={createNewPost}
            draftSelectedPost={draftSelectedPost}
            deleteSelectedPost={deleteSelectedPost}
            editSelectPost={editSelectPost}
          />
        </Route>
        <Route path="/" exact>
          <Redirect to="/admin/published" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
