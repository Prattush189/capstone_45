import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom'; 
import logo from './assets/capstone.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Capstone Logo" className="logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/journey">Journey</Link></li>
            <li className="nav-item"><Link to="/about">About Us</Link></li>
            <li className="nav-item"><Link to="/team">Team</Link></li>
            <li className="nav-item"><Link to="/fabtest">Fabrication & Testing</Link></li>
            <li className="nav-item"><Link to="/parts">Parts</Link></li>
          </ul>
        </nav>
        {/* <div className="header-right">
          <Link to="/contact" className="btn btn-primary">Get Involved</Link> 
        </div> */}
      </div>
    </header>
  );
};

export default Header;
