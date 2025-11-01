// src/pages/ScaleAccountingLanding.jsx
import React, { useLayoutEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Services from "../components/Services";
import Blogs from "../components/Blogs";
import HighlightsSection from "../components/HighlightsSection";

// Icons (only used for the Industries list)
import {
  FaUtensils, FaStethoscope, FaGasPump, FaShoppingCart, FaBriefcase,
  FaHardHat, FaLandmark, FaHandsHelping, FaLaptopCode
} from "react-icons/fa";

export default function ScaleAccountingLanding() {
  // Refs for sections you want to animate-on-scroll
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const industriesRef = useRef(null);
  const datesRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);
  const blogsRef = useRef(null);

  useLayoutEffect(() => {
    // Guard & register
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Scope GSAP to this page only
    const ctx = gsap.context(() => {
      // 1) Page enter (subtle)
      gsap.fromTo(
        pageRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // 2) Hero staged intro (headline + paragraph + buttons)
      if (heroRef.current) {
        const parts = heroRef.current.querySelectorAll("[data-hero]");
        gsap.fromTo(
          parts,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
            delay: 0.1,
          }
        );
      }

      // 3) Generic "reveal on scroll" for all [data-reveal]
      const revealSets = gsap.utils.toArray("[data-reveal]");
      revealSets.forEach((el) => {
        gsap.set(el, { autoAlpha: 0, y: 24 });
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // 4) Optional: stagger groups inside a section
      const servicesCards = servicesRef.current?.querySelectorAll("[data-reveal-card]");
      if (servicesCards?.length) {
        gsap.set(servicesCards, { autoAlpha: 0, y: 20 });
        gsap.to(servicesCards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      const industryCards = industriesRef.current?.querySelectorAll("[data-reveal-card]");
      if (industryCards?.length) {
        gsap.set(industryCards, { autoAlpha: 0, y: 20 });
        gsap.to(industryCards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: industriesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="text-slate-800">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <p data-hero className="text-[11px] uppercase tracking-widest text-[#fdb81e] font-medium">
              Brightel Tax Services – Business Accounting Experts
            </p>
            <h2 data-hero className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md">
              Smart Accounting. Real Compliance.{" "}
              <span className="text-[#fdb81e]">Scalable Growth.</span>
            </h2>
            <p data-hero className="mt-4 text-slate-100 max-w-xl drop-shadow">
              We provide comprehensive Accounting, Bookkeeping, Payroll, and Tax Compliance for businesses—helping you
              stay audit-ready, compliant, and confident in every financial decision.
            </p>
            <div data-hero className="mt-6 flex flex-wrap gap-3">
              <RouterLink
                to="/contact"
                className="rounded-lg bg-[#005ea2] hover:bg-[#0b4778] px-4 py-2.5 text-white"
              >
                Schedule a Call
              </RouterLink>

              <a
                href="/Key-Dates.pdf"
                className="rounded-lg border border-[#fdb81e] text-[#fdb81e] hover:bg-[#fdb81e]/10 px-4 py-2.5"
              >
                Download Key Dates Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Highlights under hero */}
        <div className="relative z-10" data-reveal>
          <HighlightsSection />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who" ref={whoRef} className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div data-reveal>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a4480]">Who We Are</h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Brightel Tax Services, we’re more than tax preparers — we’re your financial partners. Our team helps
              small and mid-sized companies gain control of their finances through accurate reporting, proactive
              compliance, and scalable accounting systems.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Whether you’re a retail franchise, medical office, convenience store, or government contractor, we ensure
              your books are precise, your filings are on time, and your financials reflect the real health of your
              business.
            </p>
          </div>
          <div className="flex justify-center" data-reveal>
            <img
              src="/about.png"
              alt="Brightel Tax Services team – who we are"
              className="w-full h-[420px] rounded-xl object-cover shadow-md"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" ref={servicesRef} className="bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-4 py-12" data-reveal>
          <h3 className="text-xl font-semibold text-[#1a4480]">Our Core Services</h3>
          {/* Tip: inside Services, add data-reveal-card to each card root for the stagger above */}
          <Services />
        </div>
      </section>

      {/* WIDE CTA */}
      <section ref={ctaRef} className="relative">
        <div className="mx-auto max-w-7xl px-4 py-6" data-reveal>
          <div className="relative overflow-hidden rounded-2xl">
            <img src="/Cta.png" alt="Brightel CTA" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-[#000000]/50" />
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex items-center">
              <div className="text-white max-w-lg">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#fdb81e]">
                  Compliance without chaos
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-snug">
                  Put your accounting, payroll, and filings in expert hands.
                </h3>
                <RouterLink
                  to="/contact"
                  className="mt-4 inline-block rounded-lg bg-[#fdb81e] px-4 py-2 text-[#1a4480] font-medium hover:brightness-95"
                >
                  Book Your Consultation
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" ref={industriesRef} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12" data-reveal>
          <h3 className="text-lg font-semibold text-[#1a4480]">Industries We Serve</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Restaurants & Franchise Owners", icon: <FaUtensils className="text-[#fdb81e] text-2xl" /> },
              { name: "Medical & Dental Offices", icon: <FaStethoscope className="text-[#fdb81e] text-2xl" /> },
              { name: "Convenience Stores & Gas Stations", icon: <FaGasPump className="text-[#fdb81e] text-2xl" /> },
              { name: "Retail & E-Commerce", icon: <FaShoppingCart className="text-[#fdb81e] text-2xl" /> },
              { name: "Professional & Service Firms", icon: <FaBriefcase className="text-[#fdb81e] text-2xl" /> },
              { name: "Construction & Trade Businesses", icon: <FaHardHat className="text-[#fdb81e] text-2xl" /> },
              { name: "Government Contractors", icon: <FaLandmark className="text-[#fdb81e] text-2xl" /> },
              { name: "Nonprofits", icon: <FaHandsHelping className="text-[#fdb81e] text-2xl" /> },
              { name: "Technology & Startups", icon: <FaLaptopCode className="text-[#fdb81e] text-2xl" /> },
            ].map((item, i) => (
              <div
                key={i}
                data-reveal-card
                className="flex items-start gap-4 rounded-xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-medium text-[#1a4480]">{item.name}</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Specialized bookkeeping, compliance, and reporting tailored to your model.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY DATES / COUNTDOWN */}
      <section id="dates" ref={datesRef} className="bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            <div data-reveal>
              <h3 className="text-lg font-semibold text-[#1a4480]">Tax Year Countdown & Key Filing Dates</h3>
              <div className="mt-3 rounded-lg bg-white border border-slate-200 p-4">
                <p className="text-sm">
                  <span className="font-semibold">Current Countdown:</span> 72 Days Left to File Corporate Returns
                  (March 15, 2026)
                </p>
                <p className="text-sm mt-1">Schedule your tax review today to avoid last-minute penalties.</p>
              </div>

              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-[#d9e8f6] text-left">
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Deadline</th>
                      <th className="px-4 py-2">Applies To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Jan 15", "Q4 Estimated Tax Payment", "All Businesses"],
                      ["Jan 31", "W-2 & 1099 Forms Due to Employees/Contractors", "Employers"],
                      ["Mar 15", "S-Corp & Partnership Returns (1120-S, 1065)", "S Corps, Partnerships"],
                      ["Apr 15", "C-Corp Returns & Q1 Estimated Taxes", "C Corporations"],
                      ["Jun 15", "Q2 Estimated Taxes", "All Businesses"],
                      ["Sep 15", "Q3 Estimated Taxes", "All Businesses"],
                      ["Dec 31", "Year-End Payroll, 401(k), and Expense Adjustments", "All Employers"],
                    ].map((r, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-2">{r[0]}</td>
                        <td className="px-4 py-2">{r[1]}</td>
                        <td className="px-4 py-2">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center items-stretch" data-reveal>
              <img
                src="/table.png"
                alt="Tax filing deadlines illustration"
                className="w-full h-full rounded-xl shadow-md object-cover"
                style={{ minHeight: "100%", maxHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* IRS RESOURCES */}
      <section id="resources" ref={resourcesRef} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12" data-reveal>
          <h3 className="text-lg font-semibold">IRS Resources & Quick Links</h3>
          <p className="text-sm text-slate-700 mt-1">
            Save time — access commonly used IRS business forms directly from our site.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              ["Form 941", "Employer’s Quarterly Federal Tax Return", "https://www.irs.gov/pub/irs-pdf/f941.pdf"],
              ["Form 940", "Employer’s Annual Federal Unemployment (FUTA) Tax Return", "https://www.irs.gov/pub/irs-pdf/f940.pdf"],
              ["Form W-2", "Wage and Tax Statement", "https://www.irs.gov/pub/irs-pdf/fw2.pdf"],
              ["Form W-3", "Transmittal of Wage and Tax Statements", "https://www.irs.gov/pub/irs-pdf/fw3.pdf"],
              ["Form 1099-NEC", "Nonemployee Compensation", "https://www.irs.gov/pub/irs-pdf/f1099nec.pdf"],
              ["Form 1065", "U.S. Return of Partnership Income", "https://www.irs.gov/pub/irs-pdf/f1065.pdf"],
              ["Form 1120-S", "U.S. Income Tax Return for an S Corporation", "https://www.irs.gov/pub/irs-pdf/f1120s.pdf"],
              ["Form 1120", "U.S. Corporation Income Tax Return", "https://www.irs.gov/pub/irs-pdf/f1120.pdf"],
              ["Form SS-4", "Application for Employer Identification Number (EIN)", "https://www.irs.gov/pub/irs-pdf/fss4.pdf"],
              ["Form 8829", "Expenses for Business Use of Your Home", "https://www.irs.gov/pub/irs-pdf/f8829.pdf"],
            ].map((row, i) => (
              <a
                key={i}
                href={row[2]}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 p-4 hover:bg-[#d9e8f6]/40 transition"
                data-reveal-card
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center font-bold">★</div>
                  <div>
                    <p className="font-medium">{row[0]}</p>
                    <p className="text-sm text-slate-600">{row[1]}</p>
                    <span className="text-xs text-[#005ea2]">Open PDF on IRS.gov →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA (in-page content) */}
      <section id="contact" ref={contactRef} className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid md:grid-cols-[1fr_.8fr] gap-6 items-center">
            <div className="rounded-xl bg-white border border-slate-200 p-6" data-reveal>
              <h4 className="font-semibold">Service Areas</h4>
              <p className="text-sm text-slate-700 mt-2">Remote clients nationwide</p>

              <div className="mt-6 rounded-lg bg-[#1a4480] text-white p-5">
                <p className="text-sm">Let’s Simplify Your Accounting</p>
                <p className="text-sm mt-1">Call: (XXX) XXX-XXXX • Email: info@brighteltax.com</p>
                <RouterLink
                  to="/contact"
                  className="mt-3 inline-block rounded-md bg-[#fdb81e] text-[#1a4480] px-3 py-2 text-sm font-medium hover:brightness-95"
                >
                  Schedule Your Consultation
                </RouterLink>
              </div>
            </div>
            <div data-reveal>
              <img src="/Contact.png" alt="Contact" className="w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS (text-only cards) */}
      <section ref={blogsRef} data-reveal>
        <Blogs />
      </section>
    </div>
  );
}
