import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="ml-2 text-xl font-medium">HomeStart</h3>
            </div>
            <p className="text-sm text-gray-600">
              Helping first-time buyers find their perfect new-build homes
              across Ontario.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/first-time-buyers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  First-Time Buyers Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-calculator"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/new-developments"
                  className="text-gray-600 hover:text-gray-900"
                >
                  New Developments
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Subscribe
            </h4>
            <p className="mt-4 text-sm text-gray-600">
              Get the latest listings and success stories delivered to your
              inbox.
            </p>
            <div className="mt-4">
              <Link
                href="/subscribe"
                className="inline-flex h-10 items-center justify-center rounded-md bg-slate-800 px-6 text-sm font-medium text-white hover:bg-slate-700"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} HomeStart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
