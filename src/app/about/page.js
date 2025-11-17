// ABOUT PAGE (McKinsey/Deloitte Corporate Style)
// File: app/about/page.jsx
// Tailwind CSS Only — Premium Consulting UI

import HeadMeta from "@/components/HeadMeta";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <HeadMeta
        title="About Us — CorpConsult | Corporate Compliance & Governance Experts"
        description="Learn about CorpConsult, our mission, values, leadership and corporate compliance expertise."
      />

      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white text-center border-b border-slate-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">About CorpConsult</h1>
          <p className="mt-6 text-lg text-slate-300">
            Transforming corporate compliance, governance and documentation with precision and expertise.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-lg">
              CorpConsult was founded with a mission to simplify and professionalize corporate
              compliance for businesses in India. Companies of all sizes struggle with changing MCA
              regulations, ROC filings, governance structures, and documentation — and that's where we come in.
              <br /><br />
              With a team of experienced Company Secretaries, compliance experts and governance
              professionals, we ensure your company always remains compliant, structured and ready for growth.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="/about-corp.jpg"
              alt="CorpConsult"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Our Mission & Vision</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
            Driving excellence in compliance, governance and corporate processes.
          </p>
        </div>

        <div className="container mx-auto px-6 mt-16 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              To deliver accurate, reliable and timely compliance services that help businesses
              operate with confidence and meet all statutory obligations.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              To become India's most trusted corporate compliance advisory, empowering companies
              through structured governance and efficient workflow systems.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          <p className="mt-4 text-slate-600 text-sm max-w-xl mx-auto">
            Built on principles that ensure corporate excellence.
          </p>
        </div>

        <div className="container mx-auto px-6 mt-16 grid md:grid-cols-3 gap-12 max-w-6xl">
          {[{
            title: "Integrity",
            desc: "Transparent processes, ethical compliance and honest reporting.",
          }, {
            title: "Expertise",
            desc: "Led by experienced CS and compliance specialists.",
          }, {
            title: "Commitment",
            desc: "Dedicated support ensuring your company stays compliant always.",
          }].map((val) => (
            <div
              key={val.title}
              className="bg-white border border-slate-200 p-10 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{val.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to Work With Compliance Experts?</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm">
          Our advisory team is here to support your company at every compliance stage.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}