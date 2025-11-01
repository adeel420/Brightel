// All service content in one place.
// You can freely expand fields later (pricing, case studies, downloads, etc.)

import {
  FaCalculator, FaUsersCog, FaCloud, FaHandshake, FaRegChartBar, FaFileInvoiceDollar
} from "react-icons/fa";

export const services = [
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    icon: FaCalculator,
    tag: "Accounting",
    summary:
      "Day-to-day books, reconciliations, and monthly close you can rely on.",
    longDescription:
      "We manage your general ledger, AP/AR, bank/credit card reconciliations, and month-end close so your financials are decision-ready. Expect clear reporting, repeatable processes, and audit-ready documentation.",
    bullets: [
      "GL maintenance, AP/AR, bank & credit card reconciliations",
      "Monthly financials (P&L, balance sheet, cash flow)",
      "Sales & inventory tracking and sales tax filing",
      "Month-end & year-end close with supporting workpapers",
    ],
    faqs: [
      {
        q: "How do we share documents?",
        a: "We use a secure client portal with folder rules and versioning, plus bank feeds to minimize manual uploads.",
      },
      {
        q: "Can you work with my existing system?",
        a: "Yes. We support QuickBooks Online/Desktop, Xero, Sage, and can advise on best-fit setups.",
      },
    ],
    ctaText: "Get a bookkeeping quote",
  },
  {
    slug: "payroll-accounting-reporting",
    title: "Payroll Accounting & Reporting",
    icon: FaFileInvoiceDollar,
    tag: "Payroll",
    summary:
      "Payroll processing and filings (941, 940, W-2, W-3, SUTA) done correctly and on time.",
    longDescription:
      "We handle multi-state payroll complexities, withholdings, benefits mapping, and quarter-/year-end reports so you stay compliant and employees get paid accurately.",
    bullets: [
      "All employee types and multi-state compliance",
      "Federal/state payroll tax returns and deposits",
      "Year-end W-2/W-3, 1099-NEC",
      "Benefits & deductions mapping to the GL",
    ],
    faqs: [
      {
        q: "Do you integrate with payroll platforms?",
        a: "Yes—Gusto, ADP, Paychex, and others. We’ll align the GL to your chart of accounts.",
      },
    ],
    ctaText: "Streamline my payroll",
  },
  {
    slug: "govcon-dcaa-compliant",
    title: "Government Contract Accounting (DCAA-Compliant)",
    icon: FaRegChartBar,
    tag: "GovCon",
    summary:
      "Timekeeping, indirect rates, and audit-ready reports for contractors.",
    longDescription:
      "From labor distribution to incurred cost submissions, we help you operate to DCAA expectations with defensible indirect rates and proper internal controls.",
    bullets: [
      "Fringe/Overhead/G&A rate design and monitoring",
      "Timekeeping & labor allocation controls",
      "Incurred Cost Submissions, forward pricing support",
      "Deltek Costpoint & project accounting advisory",
    ],
    faqs: [
      {
        q: "Can you prepare us for a DCAA audit?",
        a: "Yes. We review controls, documentation, and corrective actions—then support you through the process.",
      },
    ],
    ctaText: "Get DCAA help",
  },
  {
    slug: "systems-cloud-accounting",
    title: "Systems & Cloud Accounting",
    icon: FaCloud,
    tag: "Systems",
    summary:
      "Automations, secure sharing, and real-time dashboards—done right.",
    longDescription:
      "We select, implement, and maintain your cloud stack for speed, accuracy, and scale. Fewer spreadsheets, more signal.",
    bullets: [
      "QuickBooks/QBO, Xero, Sage, Deltek implementations",
      "Receipt capture, bill pay, approvals, and bank rules",
      "Dashboarding & alerts for cash and KPIs",
      "Access & roles hardening / audit trails",
    ],
    faqs: [
      {
        q: "Will you migrate our historical data?",
        a: "Yes. We plan and test migrations so beginning balances and comparatives tie out cleanly.",
      },
    ],
    ctaText: "Upgrade my stack",
  },
  {
    slug: "business-accounting-advisory",
    title: "Business Accounting & Advisory",
    icon: FaHandshake,
    tag: "Advisory",
    summary:
      "Budgeting, forecasting, cash-flow, and process design to grow with confidence.",
    longDescription:
      "We turn your numbers into decisions—budget models, unit economics, and bank-ready financial packages that make growth predictable.",
    bullets: [
      "Budgets, rolling forecasts, scenario modeling",
      "Cash-flow & unit economics diagnostics",
      "Process design and internal control setup",
      "Board/bank reporting packs",
    ],
    faqs: [
      {
        q: "Do you join investor or bank meetings?",
        a: "We can. We prep the materials and attend to walk through the numbers and assumptions.",
      },
    ],
    ctaText: "Talk to an advisor",
  },
  {
    slug: "transparent-pricing-dedicated-accountants",
    title: "Transparent Pricing & Dedicated Accountants",
    icon: FaUsersCog,
    tag: "Service",
    summary:
      "Clear fees, proactive communication, and a team that knows your books.",
    longDescription:
      "We scope cleanly, price transparently, and assign a dedicated pod so work is consistent and questions get fast answers.",
    bullets: [
      "Fixed or usage-based pricing options",
      "Dedicated pod (lead + accountant + reviewer)",
      "SLAs for closes and responses",
      "Quarterly reviews to optimize scope & cost",
    ],
    faqs: [
      {
        q: "Can we scale the engagement up/down?",
        a: "Absolutely—scope is re-evaluated quarterly and can adjust to your needs.",
      },
    ],
    ctaText: "See pricing options",
  },
];

// quick helper
export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
