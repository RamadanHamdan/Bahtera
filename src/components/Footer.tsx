export default function Footer() {
  return (
    <footer className="w-full bg-[#181D1F] rounded-[16px] px-12 py-10 flex flex-col gap-8">

      {/* Main row: brand block left — nav columns right */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

        {/* Left: Logo + address below */}
        <div className="flex flex-col gap-4">
          <span className="logo-text text-sm font-bold text-white">Bahtera Arta Niaga</span>
          <a
            href="https://www.google.com/maps/search/Jl.+Cibaduyut+Raya+Cluster+Cibaduyut+No.+7,+Kel.+Cibaduyut+Wetan,+Kec.+Bojongloa+Kidul,+Kota+Bandung,+Provinsi+Jawa+Barat,+Kode+Pos:+40238/@-6.9603898,107.5914385,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
            className="text-xs text-[#71717a] hover:text-[#a1a1aa] max-w-[180px] leading-relaxed"
          >
            Jl. Cibaduyut Raya, Cluster Cibaduyut No. 7,<br />
            Bojongloa Kidul, Bandung 40238
          </a>
        </div>

        {/* Right: nav columns */}
        <div className="flex flex-wrap gap-10 lg:gap-14">

          {/* Address column intentionally left combined above; Contact Us */}
          <div className="flex flex-col gap-3 lg:gap-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#52525b]">Contact Us</h4>
            <a href="mailto:bartaniaga@gmail.com" className="text-sm text-[#d4d4d8] hover:text-white transition-colors">Email</a>
            <a href="https://wa.me/6285111443335" className="text-sm text-[#d4d4d8] hover:text-white transition-colors">WhatsApp</a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 lg:gap-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#52525b]">Support</h4>
            <a href="#" className="text-sm text-[#d4d4d8] hover:text-white transition-colors">Help Center</a>
            <a href="#" className="text-sm text-[#d4d4d8] hover:text-white transition-colors">Contact Us</a>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08]" />

      {/* Copyright */}
      <p className="text-sm text-[#52525b]">&copy; 2026 Bahtera Arta Niaga. All rights reserved.</p>

    </footer>
  );
}