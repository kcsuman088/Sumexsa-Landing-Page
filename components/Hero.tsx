import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-7 sm:pb-24 sm:pt-10">
      <div className="absolute left-1/2 top-4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-lightPink/80 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <div className="absolute right-[-5rem] top-24 -z-10 h-52 w-52 rounded-full bg-lightBlue blur-3xl sm:right-12 sm:h-80 sm:w-80" />
      <div className="soft-grid absolute inset-x-0 top-0 -z-20 h-full opacity-70" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-sm">
          Book the Call
        </p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.04] tracking-normal text-darkText sm:text-6xl lg:text-7xl">
          Get Your Free <span className="text-primary">AI Marketing Consultation</span> & Customized Growth Plan
        </h1>
        <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-darkText/75 sm:text-xl">
          Discover the biggest opportunities to generate more qualified leads and increase sales with a personalized AI marketing strategy built for your business.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-darkText/68">
          One-to-One Consultation. Customized Strategy for Your Business.
        </p>
        <CTAButton href="#consultation-form" className="mt-9 w-full max-w-sm sm:w-auto">
          Book Free Consultation
        </CTAButton>
      </div>
    </section>
  );
}
