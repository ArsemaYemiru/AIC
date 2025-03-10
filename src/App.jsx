import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/nav/header";
import Footer from "./Components/nav/footer";
import About from "./Components/pages/about";
import Announcements from "./Components/pages/announcements";
import Contacts from "./Components/pages/contacts";
import Home from "./Components/pages/home";
import Media from "./Components/pages/media";
import Services from "./Components/pages/services";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Footer />
        </>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<>
        <Header />
          <About />
          <Footer />
        </>} />
      </Routes>
      <Routes>
        <Route path="/announcements" element={<>
        <Header />
          <Announcements />
          <Footer />
        </>} />
      </Routes>
      <Routes>
        <Route path="/contacts" element={<>
        <Header />
          <Contacts />
          <Footer />
        </>} />
      </Routes>
      <Routes>
        <Route path="/media" element={<>
        <Header />
          <Media />
          <Footer />
        </>} />
      </Routes>
      <Routes>
        <Route path="/services" element={<>
        <Header />
          <Services />
          <Footer />
        </>} />
      </Routes>

    </Router>
    </>
  )
}

export default App

