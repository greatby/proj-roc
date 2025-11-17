import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

export default function CorporateGovernancePage() {
  return (
    <>
      <HeadMeta
        title="Corporate Governance Consulting | CorpConsult"
        description="Board structuring, governance frameworks, policy drafting, internal controls and corporate compliance advisory."
      />

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Corporate Governance
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Strengthening your company's governance, structure, policies and
            compliance culture.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Governance Services
            </h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3">
              <li>• Board structuring & advisory</li>
              <li>• Corporate governance framework design</li>
              <li>• Compliance audits & risk analysis</li>
              <li>• Statutory register maintenance</li>
              <li>• Policy drafting & implementation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why It Matters
            </h2>
            <ul className="mt-6 text-sm text-slate-600 space-y-3 leading-relaxed">
              <li>• Builds strong corporate culture & accountability</li>
              <li>• Reduces compliance risk and legal exposure</li>
              <li>• Enhances investor & stakeholder trust</li>
              <li>• Strengthens board performance and reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          Need Governance Advisory?
        </h3>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm">
          Get expert guidance to strengthen your governance structure, policies
          and compliance culture.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
        >
          Consult Now
        </Link>
      </section>
    </>
  );
}
