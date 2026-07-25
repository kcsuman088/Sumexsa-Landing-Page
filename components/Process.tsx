const steps = [
  {
    title: "Step 1",
    copy: "Book your free consultation by filling out the form."
  },
  {
    title: "Step 2",
    copy: "Meet one-to-one to discuss your business, goals, and current marketing challenges."
  },
  {
    title: "Step 3",
    copy: "Receive a customized AI marketing strategy tailored to your business."
  }
];

export default function Process() {
  return (
    <section className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-lightBlue via-white to-lightPink px-6 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
            Consultation Process
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-darkText sm:text-4xl">
            Simple, personal, and built around your business
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-3xl bg-white/86 p-6 text-center shadow-sm backdrop-blur">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                {step.title.replace("Step ", "")}
              </div>
              <h3 className="mt-5 text-xl font-black text-darkText">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-darkText/70">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
