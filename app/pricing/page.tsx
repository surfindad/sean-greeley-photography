const packages = [
  { name: "30 Image Package", price: "$175" },
  { name: "45 Image Package", price: "$220" },
  { name: "60 Image Package", price: "$260" },
];

const addOns = [
  { name: "Twilight Package", price: "$150", description: "Golden hour exterior shots at dusk." },
  { name: "Neighborhood Package", price: "$100", description: "Showcase the surrounding area and amenities." },
  { name: "Matterport", price: "$200", description: "Immersive 3D virtual tour of the property." },
  { name: "Virtual Staging", price: "$50 / room", description: "Digitally furnish empty rooms to help buyers visualize the space." },
  { name: "Walkthrough Video", price: "$300", description: "Cinematic walkthrough video of the property." },
  { name: "Social Media Package", price: "$120", description: "Vertical video ready to upload directly to your social media account." },
  { name: "Social Media Plus Package", price: "$200", description: "Teaser video and photos that are ready to upload to your social media account." },
  { name: "Floor Plan", price: "$100", description: "Accurate floor plan drawing of the property." },
  { name: "Aerial Photography", price: "$180", description: "FAA-licensed drone photography of the property and surrounding area." },
  { name: "Aerial Video", price: "$300", description: "Cinematic drone video footage of the property." },
];

const travel = [
  { name: "Standard Travel Fee", price: "$50", description: "45 min to 1 hour drive one way." },
  { name: "Long Distance Travel Fee", price: "$100", description: "More than one hour drive one way." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">Investment</p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Pricing</h1>
          <p className="mt-4 text-[#888888] font-light text-sm max-w-md mx-auto leading-relaxed">
            All packages include professional editing and delivery within 24 hours.
          </p>
        </div>

        {/* Photo Packages */}
        <div className="mb-16">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-8">Photo Packages</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-[#2a2a2a] p-8 text-center hover:border-[#444] transition-colors duration-300">
                <p className="text-white font-light text-lg mb-4">{pkg.name}</p>
                <p className="text-3xl font-light text-white">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-8">Add-On Services</p>
          <div className="divide-y divide-[#1a1a1a]">
            {addOns.map((item) => (
              <div key={item.name} className="flex items-start justify-between py-5 gap-6">
                <div>
                  <p className="text-white font-light">{item.name}</p>
                  <p className="text-[#666] text-sm font-light mt-1">{item.description}</p>
                </div>
                <p className="text-white font-light whitespace-nowrap">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Fees */}
        <div className="mb-16">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-8">Travel Fees</p>
          <div className="divide-y divide-[#1a1a1a]">
            {travel.map((item) => (
              <div key={item.name} className="flex items-start justify-between py-5 gap-6">
                <div>
                  <p className="text-white font-light">{item.name}</p>
                  <p className="text-[#666] text-sm font-light mt-1">{item.description}</p>
                </div>
                <p className="text-white font-light whitespace-nowrap">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-[#2a2a2a] pt-12 text-center">
          <p className="text-[#888888] font-light text-sm">
            Questions? Contact me at{" "}
            <a href="mailto:seangreeleyphotography@gmail.com" className="text-white hover:text-[#aaa] transition-colors duration-300">
              seangreeleyphotography@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
