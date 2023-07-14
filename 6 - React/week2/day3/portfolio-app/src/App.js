import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contacts from "./pages/Contacts/Contacts";

function App() {

  return <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
  </Router>
}

export default App;