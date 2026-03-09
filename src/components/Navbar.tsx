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
      <div className="nav-container">
        <Link 
          href="/" 
          className="logo" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image src="/bahtera-logo.svg" alt="logo bahtera" width={80} height={60} className="logo-image text-to-white"/>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#download" className="btn btn-primary btn-sm" onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
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
