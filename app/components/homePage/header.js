import Image from "next/image";

export default function Header() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background/backgroundImg.png')" }}
    >
      {/* Logo */}
      <div className="absolute left-6 top-1  sm:top-1  lg:top-1 pl-10 lg:pl-16">
        <Image
          src="/logo/Group 121763.svg"
          alt="amdc logo"
          width={200}
          height={200}
          quality={100}
          priority
          className="w-24 h-24 lg:w-40 lg:h-40 "
        />
      </div>

      {/* Text Container */}
      <div className="absolute left-0 top-[22%] w-full lg:w-[700px] pl-16 p-6 lg:p-10 lg:pl-20 bg-[#CFA632] shadow-2xl">
        {/* Responsive Text Sizes and Spacing */}
        <p className="font-universe font-black text-xl sm:text-2xl md:text-4xl tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          AFRICAN FORUM
        </p>
        <p className="font-universe font-black text-xl sm:text-2xl md:text-4xl tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          ON MINING
        </p>
        <p className="font-universe font-bold tracking-[1px] sm:tracking-[1.25px] md:tracking-[1.5px] text-base sm:text-lg md:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          The Africa Mining Vision at 16:
        </p>
        <p className="font-universe font-medium text-base sm:text-lg md:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          Achievements, Challenges &
        </p>
        <p className="font-universe font-medium text-base sm:text-lg md:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          Opportunities
        </p>
        <br />
        <p className="font-universe font-black text-xs sm:text-sm md:text-base leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
          #AfMiningForum
        </p>
      </div>
    </section>
  );
}
