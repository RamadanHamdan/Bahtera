export default function Footer() {
  return (
    <footer className="w-full bg-[#919ccf] rounded-[16px] px-1 py-1 flex flex-col gap-10">

      {/* Main row: brand block left — nav columns right */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

        {/* Left: Logo + address below */}
        <div className="flex flex-col gap-10">
          <span className="logo-text text-sm font-bold text-white mt-10! pl-10!">Bahtera Arta Niaga</span>
          <a
            href="https://www.google.com/maps/search/Jl.+Cibaduyut+Raya+Cluster+Cibaduyut+No.+7,+Kel.+Cibaduyut+Wetan,+Kec.+Bojongloa+Kidul,+Kota+Bandung,+Provinsi+Jawa+Barat,+Kode+Pos:+40238/@-6.9603898,107.5914385,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
            className="text-xs text-[#52525b] max-w-[180px] leading-relaxed pl-10!"
          >
            Jl. Cibaduyut Raya, Cluster Cibaduyut No. 7,<br />
            Bojongloa Kidul, Bandung 40238
          </a>
        </div>

        {/* Right: nav columns */}
        <div className="flex flex-wrap gap-10 lg:gap-14 mt-10! pr-10!">

          {/* Address column intentionally left combined above; Contact Us */}
          <div className="footer-logo-text flex flex-col gap-3 lg:gap-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#52525b] mb-10!">Contact Us</h4>
            <a href="mailto:bartaniaga@gmail.com" className="text-sm text-[#ffffff] transition-colors">Email</a>
            <a href="https://wa.me/6285111443335" className="text-sm text-[#ffffff] transition-colors">WhatsApp</a>
          </div>

          {/* Support */}
          <div className="footer-logo-text flex flex-col gap-3 lg:gap-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#52525b] mb-10!">Support</h4>
            <a href="#" className="text-sm text-[#ffffff] transition-colors">Help Center</a>
            <a href="#" className="text-sm text-[#ffffff] transition-colors">Contact Us</a>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08]" />

      {/* Copyright */}
      <p className="text-sm text-[#52525b] pl-9! mb-10!">&copy; 2026 Bahtera Arta Niaga. All rights reserved.</p>

    </footer>
  );
}