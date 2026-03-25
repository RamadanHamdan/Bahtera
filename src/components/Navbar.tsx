"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container fade-in-up">
        <Link 
          href="/" 
          className="logo" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image src="/bahtera-logo.svg" alt="logo bahtera" width={50} height={40} className="logo-image brightness-0 invert"/>
        </Link>

        {/* Center: Desktop internal links */}
        <div className="hidden md:flex gap-10 items-center text-black">
          <a href="#features" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#product" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
          <a href="#faq" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {/* Mobile links only (hidden on desktop via css or overwritten) */}
          <a href="#features" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#product" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
          <a href="#faq" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          
          <a href="#download" className="btn btn-primary btn-sm" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="hammer" style={{
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span className="hammer" style={{
            opacity: isMobileMenuOpen ? '0' : '1'
          }}></span>
          <span className="hammer" style={{
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }}></span>
        </button>
      </div>
    </nav>
  );
}
