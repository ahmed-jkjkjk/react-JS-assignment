import CourseCard from "./CourseCard.jsx";

function CourseList({ courses }) {
  // && Operator: only render the grid if there are courses to show
  return (
    <div className="row g-3">
      {courses.length > 0 &&
        courses.map((course) => (
          // .map() Operator: dynamically renders a CourseCard for every course
          <div className="col-12 col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}

      {/* Ternary Operator: friendly message when search filters out everything */}
      {courses.length === 0 ? (
        <p className="text-center text-muted">No courses match your search.</p>
      ) : null}
    </div>
  );
}

export default CourseList;
