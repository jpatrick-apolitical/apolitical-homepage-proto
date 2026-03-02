'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { HomepageHeader } from './homepage-header';
import { ImageCarousel } from './image-carousel';
import { Footer } from '../footer/footer';
import { BookDemoModal } from '../book-demo-modal';

interface HomepageProps {
  variant?: 'default' | 'subpage';
  title?: string;
}

const logos = [
  { src: '/logos/logo%201.svg', alt: 'Logo 1' },
  { src: '/logos/logo%202.svg', alt: 'Logo 2' },
  { src: '/logos/logo%203.svg', alt: 'Logo 3' },
  { src: '/logos/logo%204.svg', alt: 'Logo 4' },
  { src: '/logos/logo%207.svg', alt: 'Logo 7' },
  { src: '/logos/logo%208.svg', alt: 'Logo 8' },
  { src: '/logos/logo%209.svg', alt: 'Logo 9' },
  { src: '/logos/logo%2010.svg', alt: 'Logo 10' },
  { src: '/logos/logo%2011.svg', alt: 'Logo 11' },
  { src: '/logos/logo%2012.svg', alt: 'Logo 12' },
  { src: '/logos/logo%2013.svg', alt: 'Logo 13' },
  { src: '/logos/logo%2014.svg', alt: 'Logo 14' },
  { src: '/logos/logo%2015.svg', alt: 'Logo 15' },
  { src: '/logos/logo%2016.svg', alt: 'Logo 16' },
  { src: '/logos/logo%2019.svg', alt: 'Logo 19' },
];

export function Homepage({ variant = 'default', title }: HomepageProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <HomepageHeader />

      {/* Hero Section */}
      {variant === 'subpage' ? (
        <section className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-24 md:pb-32">
          <div className="max-w-[980px] mx-auto">
            <div className="grid md:grid-cols-[3fr_2.2fr] gap-8 md:gap-12 items-start">
              {/* Headline and body text */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-center md:text-left">
                  {title || 'Building AI-ready civil servants to scale government impact'}
                </h1>
              </div>

              {/* Right panel mockup */}
              <div className="hidden md:block bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-lg border border-white/10 p-6 h-[360px]">
                <div className="h-3 bg-white/10 rounded w-2/3 mb-4" />
                <div className="space-y-2">
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-8">
          <div className="max-w-[980px] mx-auto">
            {/* Desktop/Tablet: Left-aligned, Mobile: Centered */}
            <div className="max-w-3xl md:max-w-none">
              {/* Headline */}
              <h1 className="text-3xl md:text-[48px] lg:text-[60px] font-medium leading-[1.15] tracking-tight mb-6 text-center md:text-left">
                Redesigning public institutions for the age of AI
              </h1>

              {/* Subtitle */}
              <p className="hidden md:block text-gray-400 font-light text-base md:text-lg max-w-xl mb-8">
                Trusted by 500k+ public officials across 160 countries.
              </p>
              <p className="md:hidden text-gray-400 font-light text-base text-center mb-8 px-4">
                Trusted by 500k+ public officials across 160 countries.
              </p>

              {/* CTA */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <Link
                  href="#logos"
                  className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Screenshot Area - only show for default variant */}
      {variant === 'default' && (
        <section className="px-6 md:px-8 lg:px-12 py-8 md:py-16">
          <div className="max-w-[980px] mx-auto">
            <div className="relative">
              {/* Layered screenshot placeholders */}
              <div className="relative flex justify-center items-end gap-4 md:gap-6 h-[300px] md:h-[400px] lg:h-[500px]">
                {/* Left panel */}
                <div className="absolute left-0 bottom-0 w-[30%] h-[80%] bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-lg border border-white/10 hidden md:block" />
                
                {/* Center panel (main) */}
                <div className="relative w-full md:w-[50%] h-[90%] bg-gradient-to-b from-gray-800/60 to-gray-900/90 rounded-lg border border-white/10 z-10">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-white/10 rounded w-1/3" />
                      <div className="h-2 bg-white/5 rounded w-full" />
                      <div className="h-2 bg-white/5 rounded w-4/5" />
                      <div className="h-2 bg-white/5 rounded w-2/3" />
                      <div className="mt-6 space-y-2">
                        <div className="h-8 bg-white/5 rounded" />
                        <div className="h-8 bg-white/5 rounded" />
                        <div className="h-8 bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right panel */}
                <div className="absolute right-0 bottom-0 w-[35%] h-[75%] bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-lg border border-white/10 hidden md:block z-20">
                  <div className="p-4">
                    <div className="h-3 bg-white/10 rounded w-2/3 mb-4" />
                    <div className="space-y-2">
                      <div className="h-2 bg-white/5 rounded w-full" />
                      <div className="h-2 bg-white/5 rounded w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Logos Section - only show for default variant */}
      {variant === 'default' && (
        <section id="logos" className="py-16 md:py-24">
          <div className="text-center mb-12 px-6 md:px-8 lg:px-12">
            <p className="text-white font-light text-base md:text-lg">
              Powering the world&apos;s most advanced governments.
            </p>
          </div>

          {/* Logo Marquee */}
          <div className="max-w-[700px] mx-auto relative overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling track */}
            <div 
              className="flex items-center gap-12 md:gap-16"
              style={{
                animation: 'marquee 80s linear infinite',
                width: 'max-content',
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center h-10 md:h-12 flex-shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain grayscale invert opacity-70"
                  />
                </div>
              ))}
              {/* Duplicated set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center h-10 md:h-12 flex-shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain grayscale invert opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 1 - Futura - Image Left, Text Right */}
      <section id="features" className="px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Title - mobile only, shown first */}
            <h2 className="md:hidden text-2xl font-medium leading-tight order-1">
              Transform your institution with Futura
            </h2>
            
            {/* Image placeholder - second on mobile, left on desktop */}
            <div className="order-2 md:order-1 w-full bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-lg border border-white/10 p-6 aspect-[4/3]">
              <div className="h-3 bg-white/10 rounded w-2/3 mb-4" />
              <div className="space-y-2">
                <div className="h-2 bg-white/5 rounded w-full" />
                <div className="h-2 bg-white/5 rounded w-4/5" />
              </div>
            </div>
            
            {/* Text block - third on mobile, right on desktop */}
            <div className="order-3 md:order-2">
              <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
                Transform your institution with Futura
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg mb-4">
                Apolitical&apos;s flagship AI platform helps governments close the gap between ambition and adoption. Built on one of the world&apos;s largest datasets on how public servants actually work, Futura pinpoints where AI will deliver the greatest impact and builds the capabilities to get there.
              </p>
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-1 text-white hover:text-gray-300 text-sm font-medium transition-colors"
              >
                Book a demo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Academies */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          {/* Mobile: Title, Carousel, Text */}
          <div className="flex flex-col md:hidden">
            <h2 className="text-2xl font-medium leading-tight mb-6">
              Branded Academies that upskill at scale
            </h2>
            <div className="mb-6">
              <ImageCarousel />
            </div>
            <div className="mb-8">
              <p className="text-gray-400 font-light text-base mb-4">
                Launch curated, co-branded learning programmes designed around your organisation&apos;s priorities. Each Academy combines a bespoke landing page, tailored certificate track, and focused curriculum your audience can complete at their own pace.
              </p>
              <Link
                href="/academies"
                className="inline-flex items-center gap-1 text-white hover:text-gray-300 text-sm font-medium transition-colors"
              >
                Learn more
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              Branded Academies that upskill at scale
            </h2>
            <div>
              <p className="text-gray-400 font-light text-base md:text-lg mb-4">
                Launch curated, co-branded learning programmes designed around your organisation&apos;s priorities. Each Academy combines a bespoke landing page, tailored certificate track, and focused curriculum your audience can complete at their own pace.
              </p>
              <Link
                href="/academies"
                className="inline-flex items-center gap-1 text-white hover:text-gray-300 text-sm font-medium transition-colors"
              >
                Learn more
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Desktop Feature Cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-xl border border-white/10 p-6 aspect-[4/3]">
              <div className="h-full flex flex-col justify-end">
                <div className="h-2 bg-white/10 rounded w-2/3 mb-2" />
                <div className="h-2 bg-white/5 rounded w-1/2" />
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-xl border border-white/10 p-6 aspect-[4/3]">
              <div className="h-full flex flex-col justify-end">
                <div className="h-2 bg-white/10 rounded w-3/5 mb-2" />
                <div className="h-2 bg-white/5 rounded w-2/5" />
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-xl border border-white/10 p-6 aspect-[4/3]">
              <div className="h-full flex flex-col justify-end">
                <div className="h-2 bg-white/10 rounded w-1/2 mb-2" />
                <div className="h-2 bg-white/5 rounded w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Platform breadth - Text Left, Image Right */}
      <section className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-32 md:pb-48 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Title - mobile only, shown first */}
            <h2 className="md:hidden text-2xl font-medium leading-tight order-1">
              AI-powered tools, community, and insight for the public sector
            </h2>
            
            {/* Image placeholder - second on mobile, right on desktop */}
            <div className="order-2 md:order-2 w-full bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-lg border border-white/10 p-6 aspect-[4/3]">
              <div className="h-3 bg-white/10 rounded w-2/3 mb-4" />
              <div className="space-y-2">
                <div className="h-2 bg-white/5 rounded w-full" />
                <div className="h-2 bg-white/5 rounded w-4/5" />
              </div>
            </div>
            
            {/* Text block - third on mobile, left on desktop */}
            <div className="order-3 md:order-1">
              <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
                AI-powered tools, community, and insight for the public sector
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg">
                From purpose-built tools that fix real government pain points to a global community of 500,000+ public servants sharing what works — Apolitical combines cutting-edge AI with deep public sector expertise to drive measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

