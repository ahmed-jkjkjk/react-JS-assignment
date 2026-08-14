import Header from "./components/Header.jsx";
import CourseList from "./components/CourseList.jsx";
import Footer from "./components/Footer.jsx";
import courses from "./data/courses.js";

function App() {
  return (
    <div className="app">
      <Header
        title="Course Catalog"
        subtitle="Browse and track your online courses"
      />

      <CourseList courses={courses} />

      <Footer year={2026} author="Ahmed Haytham" />
    </div>
  );
}

export default App;
