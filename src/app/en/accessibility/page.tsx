export const metadata = {
  title: "Accessibility Statement | Studio Ido",
  description: "Accessibility statement for Studio Ido.",
};

const sections = [
  {
    title: "Accessibility Commitment",
    body: "Studio Ido values equal, respectful, and accessible service for all users, including people with disabilities. The website was built and reviewed with the goal of enabling comfortable use for as many users as possible.",
  },
  {
    title: "Accessibility Standard",
    body: "The website aims to comply with the Israeli Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 5773-2013, and Israeli Standard 5568, which is based on WCAG 2.0 Level AA, subject to the nature of the website, available content, and technological limitations.",
  },
  {
    title: "Accessibility Adjustments",
    body: "The website emphasizes clear heading structure, consistent navigation, keyboard navigation support, color contrast, readable text, alternative text where required, responsive layouts, and semantic components where possible.",
  },
  {
    title: "Third-Party Content",
    body: "Some content or links may lead to external websites or services not controlled by Studio Ido. In such cases, the accessibility level depends on the external provider.",
  },
  {
    title: "Accessibility Contact",
    body: "If you encounter an accessibility issue on the website, please contact us and we will work to address it as soon as possible. Please include the page URL, issue description, browser type, operating system, and assistive technology used, if any. You can contact us through the contact page or WhatsApp.",
  },
  {
    title: "Statement Updates",
    body: "This accessibility statement will be reviewed and updated from time to time according to changes in the website, new content, and legal requirements.",
  },
];

export default function EnglishAccessibilityPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--cobalt)]">Accessibility</p>
        <h1 className="mt-4 text-5xl font-black leading-tight">Accessibility Statement</h1>
        <p className="mt-5 leading-8 text-black/62">Last updated: May 25, 2026.</p>
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
