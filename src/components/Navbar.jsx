import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900">
          CorpConsult
        </Link>

        <nav className="hidden md:flex gap-10 text-sm font-medium text-slate-700">
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-block px-5 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
        >
          Get Consultation
        </Link>

        <button className="md:hidden p-2 border rounded-lg">☰</button>
      </div>
    </header>
  );
}
