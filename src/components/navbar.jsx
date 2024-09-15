

import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo2 from '/logo2.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 z-[999] bg-teal-400 text-gray-900 w-full px-8 py-6 shadow-lg flex justify-between items-center transition-all duration-700 ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      } ${isSticky ? 'sticky top-0' : ''}`}
    >
      <div className="flex">
        <img
          src={Logo2}
          alt="Logo"
          className="h-20 md:h-20 transform transition-transform duration-500 hover:rotate-6"
        />
      </div>

      <div className="links hidden md:flex gap-4 md:gap-10 items-center">
        <Link to="/" className="text-sm md:text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600">
          Home
        </Link>

        {/* <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-sm md:text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600 flex items-center"
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
              <Link to="/adoption" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
                Adoption
              </Link>
              <Link to="/consultancy" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
                Consultancy
              </Link>
              <Link to="/Matting" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
                Matting
              </Link>
              <Link to="/DogHostel" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
              DogHostel
              </Link>
              <Link to="/Grooming" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
              Grooming
              </Link>
              <Link to="/Training" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
              Training
              </Link>
            </div>
          )}
        </div> */}
        <div className="relative" ref={dropdownRef}>
  <button
    onClick={toggleDropdown}
    className="text-sm md:text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600 flex items-center"
  >
    Services
  </button>
  {isDropdownOpen && (
    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg max-h-48 overflow-hidden hover:overflow-y-auto transition-all duration-300 ease-in-out">
      <Link to="/adoption" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
        Adoption
      </Link>
      <Link to="/consultancy" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
        Consultancy
      </Link>
      <Link to="/matting" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
        Matting
      </Link>
      <Link to="/careshelter" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
      Careshelter
      </Link>
      <Link to="/grooming" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
        Grooming
      </Link>
      <Link to="/training" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300">
        Training
      </Link>
    </div>
  )}
</div>


        <Link to="/about" className="text-sm md:text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600">
          About Us
        </Link>
        <Link to="/contact" className="text-sm md:text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600">
          Contact
        </Link>
        <Link to="/Signup" className='border border-gray-900 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-md'>
          Sign Up
        </Link>
      </div>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-20 left-0 w-full bg-teal-50 text-gray-800 flex-col items-center py-6 space-y-6 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <Link to="/" className="text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600" onClick={toggleMenu}>
          Home
        </Link>

        <div className="relative">
          <button onClick={toggleDropdown} className="text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600">
            Services
          </button>
          {isDropdownOpen && (
            <div className="mt-2 w-40 bg-white shadow-lg rounded-lg">
              <Link to="/adoption" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300" onClick={toggleMenu}>
                Adoption
              </Link>
              <Link to="/consultancy" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300" onClick={toggleMenu}>
                Consultancy
              </Link>
              <Link to="/Matting" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300" onClick={toggleMenu}>
              Matting
              </Link>
              <Link to="/careshelter" className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-200 transition-colors duration-300" onClick={toggleMenu}>
              Careshelter
              </Link>
            </div>
          )}
        </div>
   

        <Link to="/about" className="text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/contact" className="text-lg capitalize font-semibold transition-transform transform hover:translate-y-[-2px] hover:text-gray-600" onClick={toggleMenu}>
          Contact
        </Link>
        <button className='border border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-lg'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
