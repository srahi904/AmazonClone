/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white mt-12 text-sm">
      {/* Back to Top */}
      <div
        onClick={scrollToTop}
        className="bg-gray-800 text-center py-3 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
      >
        <span className="text-sm tracking-wide">⬆ Back to Top</span>
      </div>

      {/* Footer Links */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <nav aria-label="Get to Know Us">
          <h3 className="font-semibold text-lg mb-3">Get to Know Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:underline">
                Press Releases
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 2 */}
        <nav aria-label="Connect with Us">
          <h3 className="font-semibold text-lg mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 3 */}
        <nav aria-label="Make Money with Us">
          <h3 className="font-semibold text-lg mb-3">Make Money with Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/sell" className="hover:underline">
                Sell on Our Platform
              </Link>
            </li>
            <li>
              <Link to="/affiliate" className="hover:underline">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link to="/advertise" className="hover:underline">
                Advertise Your Products
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 4 */}
        <nav aria-label="Help & Support">
          <h3 className="font-semibold text-lg mb-3">Help & Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:underline">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:underline">
                Returns & Replacements
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:underline">
                Order History
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center">
        &copy; {new Date().getFullYear()} Amazon clone-team. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
