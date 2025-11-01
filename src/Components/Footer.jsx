import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const FooterNavItem = ({ id, label }) => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return onHome ? (
    <ScrollLink
      to={id}
      smooth
      duration={700}
      offset={-80}
      className="cursor-pointer hover:text-[#fdb81e]"
    >
      {label}
    </ScrollLink>
  ) : (
    <RouterLink to={`/#${id}`} className="hover:text-[#fdb81e]">
      {label}
    </RouterLink>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a4480] text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-2xl font-bold text-neutral-100">Brightel Tax</h4>
          <p className="mt-4 text-sm text-white/80 max-w-xs">
            Smart Accounting. Real Compliance. Scalable Growth.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white">Navigation</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {[
              ["Services", "services"],
              ["Industries", "industries"],
              ["Key Dates", "dates"],
              ["IRS Resources", "resources"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <FooterNavItem id={id} label={label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white">Contact</h5>
          <p className="mt-2 text-sm">Email: info@brighteltax.com</p>
          <p className="text-sm">Phone: (XXX) XXX-XXXX</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white">Call to Action</h5>
          <RouterLink
            to="/contact"
            className="mt-4 inline-block rounded-lg bg-[#fdb81e] px-3 py-2 text-[#1a4480] text-sm font-medium hover:brightness-95"
          >
            Book Your Consultation
          </RouterLink>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/80 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Brightel Tax Services | Smart Accounting. Real
            Compliance. Scalable Growth.
          </span>
          <span>Privacy • Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
