import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "S-Corp vs. LLC: Which Structure Lowers Your Tax Burden?",
      date: "Jan 10, 2026",
      tag: "Entity Strategy",
      excerpt:
        "Choosing the right entity structure can reduce self-employment taxes and optimize owner compensation. Here’s how to think about S-Corp elections in 2026.",
      slug: "s-corp-vs-llc-tax-burden",
      content: `Choosing between an S-Corp and LLC affects your tax liabilities, 
      payroll compliance, and owner compensation. This guide explains entity election 
      thresholds, self-employment savings, and the 2026 compliance updates.`,
    },
    {
      id: 2,
      title: "2026 Payroll Checklist: W-2, 1099-NEC, and State Filings",
      date: "Jan 05, 2026",
      tag: "Payroll",
      excerpt:
        "Deadlines, forms, and common pitfalls for employers—what you need in one simple checklist to stay compliant and avoid penalties.",
      slug: "2026-payroll-checklist",
      content: `In 2026, employer reporting standards are tightening. Learn which 
      payroll filings apply, how to avoid late penalties, and what new e-filing 
      thresholds you must meet.`,
    },
    {
      id: 3,
      title: "Cloud Accounting Stack: Our Favorite 5 Automations",
      date: "Dec 18, 2025",
      tag: "Systems",
      excerpt:
        "From automated bill pay to bank rules and receipt capture—these tools save hours each month and keep your books audit-ready.",
      slug: "cloud-accounting-automations",
      content: `Explore our top 5 automation picks for 2025. From AI-based 
      reconciliation to document ingestion, each system integrates with your 
      existing bookkeeping workflow to boost accuracy and cut manual work.`,
    },
    {
      id: 4,
      title: "DCAA Basics for New GovCon Firms",
      date: "Dec 02, 2025",
      tag: "GovCon",
      excerpt:
        "Timekeeping, indirect rates, and incurred cost submissions—what contracting officers expect and how to prepare from day one.",
      slug: "dcaa-basics-for-new-govcon-firms",
      content: `Government contractors must understand DCAA compliance early. 
      Learn how to handle indirect rate setups, timekeeping controls, and incurred 
      cost submissions before your first audit.`,
    },
  ];

  return (
    <section id="blogs" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#1a4480]">From the Blog</h3>
            <p className="text-sm text-slate-600 mt-1">
              Practical guidance on tax, payroll, cloud systems, and compliance.
            </p>
          </div>
          <Link
            to="/blogs"
            className="hidden sm:inline text-sm text-[#005ea2] hover:underline"
          >
            View all posts →
          </Link>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#d9e8f6] text-[#0b4778] grid place-items-center text-sm font-semibold">
                  {p.tag.slice(0, 1)}
                </div>
                <div className="ml-auto text-[11px] text-slate-500">{p.date}</div>
              </div>

              <div className="p-4">
                <span className="inline-flex items-center rounded-full bg-[#f6f9fc] text-[#0b4778] px-2 py-0.5 text-[11px] font-medium">
                  {p.tag}
                </span>
                <h4 className="mt-2 font-semibold text-slate-900 group-hover:text-[#005ea2]">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {p.excerpt}
                </p>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-3 inline-flex items-center text-sm text-[#005ea2] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
