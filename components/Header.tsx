import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 flex w-full justify-center px-5 py-6 sm:py-8">
      <Image
        src="/logo.png"
        alt="sumeXsa"
        width={190}
        height={117}
        priority
        className="h-auto w-28 sm:w-36"
      />
    </header>
  );
}
