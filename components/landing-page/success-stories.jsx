import React from "react";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden h-[16vh] w-[16vw]">
            <Image
              src="/black-couple-young.png"
              alt="Siblings who bought new-builds"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <p className="text-xs text-slate-600">
            These siblings bought their first 2 new-builds in Ontario and BC
          </p>
        </div>

        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden h-[16vh] w-[16vw]">
            <Image
              src="/black-couple-young.png"
              alt="Siblings who bought new-builds"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <p className="text-xs text-slate-600">
            These siblings bought their first 2 new-builds in Ontario and BC
          </p>
        </div>

        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden h-[16vh] w-[16vw]">
            <Image
              src="/black-couple-young.png"
              alt="Siblings who bought new-builds"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <p className="text-xs text-slate-600">
            These siblings bought their first 2 new-builds in Ontario and BC
          </p>
        </div>

        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden h-[16vh] w-[16vw]">
            <Image
              src="/black-couple-young.png"
              alt="Siblings who bought new-builds"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <p className="text-xs text-slate-600">
            These siblings bought their first 2 new-builds in Ontario and BC
          </p>
        </div>
      </div>
    </section>
  );
}
