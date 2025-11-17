// app/sitemap.js

export default function sitemap() {
  const base = "https://yourdomain.com";

  return [
    // MAIN PAGES
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
    },

    // SERVICE DETAIL PAGES
    {
      url: `${base}/services/roc-filing`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services/mca-compliance`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services/annual-returns`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services/secretarial`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services/corporate-governance`,
      lastModified: new Date(),
    },

    // OPTIONAL FUTURE PAGES (UNCOMMENT WHEN READY)
    // { url: `${base}/about`, lastModified: new Date() },
    // { url: `${base}/team`, lastModified: new Date() },
    // { url: `${base}/careers`, lastModified: new Date() },
    // { url: `${base}/faq`, lastModified: new Date() },

    // LEGAL PAGES — uncomment if created
    // { url: `${base}/privacy-policy`, lastModified: new Date() },
    // { url: `${base}/terms-and-conditions`, lastModified: new Date() },
    // { url: `${base}/refund-policy`, lastModified: new Date() },
  ];
}
