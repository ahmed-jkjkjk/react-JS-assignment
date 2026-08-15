import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CourseList from "./components/CourseList.jsx";
import Footer from "./components/Footer.jsx";
import courses from "./data/courses.js";
import useCourseStats from "./hooks/useCourseStats.js";
import useDocumentTitle from "./hooks/useDocumentTitle.js";

function App() {
  // useState Hook: tracks the current search term
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Custom Hook #1: computed stats (total, enrolledCount, averagePrice)
  const { total, enrolledCount, averagePrice } = useCourseStats(courses);

  // Custom Hook #2: keeps the tab title synced with the filtered count
  useDocumentTitle(filteredCourses.length);

  return (
    <div className="container py-4">
      <Header
        title="Course Catalog"
        subtitle="Browse and track your online courses"
      />

      <div className="row mb-4 text-center g-2">
        <div className="col-4">
          <div className="border rounded py-2">
            <div className="fw-bold">{total}</div>
            <small className="text-muted">Total Courses</small>
          </div>
        </div>
        <div className="col-4">
          <div className="border rounded py-2">
            <div className="fw-bold">{enrolledCount}</div>
            <small className="text-muted">Enrolled</small>
          </div>
        </div>
        <div className="col-4">
          <div className="border rounded py-2">
            <div className="fw-bold">${averagePrice.toFixed(2)}</div>
            <small className="text-muted">Avg. Price</small>
          </div>
        </div>
      </div>

      <SearchBar onSearch={setSearchTerm} />

      <CourseList courses={filteredCourses} />

      <Footer year={2026} author="Ahmed Haytham" />
    </div>
  );
}

export default App;
