// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/messages">Messages</Link>
    </nav>
  );
};

export default Navbar;