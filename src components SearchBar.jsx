import { useState } from "react";

function SearchBar({ onSearch }) {
  // useState Hook: controlled input value
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  // Inline Styling approach (one of the four required styling methods)
  const inputStyle = {
    borderRadius: "999px",
    padding: "10px 18px",
    border: "1px solid #ccc",
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        style={inputStyle}
        placeholder="Search courses by title..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
