import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import './Navbar.css';

// Helper component for the navigation links
const NavLink = ({ to, children, onClick }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
    }
    onClick={onClick}
  >
    {children}
  </RouterNavLink>
);

const navLinks = [
  { to: '/', text: 'Homepage' },
  { to: '/blogs', text: 'Blogs' },
  { to: '/projects', text: 'Projects' },
  { to: '/test', text: 'Test' }, // New link for Test page
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Left side: Your name or brand */}
        <div className="navbar-brand">
          <RouterNavLink to="/" className="brand-title-link">
            <h1 className="brand-title">Huy Nguyen</h1>
          </RouterNavLink>
        </div>

        {/* Hamburger Menu Button (for mobile) */}
        <button 
          className="hamburger-menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </button>

        {/* Right side: Navigation links and Theme Toggle */}
        <div className={`navbar-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} onClick={closeMobileMenu}>
              {link.text}
            </NavLink>
          ))}
          <a href="/nguyenphungbaohuy_resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-link" onClick={closeMobileMenu}>
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}