import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css"; // Importing the app-specific CSS

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/weather-react/' element={<Home />} />
          <Route path='/weather-react/about' element={<About />} />
          <Route path='/weather-react/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
