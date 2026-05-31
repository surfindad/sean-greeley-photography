"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Book a Shoot</h1>
          <p className="mt-6 text-[#888888] font-light text-sm leading-relaxed max-w-md mx-auto">
            Ready to elevate your listing? Click below to book your session directly online.
            Sean will confirm your appointment within one business day.
          </p>
        </div>

        <a
          href="https://apertureops.app/order/3079232bcc633c199b74e9b4e82ff4b5860fc3a35e88a531"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Now
        </a>

        {/* Contact details */}
        <div className="mt-20 pt-12 border-t border-[#2a2a2a] grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div>
            <p className="text-xs text-[#888888] tracking-widest uppercase mb-3">Email</p>
            <a
              href="mailto:seangreeleyphotography@gmail.com"
              className="text-white font-light text-sm hover:text-[#aaa] transition-colors duration-300"
            >
              seangreeleyphotography@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-[#888888] tracking-widest uppercase mb-3">Response Time</p>
            <p className="text-white font-light text-sm">Within one business day</p>
            <p className="text-[#666] text-xs mt-1 font-light">Serving all of California &amp; beyond</p>
          </div>
        </div>
      </div>
    </div>
  );
}
