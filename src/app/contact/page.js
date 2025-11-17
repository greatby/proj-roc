// CONTACT PAGE (McKinsey/Deloitte Corporate Style)
// File: app/contact/page.jsx
// Tailwind CSS Only — Clean, Premium Corporate UI

import HeadMeta from "@/components/HeadMeta";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <HeadMeta
        title="Contact Us — CorpConsult | Corporate Compliance & MCA Experts"
        description="Get in touch with CorpConsult for ROC filing, MCA compliance, governance advisory and corporate support."
      />

      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">We're Here to Help</h1>
          <p className="mt-6 text-lg text-slate-300">
            Contact our corporate compliance experts for assistance, advisory or service support.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 max-w-6xl">
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
            <p className="mt-4 text-slate-600 text-sm max-w-md">
              Our team usually responds within 6–12 hours.
            </p>

            <div className="mt-10 space-y-8 text-sm text-slate-700">
              <div>
                <h4 className="text-slate-900 font-medium text-base">Email</h4>
                <p className="mt-1 text-slate-600">support@corpconsult.com</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Phone / WhatsApp</h4>
                <p className="mt-1 text-slate-600">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Business Hours</h4>
                <p className="mt-1 text-slate-600">Mon – Sat: 10:00 AM – 7:00 PM</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Office Address</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  CorpConsult India Pvt Ltd
                  <br /> 4th Floor, MG Road
                  <br /> Bangalore, India – 560001
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Send Us a Message</h3>
            <p className="mt-2 text-sm text-slate-600">Our consultants will reach out shortly.</p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="5"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition shadow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-slate-50 border-t border-slate-200 py-20 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Find Us on the Map</h3>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..." // Replace with your actual Google Maps embed
              width="100%"
              height="380"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
