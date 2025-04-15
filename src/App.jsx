import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Career from "./Career";
import Listings from "./Listings";  // Import Listings page

export default function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-black text-white flex justify-center space-x-6">
          <a href="/" className="hover:text-yellow-300">Career</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
          <a href="/faq" className="hover:text-yellow-300">FAQ</a>
          <a href="/listings" className="hover:text-yellow-300">Listings</a>  {/* Link to Listings */}
        </nav>

        <Routes>
          <Route path="/" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/listings" element={<Listings />} />  {/* Route for Listings */}
        </Routes>
      </div>
    </Router>
  );
}
