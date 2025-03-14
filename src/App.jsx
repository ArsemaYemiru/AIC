import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Announcements from "./Components/pages/announcements";
import Contacts from "./Components/pages/contacts";
import Media from "./Components/pages/media";
import Services from "./Components/pages/services";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={< Services/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

