import Image from "next/image";

export default function Header() {
  return (
    <section>
      <div className="relative w-screen h-screen">
        {/* Logo */}
        <div className="absolute left-6 top-2 sm:left-12 sm:top-12 md:left-24 md:-top-10">
          <Image
            src="/logo/Group 121763.svg"
            alt="amdc logo"
            width={200}
            height={200}
            quality={100}
            priority
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background/backgroundImg.png"
            alt="mine with mining trucks excavator"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>

        {/* Text Container */}
        <div className="absolute left-0 top-32 sm:top-40 bg-[#CFA632] bg-no-repeat h-64 sm:h-80 md:h-96 w-full sm:w-[480px] md:w-[680px] md:top-44 shadow-2xl">
          <div className="absolute top-8 left-6 sm:top-14 sm:left-12 md:top-14 md:left-24">
            {/* Responsive Text Sizes and Spacing */}
            <p className="font-universe font-black text-2xl sm:text-3xl md:text-[35px] tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              AFRICAN FORUM
            </p>
            <p className="font-universe font-black text-2xl sm:text-3xl md:text-[35px] tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              ON MINING
            </p>
            <p className="font-universe font-bold tracking-[1px] sm:tracking-[1.25px] md:tracking-[1.5px] text-lg sm:text-xl md:text-[25px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              The Africa Mining Vision at 16:
            </p>
            <p className="font-universe font-medium text-xl sm:text-2xl md:text-[29px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              Achievements, Challenges &
            </p>
            <p className="font-universe font-medium text-xl sm:text-2xl md:text-[29px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              Opportunities
            </p>
            <br />
            <p className="font-universe font-black text-sm sm:text-base md:text-[16px] leading-[1.2] sm:leading-[1.3] md:leading-[43px]">
              #AfMiningForum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
