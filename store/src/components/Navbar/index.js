import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/storefront"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Storefront
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          {/* <li className="nav-item">
            <LoginModal goToCart={this.goToCart.bind(this)} />
            <LoginModal />
          </li> */}

          <li className="nav-item">
            <Link
              to="/store-manager"
              className={
                window.location.pathname === "/store-manager"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Store Manager
            </Link>
          </li>
          {/* <li className="nav-item">
            <LoginModal goToCart={this.goToCart.bind(this)} />
            <LoginModal />
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
