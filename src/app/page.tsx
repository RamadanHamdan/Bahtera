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
import {Input} from "@heroui/input";
import {Textarea} from "@heroui/input";
import {Image as HeroImage} from "@heroui/react";

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
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1 className="fade-in-up delay-1">YOUR TRUSTED<br />IN IT SOLUTION</h1>
          <p className="hero-subtitle fade-in-up delay-2">
            We are a leading IT solutions provider that offers a range of services to help businesses thrive in the digital age.
          </p>
          <div className="hero-actions fade-in-up delay-3">
            <a href="#download" className="btn btn-primary btn-lg">Get Started</a>
            <a href="#features" className="btn btn-secondary btn-lg">Our Services</a>
          </div>
        </div>
        
        {/* Hero Image Asset Placeholder */}
        <div className="hero-content fade-in delay-4">
          <ScrollReveal>
          <HeroImage alt="Company Profile Image" src={bahteraImg.src} width={1000} height={800}/>
          </ScrollReveal>
          </div>
        
      </header>
      

      {/* Features Section */}
      <section className="features section" id="features">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="features-grid container">
          {/* Feature 1 */}
          <ScrollReveal>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="items-center justify-center lucide lucide-warehouse-icon lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>
                </div>
              </div>
              <h3>Solusi Pengadaan Komprehensif</h3>
              <p>Bahtera Arta Niaga menyediakan layanan pengadaan end-to-end untuk kebutuhan elektronik dan IT.</p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="items-center justify-center lucide lucide-wallet-cards-icon lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>
                </div>
              </div>
              <h3>Purna Jual</h3>
              <p>Komitmen kami tidak berhenti pada pengadaan, tetapi berlanjut melalui dukungan purna jual yang responsif.</p>
              <div className="asset-placeholder feature-asset sm">
                <Image src={purnajualImg} alt="Pengadaan" width={300} height={300} />
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="items-center justify-center lucide lucide-warehouse-icon lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>
                </div>
              </div>
              <h3>Pelatihan & Edukasi</h3>
              <p>Pelatihan bagi setiap pelanggan kami untuk memaksimalkan manfaat dari produk dan layanan kami.</p>
              <div className="asset-placeholder feature-asset sm">
                <Image src={pelatihanImg} alt="Pengadaan" width={300} height={300} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Dive CTA Section */}
      <ScrollReveal className="section container">
        <div className="cta-banner-content">
          <h2>Everything you need for better reasoning</h2>
          <p>Take individual lessons that catch your eye, or work through complete courses on core topics.</p>
          <div className="asset-placeholder large-asset">
            <span>Product Dashboard Asset (Replace me)</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Testimonials Section */}
      <section className="testimonials section" id="testimonials">
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

      {/* Final CTA Section */}
      <section className="final-cta section" id="download">
        <ScrollReveal className="container">
          <h2>Protect yourself from misinformation</h2>
          <p>Learn to recognize manipulation and AI slop</p>
          <a href="#" className="btn btn-primary btn-lg shine-effect">Download Reasonal</a>
          
          <div className="asset-placeholder download-asset">
            <span>App Store Badges / Phone Mockup</span>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Section */}
      <section className="faq section " id="faq">
        <ScrollReveal className="section-header">
          <h2 className="font-bold w-full text-7xl">Get In Touch</h2>
          <FaqSection />
          <FAQAccordion />
        </ScrollReveal>

      </section>

      <Footer />
    </main>
  );
}
