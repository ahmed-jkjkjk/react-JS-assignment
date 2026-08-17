import useDocumentTitle from "../hooks/useDocumentTitle.js";
import { useTheme } from "../context/ThemeContext.jsx";

function About() {
  useDocumentTitle("About - Course Catalog");
  const { theme } = useTheme();

  return (
    <div className="py-3">
      <h2>About This Project</h2>
      <p className="text-muted">
        Course Catalog is a small React app for browsing online courses,
        tracking enrollment, and viewing discounted pricing. It now includes
        Context API for the site-wide theme and Redux Toolkit for managing
        the shopping cart.
      </p>
      <p>
        Current theme (from Context API):{" "}
        <span className="badge bg-info text-dark">{theme}</span>
      </p>
      <h4 className="mt-4">Built With</h4>
      <ul className="text-muted">
        <li>React + Vite</li>
        <li>React Router DOM</li>
        <li>Context API (Theme)</li>
        <li>Redux Toolkit + React-Redux (Cart)</li>
        <li>Bootstrap, CSS Modules, Styled Components</li>
      </ul>
    </div>
  );
}

export default About;
