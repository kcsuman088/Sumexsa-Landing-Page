import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-lightPink px-7 py-4 text-base font-extrabold text-darkText shadow-soft transition duration-300 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-softBlue/60 ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}
