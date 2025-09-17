import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold">
            AirLineDealHub
          </Link>
        </div>

        {/* Desktop Menu - Center */}
        <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className={`hover:text-gray-300 ${
              isActive("/") ? "border-b-2 border-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-300 ${
              isActive("/about") ? "border-b-2 border-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-300 ${
              isActive("/contact") ? "border-b-2 border-white" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right - Support Info */}
        <div className="hidden md:flex flex-col items-end text-sm leading-tight">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="text-2xl font-semibold">24/7 Support</span>
          </div>
          <span className="font-bold">+1 (800) 123-4567</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-blue-700 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={isActive("/") ? "text-blue-400" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={isActive("/about") ? "text-blue-400" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={isActive("/contact") ? "text-blue-400" : ""}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
