import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "You're In",
  description:
    "Your free AI marketing consultation request has been received. Watch the short video and message us on WhatsApp to confirm."
};

const nextSteps = [
  "Watch the short video above.",
  "Send a message on WhatsApp to confirm your consultation.",
  "Join your one-to-one consultation and receive your customized AI marketing strategy designed specifically for your business."
];

const preparation = [
  "Your business website or Facebook page",
  "A brief overview of your products or services",
  "Your biggest marketing or sales challenge",
  "Your main business goals"
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen px-5 pb-16">
      <header className="flex justify-center py-6 sm:py-8">
        <Image
          src="/logo.png"
          alt="sumeXsa"
          width={190}
          height={117}
          priority
          className="h-auto w-28 sm:w-36"
        />
      </header>

      <section className="mx-auto max-w-5xl text-center">
        <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-sm font-extrabold text-primary shadow-sm">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Request Received
        </p>
        <h1 className="text-balance text-4xl font-black leading-[1.04] text-darkText sm:text-6xl">
          You&apos;re In! Your Free AI Marketing Consultation Request Has Been Received.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-darkText/72">
          Before your consultation, please complete this important step.
        </p>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-primary/10 bg-white p-5 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <PlayCircle className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-black text-darkText">Watch the Short Video Below (2-3 Minutes)</h2>
          </div>
          <div className="mt-6 flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-lightPink via-white to-lightBlue text-center">
            <div>
              <PlayCircle className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold text-darkText/70">Embed your video here.</p>
            </div>
          </div>
          <div className="mt-6 text-left text-base leading-7 text-darkText/72">
            <p>In this video, I&apos;ll explain:</p>
            <ul className="mt-4 grid gap-3">
              <li>What will happen during your consultation</li>
              <li>How to get the most value from the call</li>
              <li>What information to prepare beforehand</li>
              <li>How we&apos;ll create your customized AI marketing strategy</li>
            </ul>
            <p className="mt-5 font-extrabold text-darkText">
              Please watch the entire video before your consultation.
            </p>
          </div>
        </div>

        <aside className="rounded-[32px] bg-darkText p-6 text-white shadow-soft sm:p-8">
          <MessageCircle className="h-9 w-9 text-softBlue" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-black">Message Me on WhatsApp</h2>
          <p className="mt-4 text-base leading-7 text-white/76">
            Once you&apos;ve watched the video, send me a quick message on WhatsApp so we can confirm your consultation and answer any questions before the call.
          </p>
          <p className="mt-4 text-base leading-7 text-white/76">
            This helps us confirm your booking, share important updates, send your meeting details, and make sure you&apos;re fully prepared.
          </p>
          <Link
            href="https://wa.me/9744254833"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-lightPink px-7 py-4 text-center text-base font-extrabold text-darkText shadow-soft transition duration-300 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-softBlue/60"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat with Me on WhatsApp
          </Link>
        </aside>
      </section>

      <section className="mx-auto mt-6 grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-3xl font-black text-darkText">What Happens Next?</h2>
          <div className="mt-6 grid gap-4">
            {nextSteps.map((step, index) => (
              <div key={step} className="flex gap-4">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-lightPink text-sm font-black text-primary">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-darkText/72">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-3xl font-black text-darkText">Come Prepared</h2>
          <p className="mt-4 text-base leading-7 text-darkText/72">
            To make the consultation as valuable as possible, have the following ready:
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-darkText/72">
            {preparation.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl rounded-[32px] bg-gradient-to-br from-lightBlue via-white to-lightPink p-6 text-center sm:p-10">
        <h2 className="text-3xl font-black text-darkText">We&apos;re Looking Forward to Speaking With You!</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-darkText/72">
          Your consultation is focused on understanding your business, identifying opportunities, and providing practical recommendations you can use to improve your marketing. See you on the call!
        </p>
      </section>
    </main>
  );
}
