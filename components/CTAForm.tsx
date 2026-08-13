import { ShieldCheck } from "lucide-react";
import FlodeskEmbed from "./FlodeskEmbed";

export default function CTAForm() {
  return (
    <section id="consultation-form" className="px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[32px] bg-darkText px-6 py-8 text-white shadow-soft sm:px-8 sm:py-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">
            Book the Call
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            One-to-One Consultation
          </h2>
          <p className="mt-5 text-base leading-7 text-white/76">
            Customized Strategy for Your Business
          </p>
          <p className="mt-5 text-base leading-7 text-white/76">
            Fill out the form below to reserve your free consultation.
          </p>
          <div className="mt-8 rounded-3xl bg-white/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 flex-none text-softBlue" aria-hidden="true" />
              <p className="text-sm leading-6 text-white/80">
                We respect your privacy. No spam.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-primary/10 bg-white p-5 shadow-soft sm:p-8">
          <FlodeskEmbed />
          <p className="mt-4 text-center text-sm leading-6 text-darkText/60">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
