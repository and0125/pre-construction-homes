import React from "react";
import Image from "next/image";

export default function FeaturedArticles() {
  return (
    <div className="grid md:grid-cols-2 gap-16 mb-12">
      <div className="relative rounded-xl overflow-hidden h-[40vh]">
        <Image
          src="/aparment-building.png"
          alt="New community in Oakville"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm">
            Explore the newest community for young couples in Oakville:
            Springvale
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-[20vh] w-[20vh] flex-shrink-0">
            <Image
              src="/house-with-pool.png"
              alt="Silicon Valley"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <p className="text-slate-600 text-sm">
            Could this be Ontario's Silicon Valley?
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-[20vh] w-[20vh] flex-shrink-0">
            <Image
              src="/professional-smile.png"
              alt="Mortgage advisor"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <p className="text-slate-600 text-sm">
            Where to find the best mortgage rates in BC this Spring: Mark O.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-[20vh] w-[20vh] flex-shrink-0">
            <Image
              src="/city-scape.png"
              alt="Vancouver Hills Villa"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <p className="text-slate-600 text-sm">
            Mediterranean-Style Vancouver Hills Villa With a Clean-Cut New Look
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-[20vh] w-[20vh] flex-shrink-0">
            <Image
              src="/mixed-couple.png"
              alt="First time home owners"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <p className="text-slate-600 text-sm">
            We're the first home-owners in our family: couple shares incredible
            story
          </p>
        </div>
      </div>
    </div>
  );
}
