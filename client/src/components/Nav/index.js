import React, { useState, useEffect, } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    const [pos, setPos] = useState("top")

    useEffect (() =>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("moved")
            } else {
               setPos("top")
            }
        })
    },[])

  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top" style={{backgroundColor: pos === "top" ? "transparent" : "white" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Google Books</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
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
