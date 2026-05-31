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
  { id: 1, label: "Exterior", sublabel: "California", category: "Residential", image: "https://i.ibb.co/JW8Vg1zL/DSC0039.jpg" },
  { id: 2, label: "Interior", sublabel: "California", category: "Residential", image: "https://i.ibb.co/5hNX0V30/DSC0048.jpg" },
  { id: 3, label: "Property", sublabel: "California", category: "Residential", image: "https://i.ibb.co/mFGFzn29/Photo-Aug-14-2024-8-03-56-PM.jpg" },
  { id: 4, label: "Twilight Exterior", sublabel: "California", category: "Residential", image: "https://i.ibb.co/ycJBPb9g/Photo-Aug-14-2024-8-04-01-PM.jpg" },
  { id: 5, label: "Residential", sublabel: "California", category: "Residential", image: "https://i.ibb.co/M5xrKj85/Photo-Mar-01-2023-10-58-48-AM.jpg" },
  { id: 6, label: "Property", sublabel: "California", category: "Residential", image: "https://i.ibb.co/wHQSvB9/Photo-May-17-2024-9-59-31-AM.jpg" },
  { id: 7, label: "Luxury Estate", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/1GZFxN9v/Photo-Aug-14-2024-8-05-28-PM.jpg" },
  { id: 8, label: "Luxury Interior", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/Lh60nPrB/Photo-Aug-14-2024-8-07-43-PM.jpg" },
  { id: 9, label: "Luxury Property", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/7t592j5K/Photo-Aug-14-2024-8-07-51-PM.jpg" },
  { id: 10, label: "Luxury Home", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/B2zg3Rrp/Photo-Nov-14-2022-12-02-51-PM.jpg" },
  { id: 11, label: "Exterior", sublabel: "California", category: "Residential", image: "https://i.ibb.co/qYX18vrF/DSC0002-1.jpg" },
  { id: 12, label: "Luxury Pool", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/3m0WvdwH/DSC0260.jpg" },
  { id: 13, label: "Luxury Estate", sublabel: "California", category: "Luxury", image: "https://i.ibb.co/1YTNkywt/Photo-Mar-08-2026-10-48-25-AM.jpg" },
  { id: 14, label: "Commercial Listing", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/84t8vkmr/Photo-Jun-14-2021-8-25-24-AM.jpg" },
  { id: 15, label: "Living Room", sublabel: "California", category: "Residential", image: "https://i.ibb.co/33GH378/Photo-Apr-24-2019-7-09-42-PM.png" },
  { id: 16, label: "Kitchen", sublabel: "California", category: "Residential", image: "https://i.ibb.co/0pMDpZdJ/Photo-Jul-05-2024-7-02-59-PM.jpg" },
  { id: 17, label: "Kitchen", sublabel: "California", category: "Residential", image: "https://i.ibb.co/PZDxKyDD/Photo-May-26-2021-9-10-21-AM.jpg" },
  { id: 18, label: "Bathroom", sublabel: "California", category: "Residential", image: "https://i.ibb.co/S4ct81rS/DSC0105.jpg" },
  { id: 19, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/TDj7GwGh/Photo-Mar-01-2023-9-56-30-AM.jpg" },
  { id: 20, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/jZySyXBf/DJI-0052.jpg" },
  { id: 21, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/trkh98C/DJI-0064.jpg" },
  { id: 22, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/YFh8283L/DJI-0521-HDR.jpg" },
  { id: 23, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/R4PDvv7q/DJI-0531-HDR.jpg" },
  { id: 24, label: "Aerial View", sublabel: "California", category: "Aerial", image: "https://i.ibb.co/kVWCPwJZ/DJI-0546-HDR.jpg" },
  { id: 25, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/359kfDyp/DSC00029.jpg" },
  { id: 26, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/Fb4Yzg7T/DSC00069.jpg" },
  { id: 27, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/xKdRjWxC/DSC00076.jpg" },
  { id: 28, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/BK2rVHLS/DSC00081.jpg" },
  { id: 29, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/hTSMwmQ/DSC00087.jpg" },
  { id: 30, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/Vpz63Vsx/DSC00096.jpg" },
  { id: 31, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/p6HnTM5p/DSC00108.jpg" },
  { id: 32, label: "Commercial", sublabel: "California", category: "Commercial", image: "https://i.ibb.co/Lz3Fy6XS/DSC00124.jpg" },
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
