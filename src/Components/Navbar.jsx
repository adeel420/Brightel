import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavItem = ({ id, label, onHit, className = "" }) => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  // On home: smooth scroll. Else: route to "/#id".
  return onHome ? (
    <ScrollLink
      to={id}
      smooth
      duration={700}
      offset={-80}
      spy
      onClick={onHit}
      activeClass="text-[#fdb81e]"
      className={`cursor-pointer transition-colors ${className}`}
    >
      {label}
    </ScrollLink>
  ) : (
    <RouterLink
      to={`/#${id}`}
      onClick={onHit}
      className={`transition-colors ${className}`}
    >
      {label}
    </RouterLink>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="w-full bg-[#1a4480] text-white text-[13px]">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:inline opacity-90">info@brighteltax.com</span>
          <button className="rounded-md bg-[#fdb81e] px-3 py-1.5 text-[#1a4480] font-medium hover:brightness-95">
            (XXX) XXX-XXXX
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#005ea2]/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Brand → route home and scroll to top */}
          <RouterLink
            to="/"
            className="text-xl sm:text-2xl font-bold text-[#1a4480] hover:text-[#005ea2] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Brightel Tax
          </RouterLink>

          {/* Desktop nav (row) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["Services", "services"],
              ["Who We Are", "who"],
              ["Industries", "industries"],
              ["Key Dates", "dates"],
              ["IRS Resources", "resources"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <NavItem
                key={id}
                id={id}
                label={label}
                className="hover:text-[#005ea2]"
              />
            ))}
          </nav>

          {/* Desktop CTA → /contact */}
          <div className="hidden md:flex items-center gap-2">
            <RouterLink
              to="/contact"
              className="rounded-lg border border-[#005ea2] text-[#005ea2] px-3 py-2 text-sm hover:bg-[#d9e8f6]"
            >
              Book Your Consultation
            </RouterLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700"
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu (column) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-slate-200 ${
            mobileOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 bg-white flex flex-col space-y-1">
            {[
              ["Services", "services"],
              ["Who We Are", "who"],
              ["Industries", "industries"],
              ["Key Dates", "dates"],
              ["IRS Resources", "resources"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <NavItem
                key={id}
                id={id}
                label={label}
                onHit={() => setMobileOpen(false)}
                className="block w-full py-2 text-base hover:text-[#005ea2]"
              />
            ))}

            {/* Mobile CTA → /contact */}
            <RouterLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center w-full rounded-lg border border-[#005ea2] text-[#005ea2] px-4 py-2 text-sm font-medium hover:bg-[#d9e8f6]"
            >
              Book Your Consultation
            </RouterLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
