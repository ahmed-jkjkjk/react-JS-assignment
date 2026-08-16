import styles from "./CourseCard.module.css";
import DiscountBadge from "./DiscountBadge.jsx";

function CourseCard({ course }) {
  const { title, instructor, price, discount, enrolled } = course;

  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    // CSS Module class (styles.card) combined with Bootstrap's "card" class
    <div className={`card shadow-sm ${styles.card}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{title}</h5>

          {/* Ternary Operator: Enrolled vs Not Enrolled badge, using Bootstrap badge classes */}
          <span className={enrolled ? "badge bg-success" : "badge bg-secondary"}>
            {enrolled ? "Enrolled" : "Not Enrolled"}
          </span>
        </div>

        <p className={`${styles.instructor} mt-2 mb-2`}>
          Instructor: {instructor}
        </p>

        <div className="d-flex align-items-center">
          <span className={discount > 0 ? "text-decoration-line-through text-muted" : ""}>
            ${price}
          </span>

          {/* && Operator: only render the styled-components discount badge if a discount exists */}
          {discount > 0 && <DiscountBadge>-{discount}%</DiscountBadge>}
        </div>

        <p className={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CourseCard;
