import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Neon Code",
  description: "Privacy Policy for Neon Code digital products and services.",
};

const sections = [
  {
    title: "Information We Collect",
    body:
      "We may collect the information you share with us directly, including your name, email address, phone number, company details, project requirements, billing details, and any message you send through our forms or support channels.",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use your information to respond to inquiries, deliver services, manage projects, process payments, improve our website, provide support, and communicate important updates about your account or our work together.",
  },
  {
    title: "Analytics and Cookies",
    body:
      "Our website may use cookies, analytics tools, and similar technologies to understand traffic, measure performance, and improve user experience. You can control cookies through your browser settings.",
  },
  {
    title: "How We Share Information",
    body:
      "We do not sell your personal information. We may share data with trusted service providers who help us operate our website, payments, analytics, marketing, or project delivery, but only when reasonably necessary.",
  },
  {
    title: "Data Retention",
    body:
      "We keep personal information only for as long as necessary to provide services, meet legal or accounting obligations, resolve disputes, and enforce our agreements.",
  },
  {
    title: "Data Security",
    body:
      "We use reasonable technical and organizational safeguards to protect personal information. No system is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body:
      "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information. You may also request details about the data we hold about you.",
  },
  {
    title: "Third-Party Links",
    body:
      "Our website may contain links to third-party sites or services. We are not responsible for the privacy practices or content of those external websites.",
  },
  {
    title: "Policy Updates",
    body:
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 pb-24 pt-32 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_28%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
          <span className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Privacy Policy
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            How Neon Code collects, uses, and protects your information.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            This Privacy Policy explains how Neon Code handles personal information when you visit our
            website, contact us, or use our digital services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 px-4 py-2">Effective date: March 10, 2026</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Company: Neon Code</span>
          </div>
        </div>

        <div className="grid gap-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-white/8 bg-[#0a0a0a]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            If you have questions about this policy or want to request changes to your personal information,
            contact us through our contact page.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Contact Neon Code
          </Link>
        </div>
      </div>
    </section>
  );
}
