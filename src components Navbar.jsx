import { NavLink } from "react-router-dom";

function Navbar() {
  // Inline styling used here for the active link color
  const activeStyle = { color: "#ffc107", fontWeight: "600" };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 rounded px-3 py-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Course Catalog</span>
        <div className="navbar-nav flex-row gap-3">
          <NavLink
            to="/"
            end
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
