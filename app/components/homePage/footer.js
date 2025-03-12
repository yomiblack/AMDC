import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#CDA532] py-8">
      <div className="container mx-auto">
        <div className="pl-6 md:pl-24">
          <Image
            src="/logo/Group 121764.svg"
            alt="Footer Logo"
            width={130}
            height={50}
            className="w-auto h-12 md:h-16"
          />
        </div>
      </div>
    </footer>
  );
}
