
import Link from "next/link";
import HeadMeta from "@/components/HeadMeta";

export default function HomePage() {
  return (
    <>
      <HeadMeta
        title="Corporate Compliance & MCA Services | CorpConsult"
        description="Premium corporate compliance, ROC filings, MCA documentation and governance consulting.">
      </HeadMeta>

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Transforming Corporate Compliance
            <br /> With Precision & Expertise.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            End-to-end ROC filing, MCA compliance, corporate governance and advisory services
            trusted by startups, SMEs and enterprises.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/services"
              className="px-6 py-3 rounded-md bg-white text-slate-900 text-sm font-semibold shadow hover:bg-slate-200"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md border border-slate-400 text-sm font-medium hover:bg-slate-800"
            >
              Contact Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Services</h2>
          <p className="mt-4 text-slate-600 max-w-xl">
            Strategic compliance and corporate governance for rapid-growth companies.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {["ROC Filing", "MCA Compliance", "Annual Returns"].map((service) => (
              <div key={service} className="border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
                <h3 className="text-xl font-semibold text-slate-900">{service}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Professional documentation, accuracy checks, timeline management & expert verification.
                </p>
                <Link href="/services" className="inline-block mt-4 text-slate-900 font-medium text-sm">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Need Compliance Support?</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          Get reliable corporate advisory services tailored to your company.
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