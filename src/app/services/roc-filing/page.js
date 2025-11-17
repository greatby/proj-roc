import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

export default function RocFilingPage() {
  return (
    <>
      <HeadMeta
        title="ROC Filing Services | CorpConsult"
        description="AOC-4, MGT-7, ADT-1, PAS-3 and all ROC documentation filed with accuracy and expert review."
      />

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">ROC Filing Services</h1>
          <p className="mt-6 text-lg text-slate-300">
            Complete Registrar of Companies filing services for Private Limited, LLP and
            Public companies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">What We File</h2>
            <ul className="mt-6 text-slate-600 space-y-3 text-sm leading-relaxed">
              <li>• AOC-4 — Financial Statements</li>
              <li>• MGT-7 — Annual Return</li>
              <li>• ADT-1 — Auditor Appointment</li>
              <li>• PAS-3 — Allotment of Shares</li>
              <li>• DIR Filings — KYC & DIN Activation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our Process</h2>
            <ol className="mt-6 text-slate-600 space-y-3 text-sm leading-relaxed">
              <li>1. Document Review & Verification</li>
              <li>2. Preparation of eForms</li>
              <li>3. Director Verification</li>
              <li>4. Filing on MCA Portal</li>
              <li>5. Post-Filing Acknowledgements</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Need ROC Filing Assistance?</h3>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold"
        >
          Talk to an Expert
        </Link>
      </section>
    </>
  );
}
