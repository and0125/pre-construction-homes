import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <span className="text-lg font-medium text-slate-700">HomeStart</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Success Stories
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Listings
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
              21-year old designer buys first new-build
            </h1>
            <p className="text-slate-500 mb-6">
              Laura just marked her anniversary as a product designer at Amazon
              and celebrated by purchasing her first new-build property in
              Aurora, Ontario for $495,000.
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

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden h-64">
            <Image
              src="/placeholder.svg?height=400&width=600"
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
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
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
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
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
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Vancouver Hills Villa"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <p className="text-slate-600 text-sm">
                Mediterranean-Style Vancouver Hills Villa With a Clean-Cut New
                Look
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="First time home owners"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <p className="text-slate-600 text-sm">
                We're the first home-owners in our family: couple shares
                incredible story
              </p>
            </div>
          </div>
        </div>

        {/* New Build Homes Section */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-slate-400 mb-4">
            NEW-BUILD HOMES
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Oakville property"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div>
                <p className="font-medium text-slate-700">$648,620+</p>
                <p className="text-sm text-slate-600">
                  1140 Onyx Trail, Oakville
                </p>
                <p className="text-sm text-slate-500">4 Bed, 2 Bath</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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

        {/* Success Stories Section */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
      </main>
    </div>
  );
}
