import { useDispatch } from "react-redux";
import styles from "./CourseCard.module.css";
import DiscountBadge from "./DiscountBadge.jsx";
import { addToCart } from "../redux/slices/cartSlice.js";

function CourseCard({ course }) {
  const { id, title, instructor, price, discount, enrolled } = course;
  const dispatch = useDispatch();

  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  const handleAddToCart = () => {
    // Redux: dispatch an action to add this course to the cart
    dispatch(addToCart({ id, title, price: finalPrice }));
  };

  return (
    <div className={`card shadow-sm ${styles.card}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{title}</h5>

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

          {discount > 0 && <DiscountBadge>-{discount}%</DiscountBadge>}
        </div>

        <p className={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</p>

        <button className="btn btn-sm btn-dark w-100" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
