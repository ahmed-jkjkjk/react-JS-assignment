import { useState, useEffect } from "react";

// Custom Hook: takes a list of courses and returns live stats about them.
// Demonstrates useState (to hold the computed stats) and useEffect
// (to recompute whenever the courses list changes).
function useCourseStats(courses) {
  const [stats, setStats] = useState({
    total: 0,
    enrolledCount: 0,
    averagePrice: 0,
  });

  useEffect(() => {
    const total = courses.length;
    const enrolledCount = courses.filter((c) => c.enrolled).length;
    const averagePrice =
      total > 0
        ? courses.reduce((sum, c) => sum + c.price, 0) / total
        : 0;

    setStats({ total, enrolledCount, averagePrice });
  }, [courses]);

  return stats;
}

export default useCourseStats;
