import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/projects">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="https://anthonyzarczynski5.wordpress.com/wp-content/uploads/2026/02/zarczynskiresume22.pdf">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
