import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <span className="text-lg font-medium text-slate-700">HomeStart</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="text-sm text-slate-700 hover:text-slate-900">
          Home
        </Link>
        <Link href="#" className="text-sm text-slate-700 hover:text-slate-900">
          Success Stories
        </Link>
        <Link href="#" className="text-sm text-slate-700 hover:text-slate-900">
          Listings
        </Link>
        <Link href="#" className="text-sm text-slate-700 hover:text-slate-900">
          Contact
        </Link>
        <Link href="#" className="text-sm text-slate-700 hover:text-slate-900">
          Sign in
        </Link>
        <Link
          href="#"
          className="text-sm text-white bg-slate-700 px-4 py-2 rounded-full hover:bg-slate-800"
        >
          Subscribe
        </Link>
      </nav>
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-700"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </header>
  );
}
