import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

export default function MCACompliancePage() {
  return (
    <>
      <HeadMeta
        title="MCA Compliance Services | CorpConsult"
        description="Annual MCA compliance, event-based filings, statutory reporting & advisory."
      />

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">MCA Compliance Services</h1>
          <p className="mt-6 text-lg text-slate-300">
            Mandatory annual and event-based MCA compliance handled with accuracy and
            governance expertise.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Annual Compliances</h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3">
              <li>• AOC-4 Filing</li>
              <li>• MGT-7 Annual Return</li>
              <li>• Auditor Appointment (ADT-1)</li>
              <li>• Director KYC</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Event-Based Compliances</h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3">
              <li>• Change in Directors</li>
              <li>• Share Allotment / Transfer</li>
              <li>• Registered Office Change</li>
              <li>• Charge Creation / Modification</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Ensure 100% MCA Compliance</h3>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold"
        >
          Speak to Our Advisor
        </Link>
      </section>
    </>
  );
}

// ==============================================================
// 3) ANNUAL RETURNS PAGE — app/services/annual-returns/page.jsx
// ==============================================================
export function AnnualReturnsPage() {
  return (
    <>
      <HeadMeta
        title="Annual Returns Filing | CorpConsult"
        description="MGT-7, AOC-4, annual statements preparation, verification & MCA filing."
      />

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">Annual Returns Filing</h1>
          <p className="mt-6 text-lg text-slate-300">
            Complete annual return filing support for all company types, handled by
            professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Includes</h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3">
              <li>• MGT-7 Filing</li>
              <li>• AOC-4 Filing</li>
              <li>• Preparation of financial summaries</li>
              <li>• Compliance review</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Choose Us?</h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3">
              <li>• Accurate form preparation</li>
              <li>• Expert document verification</li>
              <li>• On-time submissions</li>
              <li>• Dedicated compliance manager</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 text-center">
        <h3 className="text-2xl font-bold text-slate-900">File Your Annual Returns On Time</h3>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold"
        >
          Contact Compliance Team
        </Link>
      </section>
    </>
  );
}
