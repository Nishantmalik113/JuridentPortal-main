import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import juridentLogo from '../assets/jurident-logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-[#D4AF37]" // Golden color for active link
      : "text-white hover:text-[#D4AF37] transition-colors"; // White with hover effect for inactive
  };

  return (
    <nav className="px-4 sm:px-6 py-4 z-[1000] backdrop-blur-md shadow-md sticky w-full top-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - No shrinking */}
        <div className="flex-none">
          <Link to="/">
            <img src={juridentLogo} alt="Jurident" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link to="/Dashboard" className={getLinkClass('/Dashboard')}>Home</Link>
          <Link to="/calendar" className={getLinkClass('/calendar')}>Calendar</Link>
          <Link to="/news" className={getLinkClass('/news')}>News</Link>
          <Link to="/aboutus" className={getLinkClass('/Aboutus')}>About Us</Link>
          <Link to="/bareAct" className={getLinkClass('/bareAct')}>Bare Act PDF</Link>
          <Link to="/contactus" className={getLinkClass('/contactus')}>Contact Us</Link>
          <Link to="/account" className={getLinkClass('/account')}>Account</Link>
        </div>

        {/* Burger Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0B0B26] z-[1000] shadow-lg md:hidden">
            <div className="flex flex-col py-2 px-4 space-y-3">
              <Link 
                to="/Dashboard" 
                className={`${getLinkClass('/cases')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/calendar" 
                className={`${getLinkClass('/calendar')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Calendar
              </Link>
              <Link 
                to="/news" 
                className={`${getLinkClass('/news')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>

              <Link 
                to="/aboutus" 
                className={`${getLinkClass('/aboutus')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                AboutuUs
              </Link>

              <Link 
                to="/bareact" 
                className={`${getLinkClass('/bareact')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Bare Act PDF
              </Link>
              <Link 
                to="/contactus" 
                className={`${getLinkClass('/contactus')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/account" 
                className={`${getLinkClass('/account')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 