import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        <Outlet />
        <div className="layout">
          <nav className="nav">
              <Link to="/dinners/sibling">Sibling</Link>
              <Link to="/dinners/family">Family</Link>
          </nav>
        </div>
      </div>
    );
  }