import React from "react";
import Image from "next/image";

export default function NewBuildHomes() {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-slate-400 mb-4">
        NEW-BUILD HOMES
      </h2>

      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Oakville property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$648,620+</p>
            <p className="text-sm text-slate-600">1140 Onyx Trail, Oakville</p>
            <p className="text-sm text-slate-500">4 Bed, 2 Bath</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Aurora property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$750,500+</p>
            <p className="text-sm text-slate-600">Aurora, Ontario</p>
            <p className="text-sm text-slate-500">3+ Bed, 2+Bath</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Oakville property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$550,000+</p>
            <p className="text-sm text-slate-600">Oakville, Ontario</p>
            <p className="text-sm text-slate-500">2+ Bed, 2+ Bath</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Oakville property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$650,000+</p>
            <p className="text-sm text-slate-600">Oakville, Ontario</p>
            <p className="text-sm text-slate-500">2+ Bed, 2+ Bath</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Oakville property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$650,000+</p>
            <p className="text-sm text-slate-600">Oakville, Ontario</p>
            <p className="text-sm text-slate-500">2+ Bed, 2+ Bath</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
            <Image
              src="/top-of-building.png"
              alt="Oakville property"
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700">$650,000+</p>
            <p className="text-sm text-slate-600">Oakville, Ontario</p>
            <p className="text-sm text-slate-500">2+ Bed, 2+ Bath</p>
          </div>
        </div>
      </div>
    </section>
  );
}
