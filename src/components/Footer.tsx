"use client";

import { CircleArrowUp } from "lucide-react";
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
} from '@/components/animate-ui/primitives/base/preview-card';

export default function Footer() {
  return (
    <footer className="w-full bg-[#919ccf] rounded-[16px] px-1 py-1 flex flex-col gap-10">

      {/* Main row: brand block left — nav columns right */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

        {/* Left: Logo + address below */}
        <div className="flex flex-col gap-10">
          <span className="logo-text text-sm font-semibold text-white mt-10! pl-10!">Bahtera Arta Niaga</span>
          <a
            href="https://maps.app.goo.gl/qpiwqnMYoXebvwnC6"
            className="text-xs text-[#52525b] max-w-[180px] leading-relaxed pl-10!"
          >
            Jl. K.H. Ahmad Dahlan No.20, Malabar, Kec.<br />
            Lengkong, Kota Bandung, Jawa Barat 40262
          </a>
        </div>

        {/* Right: nav columns */}
        <div className="flex flex-wrap gap-10 lg:gap-10 mt-12! pl-10! pr-10!">

          {/* Address column intentionally left combined above; Contact Us */}
          <div className="footer-logo-text flex flex-col gap-3 lg:gap-10">
            <h4 className="text-xl font-semibold text-[#52525b] mb-10!">Contact Us</h4>
            <a href="mailto:bartaniaga@gmail.com" className="text-sm text-[#ffffff] transition-colors">Email</a>
            <a href="https://wa.me/6285111443335" className="text-sm text-[#ffffff] transition-colors">WhatsApp</a>
          </div>

          {/* Support */}
          <div className="footer-logo-text flex flex-col gap-3 lg:gap-10">
            <h4 className="text-xl font-semibold text-[#52525b] mb-10!">Support</h4>
            <a href="#" className="text-sm text-[#ffffff] transition-colors">Help Center</a>
            <a href="#" className="text-sm text-[#ffffff] transition-colors">Contact Us</a>
          </div>

          {/* Support By */}
          <div className="footer-logo-text flex flex-col gap-3 lg:gap-10">
            <h4 className="text-xl font-semibold text-[#52525b] mb-10!">Supported By</h4>

            <PreviewCard>
              <PreviewCardTrigger
                render={
                  <a
                    className="size-25 items-center justify-center pl-2!"
                    href="https://mabel.co.id"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Mabel.co.id"
                  >
                    <img
                      src="/images/logo_mabel.png"
                      alt="Mabel"
                    />
                  </a>
                }
              />
            </PreviewCard>
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