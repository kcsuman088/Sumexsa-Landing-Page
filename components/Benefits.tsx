import { BarChart3, Bot, Lightbulb, ListChecks, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Discover gaps",
    copy: "Discover why your current marketing isn't delivering consistent results."
  },
  {
    icon: Target,
    title: "Find opportunities",
    copy: "Identify the biggest opportunities to generate more qualified leads."
  },
  {
    icon: ListChecks,
    title: "Get a plan",
    copy: "Receive a customized AI marketing plan for your business."
  },
  {
    icon: Bot,
    title: "Use AI better",
    copy: "Learn where AI can improve your marketing and sales process."
  },
  {
    icon: Lightbulb,
    title: "Know next steps",
    copy: "Get clear next steps to help grow your business."
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
            How You Benefit From This Consultation
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-darkText sm:text-4xl">
            Leave with a clearer path to qualified leads and sales
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lightPink text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-darkText">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-darkText/68">{benefit.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
