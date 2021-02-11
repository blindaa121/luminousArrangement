import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Luminous Arrangement</h1>
      <div className="social-links">
        <a className='header-icon' href="https://bryanlinda.com"><i className="fas fa-briefcase fa-3x"></i></a>
        <a className='header-icon' href="https://www.linkedin.com/in/bryan-linda-44389794/"><i className="fab fa-linkedin fa-3x"></i></a>
        <a className='header-icon' href="https://github.com/blindaa121/heatinup"><i className="fab fa-github fa-3x"></i></a>
        <a className='header-icon' href="https://angel.co/u/bryan-linda"><i className="fab fa-angellist fa-3x"></i></a>
      </div>
    </div>
  )
}

export default Header
