import React from 'react';
import JuridentLogo from "../assets/JuridentLogo.png";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className=" top-0 left-0 right-0 z-50 bg-[#0B0B26] shadow-md">
      <div className="flex justify-between text-[#D4AF37] items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src={JuridentLogo} alt="logo" className="h-10 w-auto md:h-10" />
          </NavLink>
        </div>

        {/* Left Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <NavLink 
              to="/Contact" 
              className="text-sm font-medium transition-colors duration-200"
    
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/About"
              className="text-sm font-medium transition-colors duration-200"
              
            >
              About us
            </NavLink>
          </li>
        </ul>

        {/* Right Navigation */}
        <ul className="flex items-center">
          <li>
            <NavLink 
              to="/Register"
              className="text-sm font-medium transition-colors duration-200"

              
            >
              Login/Sign up
            </NavLink>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0B0B26] shadow-md">
          <ul className="flex justify-around items-center py-3">
            <li>
              <NavLink 
                to="/contact"
                className="text-sm font-medium transition-colors duration-200"

            
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `text-xs font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                  }`
                }
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;