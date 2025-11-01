

import React, { useRef, useState } from "react";
import { FaBriefcase, FaBalanceScale, FaCloud } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const HighlightCard = ({ title, shortText, fullText, Icon }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  // Smooth height animation (measure actual content height)
  const maxH = expanded ? `${contentRef.current?.scrollHeight || 0}px` : "0px";

  return (
    <div
      className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-colors duration-300 hover:shadow-md"
      aria-expanded={expanded}
    >
      {/* Icon + Heading */}
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-[#fdb81e] to-[#f7a600] text-[#1a4480] shadow">
          <Icon className="text-xl" />
        </div>
        <h3 className="font-semibold text-lg md:text-lg text-slate-900">{title}</h3>
      </div>

      {/* Lead text (always visible) */}
      <p className="mt-3 text-sm md:text-[13px] text-slate-700">{shortText}</p>

      {/* Expandable details */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: maxH }}
        aria-hidden={!expanded}
      >
        <div
          ref={contentRef}
          className={`mt-2 py-2 text-sm md:text-[13px] text-slate-700 leading-relaxed transition-all duration-300 ${
            expanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          {fullText}
        </div>
      </div>

      {/* Toggle button (only affects this card) */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 inline-flex items-center gap-2 rounded-lg   text-sm md:text-sm font-medium text-[#005ea2] hover:cursor-pointer "
        aria-expanded={expanded}
      >
        {expanded ? "Show Less" : "Learn More"}
        <FiChevronDown
          className={`text-[#005ea2] transition-transform duration-300 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Business-Only Focus",
      shortText:
        "We serve companies, not individuals—precision books, on-time filings, audit-ready data.",
      fullText:
        "We serve companies, not individuals—precision books, on-time filings, and audit-ready data. Our dedicated accounting experts tailor every process to your business structure, providing scalable systems that grow with you. From financial reporting to compliance, we align every transaction with long-term goals and audit standards.",
      Icon: FaBriefcase,
    },
    {
      title: "Local + Federal Expertise",
      shortText:
        "Northern VA, DC, MD know-how with multi-state and DCAA compliance.",
      fullText:
        "We specialize in regional and federal standards—including multi-state filing and DCAA compliance—so your books stay aligned with every applicable rule. Whether managing multi-entity payroll or government contracts, we deliver compliance and clarity at every level.",
      Icon: FaBalanceScale,
    },
    {
      title: "Cloud-Based Systems",
      shortText:
        "Real-time access, automated reporting, secure document sharing.",
      fullText:
        "Gain real-time visibility into performance from anywhere. We integrate secure, cloud-based systems and automation to reduce manual errors, increase efficiency, and deliver actionable insights on demand.",
      Icon: FaCloud,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {highlights.map((h) => (
        <HighlightCard key={h.title} {...h} />
      ))}
    </div>
  );
}





