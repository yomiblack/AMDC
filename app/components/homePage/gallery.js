import Image from "next/image";

export default function Gallery({ galleryImages }) {
  return (
    <section
      className="bg-cover bg-center flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20"
      style={{ backgroundImage: "url('/gallery/galleryBackground.png')" }}
    >
      {/* Gallery Text */}
      <p className="font-universe text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#073A51] text-left pl-5 pb-5 sm:pl-10 sm:pd-10 w-full max-w-screen-lg ">
        Gallery
      </p>

      {/* Gallery Grid */}
      <div className="w-full max-w-screen-lg mt-2 overflow-x-auto overflow-y-hidden">
        <div className="grid grid-rows-2 grid-flow-col gap-x-0.5 gap-y-1 w-max">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-48 sm:w-64 md:w-72 lg:w-80 flex-shrink-0"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                quality={100}
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
