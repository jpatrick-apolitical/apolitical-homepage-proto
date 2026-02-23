'use client';

import { HomepageHeader } from '../../_components/homepage/homepage-header';
import { ImageCarousel } from '../../_components/homepage/image-carousel';
import { Footer } from '../../_components/footer/footer';

export default function MultilateralsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <HomepageHeader />

      {/* Hero Section */}
      <section className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-24 md:pb-32">
        <div className="max-w-[980px] mx-auto">
          <div className="grid md:grid-cols-[3fr_2.2fr] gap-8 md:gap-12 items-start">
            {/* Headline and body text */}
            <div>
              <span className="inline-block bg-gradient-to-b from-gray-800/50 to-gray-900/80 border border-white/10 rounded-md px-3 py-1 text-sm text-white mb-4">
                Multilaterals
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-center md:text-left">
                Collaborate on global governance challenges
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

      {/* Section 1 - Image Left, Text Right */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Title - mobile only, shown first */}
            <h2 className="md:hidden text-2xl font-medium leading-tight order-1">
              Scale impact across borders
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
                Scale impact across borders
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg">
                Multilateral organisations play a crucial role in building global public sector capability. We help you reach and support public servants at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          {/* Mobile: Title, Carousel, Text */}
          <div className="flex flex-col md:hidden">
            <h2 className="text-2xl font-medium leading-tight mb-6">
              Evidence-based capacity building
            </h2>
            <div className="mb-6">
              <ImageCarousel />
            </div>
            <p className="text-gray-400 font-light text-base mb-8">
              Our platform provides data and insights on workforce capability, helping you design and measure the impact of capacity building programmes.
            </p>
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              Evidence-based capacity building
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg">
              Our platform provides data and insights on workforce capability, helping you design and measure the impact of capacity building programmes.
            </p>
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

      {/* Section 3 - Text Left, Image Right */}
      <section className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-32 md:pb-48 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Title - mobile only, shown first */}
            <h2 className="md:hidden text-2xl font-medium leading-tight order-1">
              A global network of public servants
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
                A global network of public servants
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg">
                Connect your programmes to Apolitical&apos;s worldwide community of public servants, enabling peer learning and knowledge exchange across regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
