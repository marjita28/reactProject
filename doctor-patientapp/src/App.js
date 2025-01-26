// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { assets } from "./assets/assets";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.admin_logo} alt="logo" />
      <Router>
        <div className="bg-gray-800 text-white p-4">
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/doctor" className="hover:text-gray-400">
              Doctor
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
