'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800/50 to-gray-900/80 px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-[980px] mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1 - Explore */}
          <div>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Events
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Courses
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Articles
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Communities
              </Link>
            </nav>
          </div>

          {/* Column 2 - Resources */}
          <div>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Support FAQ
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Post on Apolitical
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Who can join
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Guidelines & values
              </Link>
            </nav>
          </div>

          {/* Column 3 - Company */}
          <div>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                News
              </Link>
              <Link href="/insights" className="text-gray-400 hover:text-gray-300 transition-colors">
                Insights
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Our story
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Meet our team
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Partner with us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Get in touch
              </Link>
            </nav>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-wider uppercase mb-4">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Trust
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Privacy policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Terms & conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Cookie policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                Accessibility statement
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                AI principles
              </Link>
            </nav>

            {/* Data Protection Officers */}
            <div className="mt-6">
              <p className="text-white text-sm font-medium tracking-wider uppercase mb-1">
                Data Protection Officer
              </p>
              <Link href="mailto:dpo@apolitical.co" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                dpo@apolitical.co
              </Link>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm font-medium tracking-wider uppercase mb-1">
                EU Data Protection Officer
              </p>
              <Link href="mailto:dpo.agl@apolitical.foundation" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                dpo.agl@apolitical.foundation
              </Link>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
          {/* London Address */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-2">
              London Address
            </h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              Church House Westminster<br />
              Deans Yard<br />
              London, SW1P 3NZ<br />
              United Kingdom
            </address>
          </div>

          {/* Washington DC Address */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-2">
              Washington DC Address
            </h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              1100 15th St NW<br />
              Washington, DC 20005<br />
              United States
            </address>
          </div>

          {/* Berlin Address */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-2">
              Berlin Address
            </h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              Torstraße 220<br />
              10115 Berlin<br />
              Germany
            </address>
          </div>

          {/* Registered Address + Contact */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-2">
              Registered Address
            </h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed mb-6">
              20–22 Wenlock Road<br />
              London, N1 7GU<br />
              United Kingdom
            </address>

            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-1">
              For Platform Support
            </h4>
            <Link href="mailto:concierge@apolitical.co" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
              concierge@apolitical.co
            </Link>

            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-1 mt-4">
              For Business Inquiries
            </h4>
            <Link href="mailto:hello@apolitical.co" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
              hello@apolitical.co
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
