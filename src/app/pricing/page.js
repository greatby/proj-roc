
import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <HeadMeta
        title="Pricing — Corporate Compliance & MCA Services | CorpConsult"
        description="Transparent pricing for ROC filing, MCA compliance, annual returns, governance and secretarial services."
      />

      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white text-center border-b border-slate-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">Simple, Transparent Pricing</h1>
          <p className="mt-6 text-lg text-slate-300">
            Choose the plan that fits your company's compliance needs.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* PLAN 1 */}
            <div className="border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow transition bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Starter</h3>
              <p className="mt-3 text-sm text-slate-600">For small businesses & early-stage startups</p>
              <p className="mt-6 text-4xl font-bold text-slate-900">₹ 4,999</p>
              <p className="text-sm text-slate-500">per year</p>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li>• Basic ROC filings</li>
                <li>• Annual return preparation</li>
                <li>• Document verification</li>
                <li>• Email support</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block mt-10 w-full text-center px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
              >
                Get Started
              </Link>
            </div>

            {/* PLAN 2 */}
            <div className="border border-slate-200 rounded-2xl p-10 shadow-lg bg-slate-50 hover:shadow-md transition relative">
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full">
                Popular
              </span>

              <h3 className="text-xl font-semibold text-slate-900">Growth</h3>
              <p className="mt-3 text-sm text-slate-600">For growing SMEs & expanding companies</p>
              <p className="mt-6 text-4xl font-bold text-slate-900">₹ 9,999</p>
              <p className="text-sm text-slate-500">per year</p>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li>• Everything in Starter</li>
                <li>• MCA event-based filings</li>
                <li>• DIN/Director KYC</li>
                <li>• Dedicated compliance manager</li>
                <li>• Phone + WhatsApp support</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block mt-10 w-full text-center px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
              >
                Choose Plan
              </Link>
            </div>

            {/* PLAN 3 */}
            <div className="border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow transition bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Enterprise</h3>
              <p className="mt-3 text-sm text-slate-600">For established companies with complex needs</p>
              <p className="mt-6 text-4xl font-bold text-slate-900">Custom</p>
              <p className="text-sm text-slate-500">Tailored pricing</p>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li>• Governance advisory</li>
                <li>• Secretarial compliance</li>
                <li>• Board meeting documentation</li>
                <li>• Corporate legal drafting</li>
                <li>• Priority support</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block mt-10 w-full text-center px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900">Compare Plans</h2>
          <p className="mt-4 text-slate-600 max-w-xl">Find the plan that fits your compliance needs.</p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center">Growth</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td className="py-4 px-6">Basic ROC Filings</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Annual Returns</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">MCA Event-Based Filings</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Director KYC / DIN Services</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔️</td>
                  <td className="text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Governance Advisory</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔️</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-slate-900">Not Sure Which Plan to Choose?</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm">
          Our experts will help you pick the right plan for your company.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
        >
          Talk to a Consultant
        </Link>
      </section>
    </>
  );
}