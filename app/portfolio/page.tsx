"use client";

import { useState } from "react";

type Category = "All" | "Residential" | "Commercial" | "Luxury" | "Aerial";

const categories: Category[] = ["All", "Residential", "Commercial", "Luxury", "Aerial"];

const BASE = "https://res.cloudinary.com/dyryccn7y/image/upload/home/";

interface PhotoItem {
  id: number;
  label: string;
  sublabel: string;
  category: Exclude<Category, "All">;
  image: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    label: "Twilight Exterior",
    sublabel: "California",
    category: "Residential",
    image: BASE + "Screenshot_2026-05-29_at_5.49.24_PM_emhavv",
  },
  {
    id: 2,
    label: "Luxury Pool Estate",
    sublabel: "California",
    category: "Luxury",
    image: BASE + "Screenshot_2026-05-29_at_5.53.11_PM_qxoo2z",
  },
  {
    id: 3,
    label: "Interior Living",
    sublabel: "California",
    category: "Residential",
    image: BASE + "_DSC0027_i5upcl",
  },
  {
    id: 4,
    label: "Aerial Property View",
    sublabel: "California",
    category: "Aerial",
    image: BASE + "Screenshot_2026-05-29_at_5.51.28_PM_aagdr7",
  },
  {
    id: 5,
    label: "Interior Detail",
    sublabel: "California",
    category: "Residential",
    image: BASE + "_DSC0030_zm3vhl",
  },
  {
    id: 6,
    label: "Estate Exterior",
    sublabel: "California",
    category: "Luxury",
    image: BASE + "Screenshot_2026-05-29_at_5.53.52_PM_n2cs4v",
  },
  {
    id: 7,
    label: "Commercial Property",
    sublabel: "California",
    category: "Commercial",
    image: BASE + "DSC00018_vjgt0d",
  },
  {
    id: 8,
    label: "Property Overview",
    sublabel: "California",
    category: "Aerial",
    image: BASE + "Screenshot_2026-05-29_at_5.53.23_PM_ielm2e",
  },
  {
    id: 9,
    label: "Interior Spaces",
    sublabel: "California",
    category: "Residential",
    image: BASE + "_DSC0015_j011sk",
  },
  {
    id: 10,
    label: "Exterior Twilight",
    sublabel: "California",
    category: "Residential",
    image: BASE + "Screenshot_2026-05-29_at_5.49.43_PM_jbactt",
  },
  {
    id: 11,
    label: "Luxury Exterior",
    sublabel: "California",
    category: "Luxury",
    image: BASE + "Screenshot_2026-05-29_at_5.52.46_PM_ifyxn6",
  },
  {
    id: 12,
    label: "Property Exterior",
    sublabel: "California",
    category: "Commercial",
    image: BASE + "Screenshot_2026-05-29_at_5.50.19_PM_cesfat",
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
            <div key={photo.id} className="group relative aspect-[4/3] overflow-hidden">
              <img
                src={photo.image}
                alt={photo.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
