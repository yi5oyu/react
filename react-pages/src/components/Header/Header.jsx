import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <h1>Lens</h1>
      <p>
        Just another fine responsive site template by <a href>HTML5 UP</a>
      </p>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
