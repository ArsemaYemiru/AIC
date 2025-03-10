import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/nav/header";
import Footer from "./Components/nav/footer";
// import Header from "./Components/pages/about";
// import Header from "./Components/pages/announcements";
// import Header from "./Components/pages/contacts";
// import Header from "./Components/pages/home";
// import Header from "./Components/pages/media";
// import Header from "./Components/pages/services";

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
    </Router>
    </>
  )
}

export default App

