"use client";

import { useState } from "react";

type Category = "All" | "Residential" | "Commercial" | "Luxury" | "Aerial";

const categories: Category[] = ["All", "Residential", "Commercial", "Luxury", "Aerial"];

interface PhotoItem {
  id: number;
  label: string;
  sublabel: string;
  category: Exclude<Category, "All">;
  gradient: string;
  aspect: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    label: "Modern Farmhouse",
    sublabel: "Los Altos Hills, CA",
    category: "Residential",
    gradient: "from-slate-700 via-slate-600 to-slate-500",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    label: "Luxury Estate",
    sublabel: "Atherton, CA",
    category: "Luxury",
    gradient: "from-stone-700 via-amber-900 to-stone-600",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    label: "Office Complex",
    sublabel: "San Jose, CA",
    category: "Commercial",
    gradient: "from-zinc-700 via-zinc-600 to-zinc-500",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    label: "Coastal Aerial",
    sublabel: "Half Moon Bay, CA",
    category: "Aerial",
    gradient: "from-neutral-700 via-sky-900 to-neutral-600",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    label: "Contemporary Condo",
    sublabel: "San Francisco, CA",
    category: "Residential",
    gradient: "from-gray-700 via-gray-600 to-gray-500",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    label: "Penthouse Suite",
    sublabel: "Palo Alto, CA",
    category: "Luxury",
    gradient: "from-stone-800 via-amber-800 to-stone-700",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    label: "Retail Storefront",
    sublabel: "Mountain View, CA",
    category: "Commercial",
    gradient: "from-zinc-800 via-zinc-700 to-zinc-500",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    label: "Estate Grounds",
    sublabel: "Woodside, CA",
    category: "Aerial",
    gradient: "from-neutral-800 via-emerald-900 to-neutral-700",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    label: "Victorian Revival",
    sublabel: "San Francisco, CA",
    category: "Residential",
    gradient: "from-slate-800 via-slate-700 to-slate-500",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    label: "Tech Campus",
    sublabel: "Sunnyvale, CA",
    category: "Commercial",
    gradient: "from-zinc-900 via-zinc-700 to-zinc-600",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    label: "Hilltop Mansion",
    sublabel: "Saratoga, CA",
    category: "Luxury",
    gradient: "from-stone-900 via-stone-700 to-amber-800",
    aspect: "aspect-[4/3]",
  },
  {
    id: 12,
    label: "Valley Overview",
    sublabel: "Santa Clara Valley, CA",
    category: "Aerial",
    gradient: "from-neutral-900 via-neutral-700 to-neutral-500",
    aspect: "aspect-[4/3]",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs text-[#888888] tracking-[0.25em] uppercase mb-4">Work</p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Portfolio</h1>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "border-white text-white bg-white/5"
                  : "border-[#2a2a2a] text-[#888888] hover:border-[#555] hover:text-[#ccc]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <div key={photo.id} className={`group relative ${photo.aspect} overflow-hidden`}>
              {/* Placeholder gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} group-hover:scale-105 transition-transform duration-700`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="text-white text-sm font-light tracking-wide">{photo.label}</p>
                <p className="text-[#aaaaaa] text-xs tracking-wide mt-1">{photo.sublabel}</p>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest uppercase text-[#888888]">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-[#555]">No images in this category.</div>
        )}
      </div>
    </div>
  );
}
