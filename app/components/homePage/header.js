import Image from "next/image";

export default function Header() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background/backgroundImg.png')" }}
    >
      {/* Logo */}
      <div className="absolute left-6 top-6 sm:pl-10 sm:top-1 md:pl-10 md:top-2 pl-10">
        <Image
          src="/logo/Group 121763.svg"
          alt="amdc logo"
          width={200}
          height={200}
          quality={100}
          priority
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </div>

      {/* Text Container */}
      <div className="absolute left-0 bottom-[40%] sm:bottom-10 md:bottom-20 bg-[#CFA632] bg-no-repeat h-48 sm:h-56 md:h-80 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] shadow-2xl">
        <div className="absolute top-6 left-6 sm:top-8 sm:pl-10 md:top-10 md:pl-10 pl-10">
          {/* Responsive Text Sizes and Spacing */}
          <p className="font-universe font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            AFRICAN FORUM
          </p>
          <p className="font-universe font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[4px] sm:tracking-[6px] md:tracking-[9px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            ON MINING
          </p>
          <p className="font-universe font-bold tracking-[1px] sm:tracking-[1.25px] md:tracking-[1.5px] text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            The Africa Mining Vision at 16:
          </p>
          <p className="font-universe font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            Achievements, Challenges &
          </p>
          <p className="font-universe font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            Opportunities
          </p>
          <br />
          <p className="font-universe font-black text-xs sm:text-sm md:text-base lg:text-lg leading-[1.2] sm:leading-[1.3] md:leading-[1.4]">
            #AfMiningForum
          </p>
        </div>
      </div>
    </section>
  );
}
