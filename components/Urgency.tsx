import CTAButton from "./CTAButton";

export default function Urgency() {
  return (
    <section className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
          Book Your Free Consultation
        </p>
        <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-darkText sm:text-4xl">
          Fill out the form below to reserve your free consultation.
        </h2>
        <CTAButton href="#consultation-form" className="mt-8 w-full max-w-sm sm:w-auto">
          Book Free Consultation
        </CTAButton>
      </div>
    </section>
  );
}
