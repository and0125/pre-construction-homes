import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
          21-year old designer buys first new-build
        </h1>
        <p className="text-slate-500 mb-6">
          Laura just marked her anniversary as a product designer at Amazon and
          celebrated by purchasing her first new-build property in Aurora,
          Ontario for $495,000.
        </p>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Explore
          </Link>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden h-64 md:h-auto">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Young designer in their new home"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
