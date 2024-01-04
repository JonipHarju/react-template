// src/Routes.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
