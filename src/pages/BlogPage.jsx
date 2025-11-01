import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  {
    title: "S-Corp vs. LLC: Which Structure Lowers Your Tax Burden?",
    date: "Jan 10, 2026",
    tag: "Entity Strategy",
    slug: "s-corp-vs-llc-tax-burden",
    content: `Choosing between an S-Corp and LLC affects your tax liabilities,
    payroll compliance, and owner compensation. This guide explains entity election
    thresholds, self-employment savings, and the 2026 compliance updates.`,
  },
  {
    title: "2026 Payroll Checklist: W-2, 1099-NEC, and State Filings",
    date: "Jan 05, 2026",
    tag: "Payroll",
    slug: "2026-payroll-checklist",
    content: `In 2026, employer reporting standards are tightening. Learn which
    payroll filings apply, how to avoid late penalties, and what new e-filing
    thresholds you must meet.`,
  },
  {
    title: "Cloud Accounting Stack: Our Favorite 5 Automations",
    date: "Dec 18, 2025",
    tag: "Systems",
    slug: "cloud-accounting-automations",
    content: `Explore our top 5 automation picks for 2025. From AI-based reconciliation
    to document ingestion, each system integrates with your existing bookkeeping
    workflow to boost accuracy and cut manual work.`,
  },
  {
    title: "DCAA Basics for New GovCon Firms",
    date: "Dec 02, 2025",
    tag: "GovCon",
    slug: "dcaa-basics-for-new-govcon-firms",
    content: `Government contractors must understand DCAA compliance early.
    Learn how to handle indirect rate setups, timekeeping controls, and incurred
    cost submissions before your first audit.`,
  },
];

export default function BlogPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold text-[#1a4480]">Blog Not Found</h2>
        <Link to="/" className="text-[#005ea2] hover:underline mt-4 block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs text-[#005ea2] uppercase tracking-widest">{post.tag}</p>
      <h1 className="text-3xl font-semibold text-[#1a4480] mt-2">{post.title}</h1>
      <p className="text-sm text-slate-500 mt-1">{post.date}</p>

      <div className="mt-6 text-slate-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      <Link
        to="/"
        className="mt-10 inline-block text-sm text-[#005ea2] hover:underline"
      >
        ← Back to Blog
      </Link>
    </article>
  );
}
