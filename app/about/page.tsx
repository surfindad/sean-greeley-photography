const services = [
  {
    title: "HDR Photography",
    description:
      "Multi-exposure bracketing and careful blending produce interiors that are true to life — bright, balanced, and free of blown-out windows or crushed shadows.",
  },
  {
    title: "Twilight Shoots",
    description:
      "The golden hour just after sunset transforms a property into something cinematic. Warm interior light spills out against a deep blue sky for images that are impossible to scroll past.",
  },
  {
    title: "Aerial / Drone",
    description:
      "FAA-licensed drone operation delivering sweeping overheads, proximity passes, and reveal sequences that showcase land, location, and architectural scale.",
  },
  {
    title: "Virtual Tours",
    description:
      "360-degree immersive walkthroughs that let prospective buyers experience the flow of a property from anywhere in the world, at any hour.",
  },
  {
    title: "Video",
    description:
      "From cinematic property walkthroughs to social media-ready reels, professional video content that brings every listing to life and captures buyer attention across every platform.",
  },
  {
    title: "Floor Plans",
    description:
      "Accurate, clean floor plan drawings that give buyers a clear sense of layout, flow, and square footage — an essential tool for any serious listing.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">The Photographer</p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">About Sean</h1>
        </div>

        {/* Two-column bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* Portrait placeholder */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-zinc-600" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[#888888] text-xs tracking-widest uppercase">Sean Greeley</p>
              <p className="text-[#555] text-xs tracking-wide mt-1">Real Estate Photographer</p>
            </div>
          </div>

          {/* Bio copy */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-8">Biography</p>

            <div className="space-y-5 text-[#bbbbbb] font-light leading-relaxed">
              <p>
                Sean Greeley is a Northern California-based photographer with 16 years of
                experience in real estate photography, based out of the greater Sacramento area.
                His eye for light, space, and storytelling was forged long before he ever walked
                through a listing — Sean built his career in the action sports world, shooting
                surfing and motocross at the highest levels.
              </p>
              <p>
                That career took him everywhere. He has shot for the San Francisco Giants,
                the Sacramento Kings, Red Bull, and major brands throughout the surfing industry.
                The discipline and vision required to capture fast-moving athletes in dynamic
                environments translated directly into an ability to make any property — from
                a modest starter home to a multi-million-dollar estate — look extraordinary.
              </p>
              <p>
                Sean has traveled the length of California for real estate clients, covering
                Orange County, San Francisco, Napa, Lake Tahoe, and everywhere in between.
                His commercial work has taken him to Maui, Hawaii, where he has led major
                shoots for luxury hotel chains.
              </p>
              <p>
                Whether it is a twilight exterior, an aerial drone sequence, or a carefully
                lit interior, Sean brings the same professionalism and creative intensity to
                every project — because every listing deserves images that stop the scroll.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#2a2a2a]">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "2,000+", label: "Properties Shot" },
                  { value: "50+", label: "Agent Partners" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-light text-white">{stat.value}</p>
                    <p className="text-[#666] text-xs tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What I Offer */}
        <div>
          <div className="text-center mb-12">
            <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              What I Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="border border-[#2a2a2a] p-8 hover:border-[#444] transition-colors duration-300"
              >
                <p className="text-[#555] text-xs tracking-widest uppercase mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-white text-xl font-light mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
