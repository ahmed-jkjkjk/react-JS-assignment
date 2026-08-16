import useDocumentTitle from "../hooks/useDocumentTitle.js";

function About() {
  useDocumentTitle("About - Course Catalog");

  return (
    <div className="py-3">
      <h2>About This Project</h2>
      <p className="text-muted">
        Course Catalog is a small React app for browsing online courses,
        tracking enrollment, and viewing discounted pricing. It started as a
        simple components-and-props exercise and has since grown to include
        Hooks, custom Hooks, multiple styling approaches, Bootstrap, and now
        multi-page navigation with React Router.
      </p>
      <h4 className="mt-4">Built With</h4>
      <ul className="text-muted">
        <li>React + Vite</li>
        <li>React Router DOM</li>
        <li>Bootstrap</li>
        <li>Styled Components & CSS Modules</li>
      </ul>
    </div>
  );
}

export default About;
