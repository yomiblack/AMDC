"use client";
import Image from "next/image";

export default function Download() {
  const sections = [
    { title: "Keynote Speakers", image: "/sections/section1.svg" },
    { title: "Panel Discussion", image: "/sections/section2.svg" },
    { title: "Presentations", image: "/sections/section3.svg" },
  ];

  return (
    <section className="w-full font-universe">
      {/* Introduction */}
      <div className="text-center mt-10 sm:mt-20 mb-14 sm:mb-20 text-[17px] sm:text-xl md:text-3xl font-extralight space-y-2 px-4">
        <p>
          Join the{" "}
          <span className="font-bold">Africa Mining Vision at 16, </span> where
          we talk about the
        </p>
        <p>African Forum on Mining and the African Mining Vision</p>
      </div>

      {/* Program Sections */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-14 sm:gap-16 md:gap-40 px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
          >
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={section.image}
                alt={section.title}
                width={120}
                height={120}
                quality={100}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-universe text-lg sm:text-xl md:text-2xl font-extralight text-center mt-2 sm:mt-6 text-nowrap">
              {section.title}
            </p>
          </div>
        ))}
      </div>

      {/* Download Program */}
      <div className="relative mt-10 sm:mt-20">
        {/* Image */}
        <Image
          src={"/downloadProgram/downloadMessage.png"}
          alt="Download Program"
          width={1200}
          height={1200}
          quality={100}
          priority
          className="w-full max-w-[1200px] mx-auto"
        />

        {/* Download Button */}
        <button
          className="absolute bg-[#CEA631] text-white px-1 py-1 sm:px-4 sm:py-2 md:px-6 md:py-4 flex items-center justify-center space-x-2 bottom-2 sm:bottom-5 md:bottom-10 left-[66%] sm:left-[64%] md:left-[59%] transform -translate-x-1/2 hover:bg-[#B38F2A] transition-colors duration-300 shadow-2xl"
          onClick={() => {
            // Trigger the download of the PDF file
            const link = document.createElement("a");
            link.href = "/program/program.pdf";
            link.download = "AMDC Program.pdf";
            link.click();
          }}
        >
          {/* Download Text */}
          <span className="font-universe text-[10px] sm:text-sm md:text-lg text-nowrap">
            Download Program
          </span>

          {/* Download Sign */}
          <Image
            src={"/downloadProgram/downloadSign.svg"}
            alt="Download Sign"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </section>
  );
}
