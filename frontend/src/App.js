import React from "react";

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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/admin/edit-post/:postId">
          <EditPost />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/" exact>
          <Redirect to="/admin/published" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
