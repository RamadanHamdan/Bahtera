"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button, Form, Input, Image as HeroImage } from "@heroui/react";
import { createLayout } from 'animejs';
import * as React from "react";
import { SplittingText, type SplittingTextProps } from '@/components/animate-ui/primitives/texts/splitting';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from "embla-carousel";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";
import { ShimmeringText } from "@/components/animate-ui/primitives/texts/shimmering";
import WhatWeOffer from "@/components/WhatWeOffer";
import Product from "@/components/Product";
import Contact from "@/components/Contact";
import OurServices from "@/components/OurServices";
import About from "@/components/About";

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
    // @ts-expect-error SplittingText props type mismatch with optional animation fields
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
  const SLIDE_COUNT = 13;
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

export default function Home() {
  const [currentPage] = React.useState(1);

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
    { name: "Mebeul", src: "/images/mebeul.png" }
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
                <p className="hero-subtitle fade-in-up delay-4 mt-2 mb-1! text-sm md:text-base">
                  <ShimmeringText className="fade-in-up delay-4 var(--color-white)" text="Bahtera Arta Niaga adalah perusahaan" />
                  <br />
                  <ShimmeringText className="fade-in-up delay-4 text-white" text="yang bergerak di bidang elektronik" />
                  <br />
                  <ShimmeringText className="fade-in-up delay-4 text-white" text="dan informasi teknologi." />
                </p>
                <div className="hero-actions fade-in-up delay-4 mb-6!">
                  <a href="#download" className="btn btn-primary btn-sm">Get Started</a>
                  <a href="#features" className="btn btn-secondary btn-sm">Our Services</a>
                </div>
              </ScrollReveal>
            </div>
            <div className="mt-12">
              <ShimmeringText className="fade-in-up delay-4 md:text-4xl mb-2! text-white" text="YOUR TRUSTED" />
              <br />
              <ShimmeringText className="fade-in-up delay-4 md:text-4xl mb-2! text-white" text="PARTNER IN" />
              <br />
              <ShimmeringText className="fade-in-up delay-4 md:text-4xl mb-2! text-white" text="IT SOLUTION" />
            </div>

          </header>
        </div>
        <WhatWeOffer />
       <Product />
        <OurServices />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
