"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { createLayout } from 'animejs';
import * as React from "react";
import { SplittingText, type SplittingTextProps } from '@/components/animate-ui/primitives/texts/splitting';
import { cn } from '@/lib/utils';
import { ShimmeringText } from "@/components/animate-ui/primitives/texts/shimmering";
import WhatWeOffer from "@/components/WhatWeOffer";
import Product from "@/components/Product";

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

function SplittingTextDemo({type, delay, animation}: SplittingTextDemoProps) {
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

 function ShimmeringTextDemo({wave, duration} : ShimmeringTextDemoProps) {
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
            <div className="fade-in mb-12! delay-4 flex flex-col items-start text-left w-full max-w-7xl mx-auto px-6 md:px-12">
              <ScrollReveal>
                <div className="text-left! pl-22! w-full">
                  <ShimmeringText className="fade-in-up delay-4 text-3xl md:text-6xl lg:text-4xl font-bold mb-2! text-white" text="YOUR TRUSTED PARTNER" />
                  <br />
                  <ShimmeringText className="fade-in-up delay-4 text-3xl md:text-6xl lg:text-4xl font-bold mb-4! text-[#00b4d8]" text="IN IT SOLUTIONS" />
                </div>
                <div className="hero-actions fade-in-up delay-4 mb-6! text-left pl-22! w-full">
                  <p className="fade-in-up delay-4 mt-4 mb-1! text-base md:text-xl text-left text-white max-w-3xl">
                    <ShimmeringText className="fade-in-up delay-4 text-white" text="Spesialis terdepan di bidang pengadaan perangkat elektronik dan" />
                    <br />
                    <ShimmeringText className="fade-in-up delay-4 text-white" text="Sistem IT yang memberdayakan transformasi digital organisasi modern." />
                  </p>
                </div>
                <div className="mt-4! gap-2! pl-22! flex items-center justify-start">
                  <a href="#download" className="btn mt-1! btn-primary btn-sm">Get Started</a>
                  <a href="#features" className="btn mt-1! btn-secondary btn-sm">Our Services</a>
                </div>
              </ScrollReveal>
            </div>
          </header>
        </div>
        <WhatWeOffer />
        <Product />
        <OurServices />
        <About />
        <Footer />
      </div>
    </main>
  );
}
