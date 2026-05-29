"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Contact</h1>
          <p className="mt-4 text-[#888888] font-light text-sm leading-relaxed max-w-md mx-auto">
            Ready to elevate your listing? Fill out the form below and Sean will be in touch within
            one business day.
          </p>
        </div>

        {submitted ? (
          <div className="border border-[#2a2a2a] p-12 text-center">
            <p className="text-white text-xl font-light mb-3">Message Received</p>
            <p className="text-[#888888] text-sm font-light">
              Thank you for reaching out. Sean will respond within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#888888] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#888888] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-[#888888] mb-2">
                Property Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="123 Main St, City, CA 00000"
                className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-[#888888] mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                required
                defaultValue=""
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#555] transition-colors duration-300 appearance-none"
              >
                <option value="" disabled className="text-[#444]">
                  Select a service
                </option>
                <option value="residential">Residential — Standard HDR</option>
                <option value="luxury">Luxury Estate Package</option>
                <option value="commercial">Commercial / Office</option>
                <option value="twilight">Twilight Shoot</option>
                <option value="aerial">Aerial / Drone</option>
                <option value="virtual">Virtual Tour</option>
                <option value="full">Full Package (HDR + Aerial + Virtual Tour)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-[#888888] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell Sean about your property, preferred dates, and any special requirements..."
                className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors duration-300 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        {/* Contact details */}
        <div className="mt-16 pt-12 border-t border-[#2a2a2a] grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-[#888888] tracking-widest uppercase mb-3">Email</p>
            <a
              href="mailto:seantgreeley@gmail.com"
              className="text-white font-light text-sm hover:text-[#aaa] transition-colors duration-300"
            >
              seantgreeley@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-[#888888] tracking-widest uppercase mb-3">Response Time</p>
            <p className="text-white font-light text-sm">Within one business day</p>
            <p className="text-[#666] text-xs mt-1 font-light">
              Serving all of California, Bay Area &amp; beyond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
