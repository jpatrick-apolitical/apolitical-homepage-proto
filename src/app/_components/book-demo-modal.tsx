'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', organisation: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-[#111113] border border-white/10 rounded-2xl w-full max-w-md mx-4 p-8 z-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <h2 className="text-xl font-medium text-white mb-3">Thank you</h2>
            <p className="text-gray-400 font-light text-sm mb-6">
              We&apos;ll be in touch shortly.
            </p>
            <button
              onClick={handleClose}
              className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-medium text-white mb-1">Book a demo</h2>
            <p className="text-gray-400 font-light text-sm mb-6">
              Tell us a bit about yourself and we&apos;ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm text-gray-300 mb-1.5">Name</label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-sm text-gray-300 mb-1.5">Email</label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="you@organisation.gov"
                />
              </div>
              <div>
                <label htmlFor="demo-org" className="block text-sm text-gray-300 mb-1.5">Organisation</label>
                <input
                  id="demo-org"
                  type="text"
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your organisation"
                />
              </div>
              <div>
                <label htmlFor="demo-message" className="block text-sm text-gray-300 mb-1.5">Message <span className="text-gray-500">(optional)</span></label>
                <textarea
                  id="demo-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us what you're looking for"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors mt-2"
              >
                Request a demo
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
