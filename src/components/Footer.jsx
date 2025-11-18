import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-semibold text-white">CorpConsult</h4>
          <p className="mt-3 text-sm text-slate-400 max-w-xs">
            Compliance. Governance. Corporate Excellence.
          </p>
        </div>

        <div>
          <h5 className="text-white font-medium mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium mb-3">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/roc-filing">ROC Filing</Link></li>
            <li><Link href="/services/mca-compliance">MCA Compliance</Link></li>
            <li><Link href="/services/secretarial">Corporate Secretarial</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium mb-3">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>Email: hello@epfdesk.com</li>
            <li>Phone: +919945933333</li>
            <li>Bangalore, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-12">
        © {new Date().getFullYear()} CorpConsult — All Rights Reserved.
      </div>
    </footer>
  );
}
