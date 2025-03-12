import Image from "next/image";

export default function Org() {
  return (
    <section>
      <div className="flex flex-wrap justify-around items-center gap-4 p-24">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-30 md:h-30"
          >
            <Image
              src={`/organizations/org${index + 1}.png`}
              alt={`Organization ${index + 1}`}
              width={80}
              height={80}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
