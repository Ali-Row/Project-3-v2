import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarManager() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/inventory"
              className={
                window.location.pathname === "/inventory" || window.location.pathname === "/inventory"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Inventory
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sales"
              className={
                window.location.pathname === "/sales" || window.location.pathname === "/sales"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sales
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/stock-management"
              className={
                window.location.pathname === "/stock-management" || window.location.pathname === "/stock-management"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Manage Stock
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarManager;
