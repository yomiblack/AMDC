import Image from "next/image";
import Link from "next/link";

export default function Attending() {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/attending/background.svg')" }}
    >
      {/* Text Section */}
      <div className="absolute top-24 md:top-1/2 left-8 sm:left-16 md:left-24 lg:left-52 transform -translate-y-1/2 text-left space-y-2">
        {/* First Line */}
        <p className="text-[#CDA432] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Make it a date
        </p>
        {/* Second Line */}
        <p className="text-[#CDA432] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          with us!
        </p>
        {/* Third Line: Space */}
        <div className="h-4 sm:h-6 md:h-8"></div>
        {/* Fourth Line */}
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight">
          Click on the image to generate
        </p>
        {/* Fifth Line */}
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight">
          your picture
        </p>
      </div>

      {/* Mineral Image (Bottom Right) */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12">
        <Image
          src="/attending/mineral.png"
          alt="Mineral"
          width={300}
          height={300}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-52 lg:h-52"
        />
      </div>

      {/* Attending Image (Middle) */}
      <Link
        href="https://getdp.co/rW5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute  bottom-0 md:left-1/2 md:bottom-[10%]">
          <Image
            src="/attending/attending.png"
            alt="Attending"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80"
          />
        </div>
      </Link>
    </section>
  );
}
