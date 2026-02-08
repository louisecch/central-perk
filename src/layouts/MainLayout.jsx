import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout({ children }) {
  const location = useLocation();

  const navbarBrandClass =
    location.pathname === "/"
      ? "site-navbar-brand"
      : "site-navbar-brand adjusted";

  return (
    <div>
      <header>
        <nav className="site-navbar">
          <div className="site-nav-inner">
            <Link to="/" className={navbarBrandClass}>
              Central Perk
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="layout-hero">{children}</div>
        <ToastContainer hideProgressBar={true} />
      </main>
    </div>
  );
}

export default MainLayout;
