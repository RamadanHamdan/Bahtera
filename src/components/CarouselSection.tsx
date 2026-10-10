'use client'

import { EmblaOptionsType } from "embla-carousel";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";



export default function CarouselSection() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 13;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return <MotionCarousel slides={SLIDES} options={OPTIONS} />;
}