import React, { useLayoutEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug, services } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Refs for animation
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const bulletsRef = useRef(null);
  const faqsRef = useRef(null);
  const asideRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Scope animations to this component instance
    const ctx = gsap.context(() => {
      // Page fade-in (on route change)
      gsap.fromTo(
        pageRef.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );

      // HERO: icon + text slide-in
      if (heroRef.current) {
        const icon = heroRef.current.querySelector("[data-hero-icon]");
        const text = heroRef.current.querySelector("[data-hero-text]");
        gsap.set([icon, text], { autoAlpha: 0, y: 12 });
        gsap.to(icon, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.05 });
        gsap.to(text, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.15 });
      }

      // OVERVIEW block
      if (overviewRef.current) {
        gsap.fromTo(
          overviewRef.current,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: overviewRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Bullets (stagger)
      if (bulletsRef.current) {
        const items = gsap.utils.toArray(bulletsRef.current.querySelectorAll("li"));
        gsap.fromTo(
          items,
          { autoAlpha: 0, x: -12 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: bulletsRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // FAQs block
      if (faqsRef.current) {
        const faqItems = gsap.utils.toArray(faqsRef.current.querySelectorAll("details"));
        gsap.fromTo(
          faqItems,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: faqsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Sidebar card
      if (asideRef.current) {
        gsap.fromTo(
          asideRef.current,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: asideRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, pageRef);

    // Re-run animations when slug changes (new service page)
    return () => ctx.revert();
  }, [slug]);

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-[#1a4480]">Service not found</h1>
        <p className="mt-2 text-slate-600">
          The page you’re looking for doesn’t exist.{" "}
          <Link to="/" className="text-[#005ea2] hover:underline">Go back home</Link>.
        </p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div ref={pageRef} key={slug}>
      {/* HERO */}
      <section className="bg-[#f5f6f7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10" ref={heroRef}>
          <div className="flex items-start gap-4">
            <div
              data-hero-icon
              className="h-12 w-12 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center"
            >
              <Icon className="text-xl" />
            </div>
            <div data-hero-text>
              <p className="text-xs uppercase tracking-widest text-[#1a4480]/70">
                {service.tag}
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#1a4480]">
                {service.title}
              </h1>
              <p className="mt-2 text-slate-700 max-w-2xl">{service.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div ref={overviewRef}>
              <h2 className="text-lg font-semibold text-[#1a4480]">Overview</h2>
              <p className="mt-2 text-slate-700">{service.longDescription}</p>
            </div>

            <div className="mt-6" ref={bulletsRef}>
              <h3 className="text-base font-semibold text-[#1a4480]">What’s included</h3>
              <ul className="mt-2 space-y-2">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#fdb81e]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8" ref={faqsRef}>
              <h3 className="text-base font-semibold text-[#1a4480]">FAQs</h3>
              <div className="mt-2 divide-y divide-slate-200 border rounded-lg">
                {service.faqs.map((f, i) => (
                  <details key={i} className="p-4">
                    <summary className="cursor-pointer font-medium text-slate-900">
                      {f.q}
                    </summary>
                    <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT sidebar */}
          <aside className="lg:col-span-1">
            <div
              ref={asideRef}
              className="rounded-xl border border-slate-200 p-5 sticky top-24 bg-white"
            >
              <h4 className="font-semibold text-[#1a4480]">Talk to us</h4>
              <p className="mt-2 text-sm text-slate-600">
                Get scope and pricing tailored to your stack and timelines.
              </p>
              <button className="mt-4 w-full rounded-lg bg-[#fdb81e] text-[#1a4480] px-4 py-2 font-medium hover:brightness-95">
                {service.ctaText}
              </button>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-slate-900">Explore other services</h5>
                <ul className="mt-2 space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="text-sm text-[#005ea2] hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
