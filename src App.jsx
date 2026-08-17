import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  // Context API: theme value applied at the top level of the app
  const { theme } = useTheme();

  return (
    <div
      className={`container py-4 ${theme === "dark" ? "bg-dark text-light" : ""}`}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer year={2026} author="Ahmed Haytham" />
    </div>
  );
}

export default App;
