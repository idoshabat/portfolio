import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { contactReasons } from "@/lib/site-data-en";

export const metadata = {
  title: "Contact | Studio Ido",
  description: "Start a landing page, business website, e-commerce, web platform, or mobile app project.",
};

export default function EnglishContactPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell me what you are building. I will bring the sharp edges."
            copy="Send a short message with the project type, business goal, and timeline. I will reply with focused questions and the next step."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div key={reason.label} className="flex items-center gap-3 border border-[var(--line)] bg-white/62 p-4 shadow-[0_14px_32px_rgba(27,23,19,0.06)]">
                <reason.icon size={20} className="text-[var(--coral)]" />
                <span className="font-semibold">{reason.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="border border-[var(--line)] bg-white/86 p-5 shadow-[0_28px_70px_rgba(27,23,19,0.14)]">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Name</span>
              <input className="border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(110,116,95,0.16)]" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Email</span>
              <input type="email" className="border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(110,116,95,0.16)]" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Project type</span>
              <select className="border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(110,116,95,0.16)]">
                <option>Landing page</option>
                <option>Business website</option>
                <option>E-commerce website</option>
                <option>Web platform</option>
                <option>Mobile app</option>
                <option>Redesign & improvement</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Budget</span>
              <select className="border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(110,116,95,0.16)]">
                <option>$1k - $3k</option>
                <option>$3k - $6k</option>
                <option>$6k - $10k</option>
                <option>$10k+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">What should we design?</span>
              <textarea className="min-h-36 border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(110,116,95,0.16)]" placeholder="Tell me about the business, deadline, and goals." />
            </label>
            <label className="flex items-start gap-3 border border-[var(--line)] bg-[var(--paper)] p-4 text-sm leading-6 text-black/68">
              <input
                type="checkbox"
                required
                className="mt-1 size-4 accent-[var(--cobalt)]"
              />
              <span>
                I confirm that I have read and agree to the{" "}
                <Link href="/en/terms" className="font-semibold text-[var(--cobalt)] underline-offset-4 hover:underline">
                  Terms of Use
                </Link>
                {" "}and{" "}
                <Link href="/en/privacy-policy" className="font-semibold text-[var(--cobalt)] underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            <a className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(27,23,19,0.18)] transition hover:-translate-y-0.5" href="https://wa.me/972549408667?text=Hi%2C%20I%20would%20like%20to%20start%20a%20digital%20project." target="_blank" rel="noreferrer">
              Send a WhatsApp message
              <ArrowUpRight size={18} />
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
