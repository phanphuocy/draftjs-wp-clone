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
import PostEditor from "./pages/PostEditor";
import PostView from "./pages/PostView";
import Page404 from "./pages/Page404";

function App() {
  return (
    <PostState>
      <Router>
        <Switch>
          <Route path="/404">
            <Page404 />
          </Route>
          <Route path="/preview/:postId">
            <PostView />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/admin/edit-post/:postIdSlug">
            <PostEditor />
          </Route>
          <Route path="/admin/edit-post">
            <PostEditor />
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
