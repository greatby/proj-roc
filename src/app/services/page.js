// SERVICES PAGE (All Services in One Component)
// File: app/services/page.jsx – McKinsey/Deloitte Premium Style
// Tailwind-only, clean consulting-grade layout

import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Compliance Services",
    description:
      "All ROC filing, MCA compliance, governance, secretarial & company law services in one place.",
  };

  const services = [
    {
      title: "ROC Filing",
      description:
        "Complete Registrar of Companies filing including AOC-4, MGT-7, PAS-3, ADT-1 and more.",
      link: "/services/roc-filing",
    },
    {
      title: "MCA Compliance",
      description:
        "Annual MCA documentation, event-based compliance, and statutory reporting.",
      link: "/services/mca-compliance",
    },
    {
      title: "Annual Returns",
      description:
        "Full preparation & filing of statutory annual returns and financial statements.",
      link: "/services/annual-returns",
    },
    {
      title: "Corporate Governance",
      description:
        "Board structuring, policies, corporate governance framework & compliance.",
      link: "/services/corporate-governance",
    },
    {
      title: "Secretarial Compliance",
      description:
        "Company Secretary services, board minutes, resolutions, registers & advisory.",
      link: "/services/secretarial",
    },
    {
      title: "Company Incorporation",
      description:
        "End-to-end company registration: Pvt Ltd, LLP, OPC, Section 8 & more.",
      link: "/services/company-incorporation",
    },
    // {
    //   title: "Director KYC & DIN Services",
    //   description:
    //     "DIR-3 KYC filing, DIN activation, updates & compliance support.",
    //   link: "/services/director-kyc",
    // },
    // {
    //   title: "Share Allotment & Transfer",
    //   description:
    //     "PAS-3 filings, share certificates, allotment, transfer, and compliance.",
    //   link: "/services/share-transfer",
    // },
    // {
    //   title: "Corporate Legal Documentation",
    //   description:
    //     "Board resolutions, agreements, shareholder documents and legal drafting.",
    //   link: "/services/legal-docs",
    // },
  ];

  return (
    <>
      <HeadMeta
        title="All Corporate Services — ROC, MCA, Governance & Secretarial | CorpConsult"
        description="Explore all corporate compliance services including ROC filing, MCA compliance, governance, secretarial, legal documentation, DIN KYC & more."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            End-to-End Corporate
            <br /> Compliance Services
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            We offer a seamless suite of ROC, MCA and corporate governance solutions for
            startups, SMEs and enterprises.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-4 text-slate-600 max-w-xl">
            Comprehensive compliance and documentation solutions under one roof.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.link}
                className="block border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-white group"
              >
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {svc.description}
                </p>
                <span className="inline-block mt-4 text-slate-900 font-medium text-sm">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900">Need Help Choosing the Right Service?</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          Get expert guidance for your company's compliance and documentation needs.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
        >
          Talk to an Expert
        </Link>
      </section>
    </>
  );
}