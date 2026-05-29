import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#888888] text-sm tracking-wide">
          &copy; 2024 Sean Greeley Photography. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/portfolio"
            className="text-[#888888] text-sm tracking-wide hover:text-white transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-[#888888] text-sm tracking-wide hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[#888888] text-sm tracking-wide hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
