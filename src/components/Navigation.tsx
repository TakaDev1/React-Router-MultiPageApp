import React from "react";
import { Link } from "react-router";
const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Navigation;
