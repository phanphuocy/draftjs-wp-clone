import React from "react";

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
import NewPost from "./pages/PostEditor";

function App() {
  return (
    <PostState>
      <Router>
        <Switch>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/admin/new-post">
            <NewPost />
          </Route>
          <Route path="/admin/edit-post/:postIdSlug">
            <NewPost />
          </Route>
          <Route path="/admin">
            <Admin />
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
