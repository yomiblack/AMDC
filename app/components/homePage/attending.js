import Image from "next/image";
import Link from "next/link";

export default function Attending() {
  return (
    <section
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/attending/background.svg')" }}
    >
      {/* Parent Container for Horizontal Alignment */}
      <div className="flex h-full w-full">
        {/* Text Section (Left) */}
        <div className="flex-1 flex flex-col justify-center items-start pb-[10%] pt-[5%] p-[5%] pl-8 sm:pl-16 md:pl-24 lg:pl-40">
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

        {/* Attending Image (Right) */}
        <div className="flex-1 flex justify-center items-center pt-[4%]">
          <Link
            href="https://getdp.co/rW5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src="/attending/attending.png"
                alt="Attending"
                width={500} // Adjust as needed
                height={500} // Adjust as needed
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
