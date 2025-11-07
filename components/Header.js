"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#645646] sticky top-0 z-20 text-white py-6 px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Honoredge Legal Practice Logo"
            width={200}
            height={200}
            objectFit="cover"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {/* <Link href="/" className="font-semibold relative group">
            Home
          </Link> */}
          {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                // className="relative group font-semibold tracking-wide"
              >
                {item}
                {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span> */}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 py-4 bg-gray-50 rounded-lg text-[#230562] space-y-4 transition-all">
          <Link href="/" className="font-semibold block">
            Home
          </Link>
          {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="block font-semibold"
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
