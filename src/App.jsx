import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Career from "./Career";
import Apply from "./Apply"; // NEW

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#0f0028] to-[#22004c] text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-[#150032] shadow-md">
          <div className="text-2xl font-bold text-white">Nearby Rooms</div>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:text-yellow-400">
              Career
            </Link>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
            <Link to="/faq" className="hover:text-yellow-400">
              FAQ
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apply" element={<Apply />} /> {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
