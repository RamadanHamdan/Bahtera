"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Card, CardFooter, NumberInput, Pagination, CardBody, Button, Form, Input, Textarea, Image as HeroImage } from "@heroui/react";
import { createLayout } from 'animejs';
import * as React from "react";
import { SplittingText, type SplittingTextProps } from '@/components/animate-ui/primitives/texts/splitting';
import { cn } from '@/lib/utils';

import { TypingText } from '@/components/animate-ui/primitives/texts/typing';
import { EmblaOptionsType } from "embla-carousel";
import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";
import { ShimmeringText } from "@/components/animate-ui/primitives/texts/shimmering";

interface ShimmeringTextDemoProps {
  wave: boolean;
  duration: number;
}

const ANIMATIONS: Record<
  string,
  {
    initial: SplittingTextProps['initial'];
    animate: SplittingTextProps['animate'];
    transition: SplittingTextProps['transition'];
  } | null
> = {
  default: null,
  vibe: {
    initial: { y: 50, scale: 0.5, opacity: 0, x: 50, rotate: 90 },
    animate: { y: 0, scale: 1, opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  writing: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', bounce: 0, duration: 2 },
  },
};

interface SplittingTextDemoProps {
  type: SplittingTextProps['type'];
  delay: number;
  animation: keyof typeof ANIMATIONS;
}

export const SplittingTextDemo = ({
  type,
  delay,
  animation,
}: SplittingTextDemoProps) => {
  return (
    // @ts-expect-error
    <SplittingText
      key={`${type}-${delay}-${animation}`}
      className={cn('text-4xl font-semibold', type === 'lines' && 'text-xl')}
      type={type}
      delay={delay}
      initial={ANIMATIONS[animation]?.initial}
      animate={ANIMATIONS[animation]?.animate}
      transition={ANIMATIONS[animation]?.transition}
      text={
        type === 'lines'
          ? [
            'Introducing Splitting Text component',
            'Made with Motion. Highly customizable and easy to use.',
          ]
          : 'Splitting Text'
      }
    />
  );
};

export const ShimmeringTextDemo = ({
  wave,
  duration,
}: ShimmeringTextDemoProps) => {
  return (
    <ShimmeringText
      key={`${wave}-${duration}`}
      className="text-4xl font-semibold"
      wave={wave}
      duration={duration}
      text="Shimmering Text"
    />
  );
};

export const CarouselSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 12;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return <MotionCarousel slides={SLIDES} options={OPTIONS} />;
}


export function SubmitSection() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
        setErrorMsg(result.error ?? 'Pengiriman gagal, coba lagi.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Terjadi kesalahan jaringan, coba lagi.');
    }
  };

  return (
    <div className="w-full flex justify-center mt-12!">
      <Form ref={formRef} className="w-full max-w-sm flex flex-col items-center gap-8" onSubmit={onSubmit}>
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          type="email"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid name"
          label="Name"
          labelPlacement="outside"
          name="name"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone Number"
          labelPlacement="outside"
          name="phone"
          type="tel"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid message"
          label="Message"
          labelPlacement="outside"
          name="message"
        />
        <Button
          type="submit"
          variant="bordered"
          className="w-full mt-1"
          isLoading={status === 'loading'}
          isDisabled={status === 'loading'}
        >
          {status === 'loading' ? 'Mengirim...' : 'Submit'}
        </Button>

        {status === 'success' && (
          <div className="w-full text-center px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
            ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
          </div>
        )}
        {status === 'error' && (
          <div className="w-full text-center px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            ❌ {errorMsg}
          </div>
        )}
      </Form>
    </div>
  );
}

// export function FaqSection() {
//   const variants = ["bordered"] as const;

//   return (
//     <div className="w-full flex flex-col items-center justify-center mt-8 mb-12 grid-container">
//       {variants.map((variant) => (
//         <div key={variant} className="w-full max-w-sm flex flex-col gap-4">
//           <Input aria-label="Full Name" placeholder="Full Name" type="text" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
//           <Input aria-label="Email" placeholder="Email" type="email" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
//           <Input aria-label="Phone Number" placeholder="Phone Number" type="tel" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
//           <Textarea aria-label="Message" placeholder="Message" type="text" variant={variant} classNames={{ inputWrapper: "bg-white", input: "text-black dark:text-black placeholder:text-black/20 dark:placeholder:text-black/20" }} />
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const products = React.useMemo(() => [
    { name: "PC AIO", src: "/images/pc-aio.jpeg" },
    { name: "IFP", src: "/images/ifp.png" },
    { name: "Indoor LED", src: "/images/indoor.jpeg" },
    { name: "Outdoor LED", src: "/images/outdoor.jpeg" },
    { name: "MRS", src: "/images/mrs.png" },
    { name: "Genset", src: "/images/genset.png" },
    { name: "Acer", src: "/images/acer_baru.jpeg" },
    { name: "Asus", src: "/images/asus.png" },
    { name: "Axioo", src: "/images/axioo.png" },
    { name: "DAC", src: "/images/DAC.jpeg" },
    { name: "HP", src: "/images/HP.png" },
    { name: "Lenovo", src: "/images/LENOVO.jpeg" },
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
            className="hero fade-in"
            id="home"
            style={{
              backgroundImage: "url('/images/bg-bahtera.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'inherit',
              backgroundColor: 'rgba(37, 45, 104, 0.4)',
            }}
          >
            {/* Hero Image */}
            <div className="fade-in mt-1! delay-4 items-center">
              <ScrollReveal>
                <div className="w-full flex justify-center">
                  <HeroImage alt="Company Profile Image" src="/images/bahtera1.png" className="w-[220px] sm:w-[280px] md:w-[380px] h-auto mb-1! mt-2! object-contain" />
                </div>
                <p className="hero-subtitle fade-in-up delay-2 mt-2 mb-1! text-sm md:text-base">
                  <ShimmeringText className="fade-in-up delay-2 var(--color-neutral-500)" text="Bahtera Arta Niaga adalah perusahaan yang bergerak" />
                  <br />
                  <ShimmeringText className="fade-in-up delay-2 text-white" text="di bidang elektronik dan informasi teknologi." />
                </p>
                <div className="hero-actions fade-in-up delay-3 mb-6!">
                  <a href="#download" className="btn btn-primary btn-sm">Get Started</a>
                  <a href="#features" className="btn btn-secondary btn-sm">Our Services</a>
                </div>
              </ScrollReveal>
            </div>
            <div className="mt-12 leading-[1.05]">
              <ShimmeringText className="fade-in-up delay-2 md:text-4xl mb-2! text-white" text="YOUR TRUSTED" />
              <br />
              <ShimmeringText className="fade-in-up delay-2 md:text-4xl mb-2! text-white" text="PARTNER IN" />
              <br />
              <ShimmeringText className="fade-in-up delay-2 md:text-4xl mb-2! text-white" text="IT SOLUTION" />
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
                  <SplittingText text="Solusi Pengadaan Komprehensif" />
                  <SplittingText className="feature-subtitle" text="Bahtera Arta Niaga menyediakan layanan pengadaan end-to-end untuk kebutuhan elektronik dan IT." />
                  <div className="asset-placeholder feature-asset sm">
                    <Image src="/images/pengadaan.png" alt="Pengadaan" width={300} height={300} />
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
                  <SplittingText text="Purna Jual" />
                  <SplittingText className="feature-subtitle" text="Komitmen kami tidak berhenti pada pengadaan, tetapi berlanjut melalui dukungan purna jual yang responsif." />
                  <div className="asset-placeholder feature-asset sm">
                    <Image src="/images/purnajual.png" alt="Purnajual" width={300} height={300} />
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
                  <SplittingText text="Pelatihan &amp; Edukasi" />
                  <SplittingText className="feature-subtitle" text="Pelatihan bagi setiap pelanggan kami untuk memaksimalkan manfaat dari produk dan layanan kami." />
                  <div className="asset-placeholder feature-asset sm">
                    <Image src="/images/pelatihan.png" alt="Pelatihan" width={300} height={300} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

        {/* Featured Products — Card 3 */}
        <div className="page-card" id="product" style={{ background: 'var(--bg-surface-elevated)' }}>
          <ScrollReveal className="section container">
            <div className="cta-banner-content flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left shrink-0">
                <h2>Featured Product</h2>
                <p>Maksimalkan produktivitas bisnis Anda dengan solusi teknologi informasi terintegrasi. Kami menawarkan produk unggulan seperti panel interaktif definisi tinggi dan sistem manajemen rapat canggih untuk memastikan setiap detik kerja Anda lebih bernilai.
                  Jelajahi koleksi kami dan temukan cara baru untuk bekerja lebih cerdas.</p>
              </div>
              <div className="md-asset flex-1 flex flex-col gap-4">
                <div className="w-full gap-2 grid grid-cols-3 grid-rows-2">
                </div>
                <div className="flex justify-center w-full">
                  <CarouselSection />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials — Card 4 */}
        <div className="page-card" id="testimonials" style={{ background: 'var(--bg-surface)' }}>
          <section className="testimonials section">
            <ScrollReveal className="section-header">
              <h2 className="section-title">Our Services</h2>
            </ScrollReveal>
            <div className="testimonials-grid container">
              <ScrollReveal>
                <div className="testimonial-card">
                  <TypingText text="Your Trusted Partners In IT Solutions" />
                  <div className="testimonial-author">
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delayClass="delay-1">
                <div className="testimonial-card">
                  <TypingText text="Your Innovation Hub for IT Excellence" />
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="testimonial-card">
                  <TypingText text="Your Digital Transformation Starts Here" />
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
              <Card className="max-w-8xl mx-auto w-full border-5 border-white/10 shadow-lg" style={{ background: 'rgba(0,0,0,0.3)' }}>
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
          <section className="faq section" style={{ flex: 1 }}>
            <ScrollReveal className="section-header">
              <h2 className="font-bold w-full text-5xl">Contact Us</h2>
              <SubmitSection />
            </ScrollReveal>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
}
