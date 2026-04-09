"use client";

import { useState, useEffect } from "react";
import React from "react";
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

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/whatweoffer');
  };

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('product');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/product');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/contact');
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/about');
  };

  const handleOurServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('testimonials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/testimonials');
  };

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
          <a href="/whatweoffer" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={handleFeaturesClick}>Features</a>
          <a href="/product" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={handleProductClick}>Product</a>
          <a href="/testimonials" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={handleOurServicesClick}>Our Services</a>
          <a href="/about" className="text-sm font-medium hover:text-[#1a1a2e]" onClick={handleAboutClick}>About Us</a>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="/whatweoffer" className="md:hidden" onClick={handleFeaturesClick}>Features</a>
          <a href="/product" className="md:hidden" onClick={handleProductClick}>Product</a>
          <a href="/about" className="md:hidden" onClick={handleAboutClick}>About Us</a>
          <a href="/testimonials" className="md:hidden" onClick={handleOurServicesClick}>Our Services</a>
          
          <a href="/contact" className="btn btn-primary btn-sm" onClick={handleContactClick}>
            Contact Us
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
