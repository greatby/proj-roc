import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Corporate Compliance & MCA Services | Premium Consulting",
  description: "ROC filing, MCA compliance, corporate governance and end-to-end company management services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased bg-white text-slate-900">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
