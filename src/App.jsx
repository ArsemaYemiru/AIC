import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Contacts from "./Components/pages/contacts";
import Bids from "./Components/pages/announcements/bids";
import Notice from "./Components/pages/announcements/notice";
import Vacancies from "./Components/pages/announcements/vacancies";
import Events from "./Components/pages/media/events";
import Gallery from "./Components/pages/media/gallery";
import News from "./Components/pages/media/news";
import Reports from "./Components/pages/media/reports";
import Products from "./Components/pages/services/products";
import Claims from "./Components/pages/services/claims";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={< Products/>} />
        <Route path="/claims" element={<Claims/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

