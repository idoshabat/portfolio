export const metadata = {
  title: "Privacy Policy | Studio Ido",
  description: "Privacy policy for Studio Ido.",
};

const sections = [
  {
    title: "General",
    body: "Studio Ido respects the privacy of website users. This policy explains what information may be collected when using the website, how it may be used, how it is stored, and what rights users may have under applicable Israeli law, including the Protection of Privacy Law, 5741-1981, Amendment 13, and the Protection of Privacy Regulations (Data Security), 5777-2017.",
  },
  {
    title: "Information Collected",
    body: "When you contact Studio Ido through the website, contact form, or WhatsApp, information you choose to provide may be collected, such as name, contact details, project type, budget, message content, and any other details you provide. Basic technical information may also be collected if analytics, hosting, or security tools are used.",
  },
  {
    title: "Use of Information",
    body: "The information may be used to respond to inquiries, assess project fit, schedule calls, provide proposals, manage client communication, improve the website and services, secure the website, and comply with legal requirements.",
  },
  {
    title: "Third Parties",
    body: "Personal information will not be shared with third parties except where needed to provide the service, operate the website, use hosting, infrastructure or communication providers, comply with law, protect legal rights, or with your consent. External services such as WhatsApp are also subject to their own privacy policies.",
  },
  {
    title: "Retention and Security",
    body: "Information is retained for as long as needed for the purposes for which it was collected, business communication, documentation, and legal obligations. Reasonable and accepted security measures are used, but no online system can guarantee absolute protection.",
  },
  {
    title: "User Rights",
    body: "Under Israeli privacy law, you may have the right to review personal information about you and, in appropriate cases, request correction or deletion of information that is inaccurate, incomplete, unclear, or outdated. Requests can be made through the contact page or WhatsApp.",
  },
  {
    title: "Cookies and Analytics",
    body: "The website may use cookies or similar technologies for operation, security, improving user experience, and analyzing website usage. You may manage or block cookies in your browser settings, but this may affect some website functionality.",
  },
  {
    title: "Updates",
    body: "This policy may be updated from time to time due to changes in the website, services, or legal requirements. The latest update date will appear on this page.",
  },
];

export default function EnglishPrivacyPolicyPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--cobalt)]">Legal</p>
        <h1 className="mt-4 text-5xl font-black leading-tight">Privacy Policy</h1>
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
