import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="container py-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer year={2026} author="Ahmed Haytham" />
    </div>
  );
}

export default App;
