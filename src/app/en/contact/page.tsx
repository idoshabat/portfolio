import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { contactReasons } from "@/lib/site-data-en";

export const metadata = {
  title: "Contact | Studio Ido",
  description: "Start a web or mobile app design project.",
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
              <div key={reason.label} className="flex items-center gap-3 rounded-[8px] border border-[var(--line)] bg-white/62 p-4">
                <reason.icon size={20} className="text-[var(--coral)]" />
                <span className="font-black">{reason.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[8px] border-2 border-[var(--ink)] bg-white p-5 shadow-[12px_12px_0_#171513]">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black">Name</span>
              <input className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">Email</span>
              <input type="email" className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">Project type</span>
              <select className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]">
                <option>Website design</option>
                <option>Mobile app design</option>
                <option>Web app design</option>
                <option>UX audit</option>
                <option>Ongoing design partner</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">Budget</span>
              <select className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]">
                <option>$1k - $3k</option>
                <option>$3k - $6k</option>
                <option>$6k - $10k</option>
                <option>$10k+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">What should we design?</span>
              <textarea className="min-h-36 rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="Tell me about the business, deadline, and goals." />
            </label>
            <a className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-4 text-sm font-black text-white shadow-[0_8px_0_#171513] transition hover:-translate-y-0.5" href="https://wa.me/972549408667?text=Hi%2C%20I%20would%20like%20to%20start%20a%20digital%20project." target="_blank" rel="noreferrer">
              Send a WhatsApp message
              <ArrowUpRight size={18} />
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
