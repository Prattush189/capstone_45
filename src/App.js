import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Journey from './components/layout/Journey.jsx';
import Home from "./components/layout/Home.jsx";
import About from "./components/layout/About.jsx";
import Team from "./components/layout/Team.jsx";
import Fabtest from "./components/layout/Fabtest.jsx";
import Parts from "./components/layout/Parts.jsx";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/fabtest" element={<Fabtest />} />
          <Route path="/parts" element={<Parts/>} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;