import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const toggelPhoneNo = (e) => {
    e.stopPropagation();
    const phoneNo = document.getElementById("phone-No");
    if (phoneNo) {
      phoneNo.addEventListener("click", (e) => e.stopPropagation());
      phoneNo.style.display = phoneNo.style.display === "block" ? "none" : "block";
    }
    setTimeout(() => {      
      document.addEventListener('click', () => {
        if (phoneNo) {
          phoneNo.style.display = "none";
        }
      });
    }, 0);
  
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⚕️</span>
            <span className="logo-text">Dr. Ali Medical Center</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
              <li><a href="#contact" className="nav-link">Contact , Appointment</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <a onClick={toggelPhoneNo} className="emergency-btn">Emergency📞</a>
            <a href="#appointment" className="btn btn-primary">Book Appointment</a>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <span id='phone-No'>+249117054428</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
