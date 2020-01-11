import React from "react";

// Import routers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom components

// Import custom pages
import Admin from "./pages/Admin";
import Preview from "./pages/Preview";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
