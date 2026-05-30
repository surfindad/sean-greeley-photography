import Link from "next/link";

const BASE = "https://res.cloudinary.com/dyryccn7y/image/upload/home/";

const categories = [
  {
    label: "Residential",
    description: "Single-family homes, condos, and townhouses presented at their finest.",
    image: BASE + "Screenshot_2026-05-29_at_5.49.43_PM_jbactt",
  },
  {
    label: "Commercial",
    description: "Office spaces, retail properties, and investment assets captured with precision.",
    image: BASE + "DSC00018_vjgt0d",
  },
  {
    label: "Luxury",
    description: "High-end estates and architectural masterpieces deserving world-class imagery.",
    image: BASE + "Screenshot_2026-05-29_at_5.53.11_PM_qxoo2z",
  },
  {
    label: "Aerial",
    description: "Sweeping drone perspectives that reveal the full scope of every property.",
    image: BASE + "Screenshot_2026-05-29_at_5.51.28_PM_aagdr7",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero image */}
        <img
          src="https://res.cloudinary.com/dyryccn7y/image/upload/home/Screenshot_2026-05-29_at_5.49.24_PM_emhavv"
          alt="Sean Greeley Photography"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#888888] text-xs tracking-[0.35em] uppercase mb-6">
            Real Estate Photography · California
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 leading-none">
            Sean Greeley
            <br />
            <span className="font-extralight opacity-80">Photography</span>
          </h1>
          <p className="text-[#888888] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Transforming properties into compelling visual stories that captivate buyers
            and elevate listings across California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-[#444] text-[#aaa] text-sm tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
            >
              Book a Shoot
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-white">Scroll</span>
          <div className="w-px h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* Intro blurb */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-6">About the Work</p>
          <p className="text-xl md:text-2xl font-light text-[#cccccc] leading-relaxed">
            Great real estate photography is more than documentation — it is the difference
            between a listing that sits and one that sells. Every image is crafted to convey
            space, light, and lifestyle with quiet authority.
          </p>
          <div className="mt-10 w-12 h-px bg-[#444] mx-auto" />
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-[#0a0a0a] pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-12 text-center">
            Specialties
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href="/portfolio"
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-light tracking-widest uppercase mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-[#aaaaaa] text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block text-[#888888] text-sm tracking-widest uppercase border-b border-[#444] pb-1 hover:text-white hover:border-white transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
