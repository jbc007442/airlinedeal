import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import logo from '../assets/A.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // ✅ Hide nav links on these routes
  const hideNavRoutes = ['/results'];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="AirLineDealHub Icon" className="h-16 w-auto" />
            <span className="text-xl font-extrabold tracking-wide text-white font-[Poppins]">
              FirLine<span className="text-yellow-400">Deal</span>Hub
            </span>
          </Link>
        </div>

        {/* ✅ Desktop Menu (hidden on /results) */}
        {!hideNav && (
          <nav className="hidden md:flex gap-6 justify-end mr-20 flex-1">
            <Link
              to="/"
              className={`hover:text-gray-300 ${isActive('/') ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-gray-300 ${
                isActive('/about') ? 'border-b-2 border-white' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-gray-300 ${
                isActive('/contact') ? 'border-b-2 border-white' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        )}

        {/* Desktop Right - Support Info */}
        <div className="hidden md:flex flex-col items-end text-sm leading-tight">
          <span className="font-semibold text-blue-100">Call Us</span>

          {/* Phone with animation */}
          <div className="flex items-center gap-2 relative">
            <span className="relative inline-flex h-10 w-10 rounded-full bg-blue-600 text-white items-center justify-center animate-vibrate">
              <PhoneCall size={24} />
            </span>
            <span className="text-xl font-bold text-white">(888) 501-6590</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        {!hideNav && (
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        )}
      </div>

      {/* ✅ Offcanvas Menu (hidden on /results) */}
      {!hideNav && (
        <div
          className={`fixed top-0 right-0 z-50 h-full w-64 bg-blue-700 text-white transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
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
              className={isActive('/') ? 'text-blue-400' : ''}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={isActive('/about') ? 'text-blue-400' : ''}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={isActive('/contact') ? 'text-blue-400' : ''}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Overlay (mobile menu backdrop) */}
      {isOpen && !hideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;





//  <header className="bg-blue-500 text-white">
//         <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="AirLineDealHub Icon"
//               className="h-8 w-auto md:h-14 transition-all"
//             />
//             <span className="text-sm md:text-xl font-extrabold tracking-wide text-white font-[Poppins] leading-none">
//               AirLine<span className="text-yellow-400">Deal</span>Hub
//             </span>
//           </Link>

//           {/* Phone Number */}
//           <div className="flex items-center gap-2 md:gap-3">
//             {/* Call Us (desktop only) */}
//             <span className="hidden md:block font-semibold text-blue-100 text-sm">Call Us</span>

//             {/* Phone Icon */}
//             <span className="relative inline-flex h-7 w-7 md:h-10 md:w-10 rounded-full bg-blue-600 text-white items-center justify-center animate-vibrate">
//               <PhoneCall size={16} className="md:size-6" />
//             </span>

//             {/* Phone Number */}
//             <a
//               href="tel:8885016590"
//               className="font-bold text-white text-sm md:text-xl leading-none hover:text-yellow-300 transition"
//             >
//               (888) 501-6590
//             </a>
//           </div>
//         </div>
//       </header>