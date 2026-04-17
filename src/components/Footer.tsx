"use client";

import { CircleArrowUp } from "lucide-react";
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
} from '@/components/animate-ui/primitives/base/preview-card';
import { ShimmeringText } from "./animate-ui/primitives/texts/shimmering";

export default function Footer() {
  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/whatweoffer');
  };

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('product');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/product');
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/about');
  };

  const handleOurServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('testimonials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.pushState(null, '', '/testimonials');
  };

  return (
    <footer className="w-full bg-[#919ccf] rounded-[16px] px-1 py-1 flex flex-col gap-8">

      {/* Main row: brand block left — nav columns right */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">

        {/* Left: Logo + address below */}
        <div className="flex flex-col lg:gap-2 mt-12! pl-10!">
          <ShimmeringText className="fade-in-up delay-4 var(--color-white) text-lg font-semibold mb-6!" text="Kantor Pusat" />
          <a
            href="https://maps.app.goo.gl/qpiwqnMYoXebvwnC6"
            className="text-sm text-[#52525b] leading-relaxed max-w-[380px]"
          >
            Jl. K.H. Ahmad Dahlan No.20, Malabar,
            <br />
            Kec. Lengkong, Kota Bandung, Jawa Barat 40262
          </a>
        </div>

        <div className="flex flex-col lg:gap-2 mt-12!">
          <ShimmeringText className="fade-in-up delay-4 var(--color-white) text-lg font-semibold mb-4!" text="Bahtera Arta Niaga" />
          <div className="flex flex-col justify-center items-center mb-8!">
            Your Trusted Partner in IT Solutions.
            <br />
            Fokus pada penyediaan infrastruktur
            <br />
            teknologi mutakhir untuk sektor korporasi dan pemerintahan.
          </div>
        </div>


        {/* Right: nav columns */}
        <div className="flex flex-wrap gap-8 lg:gap-4 mt-11! pl-10! pr-10!">

          {/* Address column intentionally left combined above; Contact Us */}
          <div className="flex flex-col lg:gap-2">
            <ShimmeringText className="fade-in-up delay-4 var(--color-white) text-lg font-semibold mb-6!" text="Company" />
            <a href="/whatweoffer" className="text-sm text-[#ffffff] transition-colors" onClick={handleFeaturesClick}>Features</a>
            <a href="/product" className="text-sm text-[#ffffff] transition-colors" onClick={handleProductClick}>Product</a>
            <a href="/ourservices" className="text-sm text-[#ffffff] transition-colors" onClick={handleOurServicesClick}>Our Services</a>
            <a href="/about" className="text-sm text-[#ffffff] transition-colors" onClick={handleAboutClick}>About Us</a>
          </div>

          {/* Support By */}
          <div className="flex flex-col lg:gap-2">
            <ShimmeringText className="fade-in-up delay-4 var(--color-white) text-lg font-semibold mb-6!" text="Support" />
            <a href="mailto:bartaniaga@gmail.com" className="text-sm text-[#ffffff] transition-colors">Email</a>
            <a href="https://wa.me/6285111443335" className="text-sm text-[#ffffff] transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08]" />

      {/* Copyright + Back to Top */}
      <div className="flex items-center justify-between pl-9! pr-9! mb-10!">
        <p className="text-sm text-[#52525b]">&copy; 2026 Bahtera Arta Niaga. All rights reserved.</p>
        <CircleArrowUp
          className="footer-back-to-top cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </footer >
  );
}