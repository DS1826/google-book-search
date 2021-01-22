import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Google Books</NavLink>
        <div className="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Search
                        </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              >
                Saved
                    </NavLink>
            </li>
            </ul>
        </div>
      </div>
    </nav>
);
}

export default Nav;
