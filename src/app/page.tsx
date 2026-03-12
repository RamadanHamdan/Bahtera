"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import pengadaanImg from "@/assets/images/pengadaan.png";
import purnajualImg from "@/assets/images/purnajual.png";
import pelatihanImg from "@/assets/images/pelatihan.png";
import bahteraImg from "@/assets/images/bahtera.png";
import bgBahteraImg from "@/assets/images/bg-bahtera.jpg";
import bgBahtera2Img from "@/assets/images/bg-bahtera2.jpg";
import bgBahtera9Img from "@/assets/images/bg-bahtera9.jpg";
import ifpImg from "@/assets/images/ifp.png";
import indoorImg from "@/assets/images/indoor.jpeg";
import outdoorImg from "@/assets/images/outdoor.jpeg";
import mrsImg from "@/assets/images/mrs.png";
import gensetImg from "@/assets/images/genset.png";
import { Card, CardFooter, Pagination } from "@heroui/react";
import pcAioImg from "@/assets/images/pc-aio.jpeg";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Image as HeroImage } from "@heroui/react";
import { createLayout } from 'animejs';
import React from "react";
import { CardBody, Avatar, Button } from "@heroui/react";



export function FaqSection() {
  const variants = ["bordered"] as const;

  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 mb-12 grid-container">
      {variants.map((variant) => (
        <div key={variant} className="w-full max-w-sm flex flex-col gap-4">
          <Input aria-label="Full Name" placeholder="Full Name" type="text" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
          <Input aria-label="Email" placeholder="Email" type="email" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
          <Input aria-label="Phone Number" placeholder="Phone Number" type="tel" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
          <Textarea aria-label="Message" placeholder="Message" type="text" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const products = React.useMemo(() => [
    { name: "PC AIO", src: pcAioImg.src },
    { name: "IFP", src: ifpImg.src },
    { name: "Indoor LED", src: indoorImg.src },
    { name: "Outdoor LED", src: outdoorImg.src },
    { name: "MRS", src: mrsImg.src },
    { name: "Genset", src: gensetImg.src },
    { name: "PC AIO Model 2", src: pcAioImg.src },
    { name: "IFP Model 2", src: ifpImg.src },
    { name: "Indoor LED Model 2", src: indoorImg.src },
    { name: "Outdoor LED Model 2", src: outdoorImg.src },
    { name: "MRS Model 2", src: mrsImg.src },
    { name: "Genset Model 2", src: gensetImg.src },
  ], []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, products]);

  React.useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('button.item')) as HTMLElement[];

    // Create demo dialog and append it to the body
    let $dialog = document.getElementById('layout-dialog') as HTMLDialogElement;
    if (!$dialog) {
      $dialog = document.createElement('dialog') as HTMLDialogElement;
      $dialog.id = 'layout-dialog';
      document.body.appendChild($dialog);
    }

    // Create the modal layout by setting the dialog as the root
    const modalLayout = createLayout($dialog, {
      children: ['.item', 'h2', 'h3', 'p', 'img'],
      properties: ['--overlay-alpha'],
    });

    const closeModal = () => {
      let $item: HTMLElement | undefined;
      modalLayout.update(() => {
        $dialog.close();
        $item = buttons.find((item) => item.classList.contains('is-open'));
        if ($item) {
          $item.classList.remove('is-open'); // Makes the clicked element visible again
          $item.focus(); // Focus to the closed element to preserve the keyboard navigation flow
        }
      });
    };

    const openModal = (e: Event) => {
      const $target = e.target as HTMLElement;
      const $item = $target.closest('.item') as HTMLElement | null;
      if (!$item) return;

      const $clone = $item.cloneNode(true);
      $dialog.innerHTML = ''; // Make sure old clones are removed from the modal before adding a new one
      $dialog.appendChild($clone); // Append the clicked element clone to the modal
      modalLayout.update(() => {
        $dialog.showModal(); // Open the modal
        $item.classList.add('is-open'); // Hide the clicked element
      }, {
        duration: $item.dataset.duration ? parseInt($item.dataset.duration, 10) : undefined // Custom duration depending of the button clicked
      });
    };

    buttons.forEach(($button) => $button.addEventListener('click', openModal));
    $dialog.addEventListener('cancel', closeModal);
    $dialog.addEventListener('click', closeModal);

    return () => {
      buttons.forEach(($button) => $button.removeEventListener('click', openModal));
      $dialog.removeEventListener('cancel', closeModal);
      $dialog.removeEventListener('click', closeModal);
    };
  }, [currentProducts]);

  return (
    <main>
      <Navbar />

      <div className="page-wrapper">

        {/* Hero Section — Card 1 */}
        <div className="page-card">
          <header
            className="hero"
            id="home"
            style={{
              backgroundImage: `url(${bgBahteraImg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(37, 45, 104, 0.8)',
            }}
          >
            {/* Hero Image */}
            <div className="fade-in delay-4 items-center">
              <ScrollReveal>
                <div className="w-full flex justify-center">
                  <HeroImage alt="Company Profile Image" src={bahteraImg.src} className="w-[420px] md:w-[350px] h-auto mb-1! mt-2! object-contain" />
                </div>
                <p className="hero-subtitle fade-in-up delay-2 mt-2 mb-1! text-sm md:text-base">
                  Bahtera Arta Niaga adalah perusahaan yang bergerak<br />di bidang elektronik dan informasi teknologi.
                </p>
                <div className="hero-actions fade-in-up delay-3 mb-6!">
                  <a href="#download" className="btn btn-primary btn-sm">Get Started</a>
                  <a href="#features" className="btn btn-secondary btn-sm">Our Services</a>
                </div>
              </ScrollReveal>
            </div>
            <div className="hero-content mt-2">
              <h1 className="fade-in-up delay-1 text-4xl md:text-6xl mb-4!">YOUR TRUSTED<br />PARTNER IN<br />IT SOLUTION</h1>
            </div>

          </header>
        </div>

        {/* Features Section — Card 2 */}
        <div className="page-card" id="features" style={{ background: 'var(--bg-surface)' }}>
          <section className="features section">
            <div className="section-header">
              <h2 className="section-title">What We Offer</h2>
            </div>
            <div className="features-grid container">
              {/* Feature 1 */}
              <ScrollReveal>
                <div className="feature-card">
                  <div className="feature-icon">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" /><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" /><path d="M6 13h12" /><path d="M6 17h12" /></svg>
                    </div>
                  </div>
                  <h3>Solusi Pengadaan Komprehensif</h3>
                  <p className="feature-subtitle">Bahtera Arta Niaga menyediakan layanan pengadaan end-to-end untuk kebutuhan elektronik dan IT.</p>
                  <div className="asset-placeholder feature-asset sm">
                    <Image src={pengadaanImg} alt="Pengadaan" width={300} height={300} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 2 */}
              <ScrollReveal delayClass="delay-1">
                <div className="feature-card">
                  <div className="feature-icon">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" /></svg>
                    </div>
                  </div>
                  <h3>Purna Jual</h3>
                  <p>Komitmen kami tidak berhenti pada pengadaan, tetapi berlanjut melalui dukungan purna jual yang responsif.</p>
                  <div className="asset-placeholder feature-asset sm">
                    <Image src={purnajualImg} alt="Purnajual" width={300} height={300} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 3 */}
              <ScrollReveal>
                <div className="feature-card">
                  <div className="feature-icon">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.922 5.45a2 2 0 0 0-1.939 0L2.618 9.08a1 1 0 0 0-.02 1.838L10.08 13.08a2 2 0 0 0 1.939 0z" /><path d="M22 10v6M2 10l-1-1-9-5-9 5 9 5 9-5" /><path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" /><path d="M6 12v5" /><path d="M18 12v5" /></svg>
                    </div>
                  </div>
                  <h3>Pelatihan &amp; Edukasi</h3>
                  <p>Pelatihan bagi setiap pelanggan kami untuk memaksimalkan manfaat dari produk dan layanan kami.</p>
                  <div className="asset-placeholder feature-asset sm">
                    <Image src={pelatihanImg} alt="Pelatihan" width={300} height={300} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

        {/* Featured Products — Card 3 */}
        <div className="page-card" style={{ background: 'var(--bg-surface-elevated)' }}>
          <ScrollReveal className="section container">
            <div className="cta-banner-content flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left shrink-0">
                <h2>Featured Product</h2>
                <p>Maksimalkan produktivitas bisnis Anda dengan solusi teknologi informasi terintegrasi. Kami menawarkan produk unggulan seperti panel interaktif definisi tinggi dan sistem manajemen rapat canggih untuk memastikan setiap detik kerja Anda lebih bernilai.
                  Jelajahi koleksi kami dan temukan cara baru untuk bekerja lebih cerdas.</p>
              </div>
              <div className="md-asset flex-1 flex flex-col gap-4">
                <div className="w-full gap-2 grid grid-cols-3 grid-rows-2">
                  {currentProducts.map((product, index) => (
                    <button key={`${product.name}-${index}`} data-duration="1000" className="item col p-0 border-none bg-transparent cursor-pointer overflow-hidden rounded-xl text-left focus:outline-none relative h-[160px]">
                      <img alt={product.name} className="w-full h-full object-cover pointer-events-none" src={product.src} />
                    </button>
                  ))}
                </div>
                <div className="flex justify-center w-full">
                  <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} color="primary" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials — Card 4 */}
        <div className="page-card" id="testimonials" style={{ background: 'var(--bg-surface)' }}>
          <section className="testimonials section">
            <ScrollReveal className="section-header">
              <h2 className="section-title">Love From The Community</h2>
              <p className="section-subtitle">What learners are saying</p>
            </ScrollReveal>
            <div className="testimonials-grid container">
              <ScrollReveal>
                <div className="testimonial-card">
                  <p className="testimonial-text">&quot;I never write reviews but I absolutely love this, 3 lessons in and I&apos;m very impressed.&quot;</p>
                  <div className="testimonial-author">
                    <div className="author-avatar asset-placeholder xs"></div>
                    <span className="author-name">Andrea</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delayClass="delay-1">
                <div className="testimonial-card">
                  <p className="testimonial-text">&quot;Really thoughtful and well presented content. Easy to learn important concepts on the go when you have a few minutes of down time.&quot;</p>
                  <div className="testimonial-author">
                    <div className="author-avatar asset-placeholder xs"></div>
                    <span className="author-name">Peter</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="testimonial-card">
                  <p className="testimonial-text">&quot;Essential app for thinking logically and critically.&quot;</p>
                  <div className="testimonial-author">
                    <div className="author-avatar asset-placeholder xs"></div>
                    <span className="author-name">Luke</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delayClass="delay-1">
                <div className="testimonial-card">
                  <p className="testimonial-text">&quot;This is weirdly satisfying. It makes me feel like I&apos;m finally not wasting my time and doing something useful.&quot;</p>
                  <div className="testimonial-author">
                    <div className="author-avatar asset-placeholder xs"></div>
                    <span className="author-name">Evan</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

        {/* Final CTA — Card 5 */}
        <div className="page-card" id="download" style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, #1a1a30 100%)' }}>
          <section className="final-cta section">
            <ScrollReveal className="container">
              <h2 className="text-center mb-6">About Us</h2>
              <Card className="max-w-4xl mx-auto w-full border border-white/10 shadow-md" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <CardBody className="p-12 md:p-12 text-center">
                  <p className="text-base md:text-lg text-default-300 leading-relaxed">
                    Spesialis terdepan di bidang pengadaan perangkat elektronik dan sistem IT yang memberdayakan transformasi digital organisasi modern.
                    Kami menghadirkan solusi teknologi konkret melalui proses pengadaan yang terstruktur, efisien dan tepat sasaran.
                  </p>
                </CardBody>
                <CardFooter className="justify-center pt-0 pb-6">
                  <p className="font-bold text-white tracking-wider uppercase text-sm">Bahtera Arta Niaga</p>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </section>
        </div>

        {/* FAQ / Contact — Card 6 */}
        <div className="page-card" id="faq" style={{ background: 'var(--bg-surface)' }}>
          <section className="faq section">
            <ScrollReveal className="section-header">
              <h2 className="font-bold w-full text-7xl">Get In Touch</h2>
              <FaqSection />
              <FAQAccordion />
            </ScrollReveal>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
