function CourseCard({ course }) {
  const { title, instructor, price, discount, enrolled } = course;

  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className="course-card">
      <div className="course-card-top">
        <h3>{title}</h3>

        {/* Ternary Operator: shows a different badge depending on enrollment status */}
        <span className={enrolled ? "badge badge-enrolled" : "badge badge-not-enrolled"}>
          {enrolled ? "Enrolled" : "Not Enrolled"}
        </span>
      </div>

      <p className="instructor">Instructor: {instructor}</p>

      <div className="price-row">
        <span className={discount > 0 ? "price price-strike" : "price"}>
          ${price}
        </span>

        {/* && Operator: only renders the discount badge if a discount exists */}
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
      </div>

      <p className="final-price">Final Price: ${finalPrice.toFixed(2)}</p>
    </div>
  );
}

export default CourseCard;
