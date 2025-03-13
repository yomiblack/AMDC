import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#CDA532] py-6">
      <div className="container mx-auto">
        <div className="pl-6 md:pl-10">
          <Image
            src="/logo/Group 121764.svg"
            alt="Footer Logo"
            width={100}
            height={40}
            className="w-auto h-12 md:h-12"
          />
        </div>
      </div>
    </footer>
  );
}
