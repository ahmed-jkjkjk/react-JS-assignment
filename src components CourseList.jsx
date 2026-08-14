import CourseCard from "./CourseCard.jsx";

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {/* .map() Operator: dynamically renders a CourseCard for every course in the array */}
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
