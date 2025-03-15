"use client";
import Link from "next/link";
import Image from "next/image";

export default function Download() {
  const sections = [
    { title: "Keynote Speakers", image: "/sections/section1.svg" },
    { title: "Panel Discussion", image: "/sections/section2.svg" },
    { title: "Presentations", image: "/sections/section3.svg" },
  ];

  return (
    <section className="w-full font-universe mt-20">
      {/* read more */}
      <div className="text-black text-center font-universe font-extralight px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Combined Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          The African Forum on Mining (AFM) is a platform dedicated to fostering
          dialogue, collaboration, and policy innovation in Africa&apos;s mining
          sector. Anchored in the African Mining Vision (AMV), AFM brings
          together key stakeholders—including policymakers, industry leaders,
          civil society, and academia—to shape the future of mineral resource
          governance. The AMV, adopted by the African Union, serves as a
          blueprint for sustainable and inclusive mining, ensuring that
          Africa&apos;s vast mineral wealth drives economic development,
          industrialization, and social transformation.
        </p>

        {/* Read More Button */}
        <Link
          href="https://au.int/sites/default/files/documents/30995-doc-africa_mining_vision_english_1.pdf"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for external links
        >
          <button className="mt-10 mb-28 bg-[#CFA432] text-white font-universe text-[12px] sm:text-sm md:text-base font-extralight px-10 py-2 hover:bg-[#B38F2A] transition-colors duration-300">
            Read More
          </button>
        </Link>
      </div>

      {/* Program Sections */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-14 sm:gap-16 md:gap-40 px-4">
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
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-20 w-full">
        {/* Image */}
        <div className="w-full sm:w-1/3">
          <Image
            src={"/downloadProgram/ebook.png"}
            alt="Program pdf e-book"
            width={500}
            height={500}
            priority
            quality={100}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text and Button Container */}
        <div className="relative w-full sm:w-2/3 h-full bg-black text-white font-extralight font-universe sm:text-left text-center text-[18px] pb-32 pt-10  pr-4 sm:pr-0">
          {/* Text Content */}
          <div className="pl-12 pr-4 space-y-0 text-sm sm:text-[16px] md:text-[18px] font-universe font-extralight">
            <p className=" md:max-w-[600px] ">
              <span className="text-[#CEA631] font-bold">
                Why the African Mining Vision Matters?
              </span>
              <br /> The African Mining Vision (AMV) is a policy framework
              adopted by the African Union to ensure that Africa&apos;s vast
              mineral resources drive sustainable development and economic
              transformation. It envisions a mining sector that is transparent,
              equitable, and environmentally responsible, contributing to
              industrialization, job creation, and poverty reduction. The AMV
              matters because it shifts Africa&apos;s mineral development from a
              raw-materials export model to one that fosters local value
              addition, beneficiation, and regional integration.
            </p>
          </div>

          {/* Download Button */}
          <button
            className="absolute bg-[#CEA631] text-white px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center space-x-2 bottom-4 sm:bottom-10 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-12 hover:bg-[#B38F2A] transition-colors duration-300 shadow-2xl"
            onClick={() => {
              // Trigger the download of the PDF file
              const link = document.createElement("a");
              link.href = "/program/program.pdf";
              link.download = "AMDCProgram.pdf";
              link.click();
            }}
          >
            {/* Download Text */}
            <span className="font-universe text-sm sm:text-lg text-nowrap">
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
      </div>
    </section>
  );
}
