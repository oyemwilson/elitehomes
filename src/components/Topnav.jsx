import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ArrowRightCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gray-100">
      {/* Top Contact Bar */}
      <div className="relative container mx-auto max-w-7xl px-4 py-5 text-sm text-gray-700">
        {/* Absolute Get Started Button */}
        <Link
          to="/contact"
          className="absolute top-[50px] md:top-5 right-4 z-10 bg-[#1c4c50] text-white px-2 md:px-4 py-2 rounded-md text-sm hover:bg-[#66a5ad] transition flex items-center justify-center"
        >
          <ArrowRightCircle className="block md:hidden w-5 h-5" />
          <span className="hidden md:inline">Get Started</span>
        </Link>

        {/* Flex Row: Logo and Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="w-32">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/assets/images/logo.png"
                alt="Elite Homecare Partners"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

          {/* Phone Line and Description */}
          <div className="mt-3 md:mt-0 md:text-right w-full md:w-auto md:pr-4 flex flex-col items-start md:items-end">
            <div className="hidden md:block h-10"></div>
            <div className="flex items-center space-x-2 text-base">
              <Phone className="w-4 h-4 text-[#1c4c50]" />
              <span>Call us on +234 (0) 8133634396</span>
            </div>
            <p className="hidden md:block text-xs text-gray-500 mt-1">
              Nannies, Home keepers & Maternity Nurses | Nigeria | High Profile Nanny & Governess Agency
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="shadow-md mx-4 sm:mx-6 lg:mx-0">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between bg-[#1c4c50]">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl">🏠</span>
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
            <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
            <Link to="/why-choose-us" className="text-white hover:text-gray-300">Why Choose Us</Link>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden justify-between items-center w-full">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="border text-white px-3 py-1 rounded-lg hover:bg-white hover:text-[#1c4c50] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
{menuOpen && (
  <div
    className="md:hidden flex flex-col bg-[#1c4c50] px-4 py-4 space-y-3 z-50 animate-slide-down"
  >
    <Link to="/" onClick={closeMenu} className="text-white hover:text-gray-300">Home</Link>
    <Link to="/about" onClick={closeMenu} className="text-white hover:text-gray-300">About Us</Link>
    <Link to="/services" onClick={closeMenu} className="text-white hover:text-gray-300">Services</Link>
    <Link to="/why-choose-us" onClick={closeMenu} className="text-white hover:text-gray-300">Why Choose Us</Link>
    <Link to="/contact" onClick={closeMenu} className="text-white hover:text-gray-300">Contact Us</Link>
  </div>
)}


      </nav>
    </header>
  );
}
