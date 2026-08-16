import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Contact() {
  useDocumentTitle("Contact - Course Catalog");

  // React state controls every form input
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    // Handles submit without refreshing the page
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        message: "",
      });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="py-3" style={{ maxWidth: "480px", margin: "0 auto" }}>
      <h2 className="mb-3">Contact / Register</h2>

      {/* Ternary Operator: shows the success message only after a valid submit */}
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thanks! Your message has been submitted successfully.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            rows="4"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
