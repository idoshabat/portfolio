export const metadata = {
  title: "Terms of Use | Studio Ido",
  description: "Website terms of use for Studio Ido.",
};

const sections = [
  {
    title: "General",
    body: "Use of the Studio Ido website is subject to these terms. Browsing the website constitutes acceptance of the terms. If you do not agree, please avoid using the website.",
  },
  {
    title: "Services",
    body: "The website presents design and development services for landing pages, business websites, e-commerce websites, web platforms, mobile apps, and digital redesigns. The information is provided for general impression only and does not constitute a binding offer or commitment to perform a project.",
  },
  {
    title: "Inquiries and Proposals",
    body: "Contacting Studio Ido through the website or WhatsApp does not create a binding engagement. An engagement is formed only after discovery, a proposal, commercial agreement, and explicit approval by both parties.",
  },
  {
    title: "Content and Intellectual Property",
    body: "All copyrights and intellectual property rights in the website, including text, design, structure, code, images, illustrations, graphic elements, and other content, belong to Studio Ido or third parties who permitted their use. You may not copy, reproduce, distribute, publish, or commercially use website content without prior written permission.",
  },
  {
    title: "Projects and External Links",
    body: "The website may include links to external websites or client projects. Studio Ido is not responsible for the content, availability, security, privacy policies, or activity of external websites.",
  },
  {
    title: "Disclaimer and Limitation of Liability",
    body: "The website is provided as is. Efforts are made to keep information accurate and updated, but errors, changes, or inaccuracies may occur. Studio Ido will not be liable for direct or indirect damage arising from use of the website, reliance on website information, or technical issues.",
  },
  {
    title: "Permitted Use",
    body: "You may not perform actions that may harm the website, its security, other users, or Studio Ido's rights. You may not send content that is offensive, misleading, unlawful, infringing, or contains malicious code.",
  },
  {
    title: "Law and Jurisdiction",
    body: "These terms and use of the website are governed by the laws of the State of Israel. Exclusive jurisdiction for any dispute related to the website will be granted to the competent courts in Israel.",
  },
  {
    title: "Updates",
    body: "Studio Ido may update these terms from time to time. The latest update date will appear on this page.",
  },
];

export default function EnglishTermsPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--cobalt)]">Legal</p>
        <h1 className="mt-4 text-5xl font-black leading-tight">Terms of Use</h1>
        <p className="mt-5 leading-8 text-black/62">Last updated: May 25, 2026. This is a general website document and is not individual legal advice.</p>
        <div className="mt-12 grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[8px] border border-[var(--line)] bg-white/68 p-6">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-3 leading-8 text-black/66">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
