import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext.jsx";

function Navbar() {
  const activeStyle = { color: "#ffc107", fontWeight: "600" };

  // Context API: theme + toggle function read via useContext (wrapped in useTheme)
  const { theme, toggleTheme } = useTheme();

  // Redux: read the cart items via useSelector
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className={`navbar navbar-expand navbar-dark ${theme === "dark" ? "bg-black" : "bg-dark"} mb-4 rounded px-3 py-3`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Course Catalog</span>
        <div className="navbar-nav flex-row align-items-center gap-3">
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
          <NavLink
            to="/cart"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Cart {cartCount > 0 && <span className="badge bg-danger">{cartCount}</span>}
          </NavLink>
          <button
            type="button"
            className="btn btn-sm btn-outline-light ms-2"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
