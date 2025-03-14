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

      {/* read more */}

      <div className="text-white text-center">
        <p>The African Mining Vision (AMV) is a policy adopted by the</p>
        <p>African Union to ensure that Afica's vast mineral resources drive</p>
        <p>
          sustainable development and economic transformation. It envisions a
        </p>
        <p>mining sector that is transparent, equitable, and environmentally</p>
        <p>
          responsible, contributing to industrialization, job creation, and
          poverty
        </p>
        <p>reduction. The AMV matters because it shifts Africa's mineral</p>
        <p>development from a raw-materias export model to one that fosters</p>
        <p></p>
        <p>local value addition, beneficiation, and regional integration. By</p>
        <p></p>
        <Link>
          <button>Read More</button>
        </Link>
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
        <div className="relative w-full sm:w-2/3 h-full bg-black text-white font-extralight font-universe sm:text-left text-center text-[18px] pb-32 pt-10 pl-12 pr-12 sm:pr-0">
          {/* Text Content */}
          <div className="space-y-0 text-sm sm:text-[16px] md:text-[18px] font-universe font-extralight">
            <p>The African Mining Vision (AMV) is an African Union</p>
            <p>policy framework that ensures Africa's mineral</p>
            <p>wealth drives sustainable development. It promotes</p>
            <p>a transparent, equitable, and responsible mining</p>
            <p>sector that supports industrialization, job creation,</p>
            <p>and poverty reduction. By shifting from raw-material</p>
            <p>exports to local value addition and regional</p>
            <p>integration, the AMV fosters fair governance,</p>
            <p>inclusive growth, and long-term economic resilience.</p>
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
