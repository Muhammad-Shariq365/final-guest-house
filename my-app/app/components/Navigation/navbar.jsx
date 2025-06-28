'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 invisible ">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              BH
            </div>
            <span className="text-xl font-semibold text-blue-800">Blue Horizon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center mr-96 space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
           
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-xl">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
           
          </div>
        )}
      </div>
    </nav>
  );
}

// Reusable link components
function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-blue-900 hover:text-orange-500 transition-colors font-medium px-3 py-2 rounded-md hover:bg-blue-50"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <Link 
      href={href} 
      className="block py-3 px-4 text-blue-900 hover:bg-blue-50 rounded transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}