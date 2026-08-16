import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CourseList from "../components/CourseList.jsx";
import courses from "../data/courses.js";
import useCourseStats from "../hooks/useCourseStats.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { total, enrolledCount, averagePrice } = useCourseStats(courses);

  useDocumentTitle(`Course Catalog (${filteredCourses.length} shown)`);

  return (
    <div>
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
    </div>
  );
}

export default Home;
