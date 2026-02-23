'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, BookOpen, Users, Wrench, GraduationCap, Building2, Handshake, Globe, Award } from 'lucide-react';

const productsMenu = [
  {
    icon: Users,
    title: 'Transformation',
    description: 'Transform your workforce and institution powered by Futura',
    href: '/transformation',
  },
  {
    icon: GraduationCap,
    title: 'Learning',
    description: 'Upskill your workforce with hands-on AI courses.',
    href: '/learning',
  },
  {
    icon: Globe,
    title: 'Communities',
    description: 'Connect with peers solving similar challenges.',
    href: '/communities',
  },
  {
    icon: Wrench,
    title: 'Tools',
    description: 'Purpose-built AI tools for the public sector.',
    href: '/tools',
  },
  {
    icon: BookOpen,
    title: 'Insights',
    description: 'Guides, case studies, and research.',
    href: '/insights',
  },
];

const partnersMenu = [
  {
    icon: Building2,
    title: 'Public Service',
    description: 'Transform public sector capabilities at scale.',
    href: '/partners/public-service',
  },
  {
    icon: Globe,
    title: 'Multilaterals',
    description: 'Collaborate on global governance challenges.',
    href: '/partners/multilaterals',
  },
  {
    icon: Award,
    title: 'Foundations',
    description: 'Fund and support public sector innovation.',
    href: '/partners/foundations',
  },
  {
    icon: Handshake,
    title: 'Corporations',
    description: 'Drive social impact through strategic partnership.',
    href: '/partners/corporations',
  },
  {
    icon: GraduationCap,
    title: 'Academia',
    description: 'Bridge research and real-world application.',
    href: '/partners/academia',
  },
];

export function HomepageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'partners' | null>(null);

  const toggleDropdown = (dropdown: 'products' | 'partners') => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="w-full relative">
      <div className="py-4 px-6 md:px-8 lg:px-12 border-b border-white/10">
        <nav className="max-w-[980px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeDropdown}>
            <img src="/logo.svg" alt="Apolitical" className="h-5" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => toggleDropdown('products')}
              className={`flex items-center gap-1 text-sm font-light transition-colors ${
                activeDropdown === 'products' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => toggleDropdown('partners')}
              className={`flex items-center gap-1 text-sm font-light transition-colors ${
                activeDropdown === 'partners' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Partners
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'partners' ? 'rotate-180' : ''}`} />
            </button>
            <Link href="/book-a-demo" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Book a demo
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Log in
            </Link>
            <Link
              href="#"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Auth + Menu */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Log in
            </Link>
            <Link
              href="#"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Sign up
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Full-width Dropdown Menu */}
      {activeDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[65px] bg-black/50 z-40 hidden md:block"
            onClick={closeDropdown}
          />
          
          {/* Dropdown Content */}
          <div className="absolute left-0 right-0 top-full bg-[#111113] border-b border-white/10 z-50 hidden md:block">
            <div className="max-w-[980px] mx-auto px-6 md:px-8 lg:px-12 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {(activeDropdown === 'products' ? productsMenu : partnersMenu).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeDropdown}
                    className="group p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-xs font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-b border-white/10 bg-[#0A0A0B]">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">Products</p>
              {productsMenu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-light">{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="space-y-2 pt-4 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">Partners</p>
              {partnersMenu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-light">{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/book-a-demo"
                className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

