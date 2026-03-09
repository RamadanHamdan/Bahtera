export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <div className="logo">
            <span className="logo-text">Bahtera Arta Niaga</span>
          </div>
          <p>Your Trusted Partners In IT Solutions</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Address</h4>
          <a href="https://www.google.com/maps/search/Jl.+Cibaduyut+Raya+Cluster+Cibaduyut+No.+7,+Kel.+Cibaduyut+Wetan,+Kec.+Bojongloa+Kidul,+Kota+Bandung,+Provinsi+Jawa+Barat,+Kode+Pos:+40238/@-6.9603898,107.5914385,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" className="footer-text">
            Jl. Cibaduyut Raya Cluster Cibaduyut No. 7, Kel. Cibaduyut Wetan, Kec. Bojongloa Kidul, Kota Bandung, Provinsi Jawa Barat, Kode Pos: 40238
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <a href="mailto:bartaniaga@gmail.com">Email</a>
          <a href="https://wa.me/6285111443335">WhatsApp</a>
        </div>


        <div className="footer-col">
          <h4 className="footer-heading">Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 Bahtera Arta Niaga. All rights reserved.</p>
      </div>
    </footer>
  );
}