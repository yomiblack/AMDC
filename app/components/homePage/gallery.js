"use client";
import Image from "next/image";

export default function Gallery() {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20"
      style={{ backgroundImage: "url('/gallery/galleryBackground.png')" }}
    >
      {/* Gallery Text */}
      <p className="font-universe text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#073A51] text-left w-full max-w-screen-lg pl-2 sm:pl-2 md:pl-2 lg:pl-2">
        Gallery
      </p>

      {/* Gallery Image */}
      <div className="w-full max-w-screen-lg mt-2 sm:mt-6 md:mt-8 lg:mt-10">
        <Image
          src="/gallery/gallery2.png"
          alt="Gallery Image"
          width={1200}
          height={800}
          quality={100}
          priority
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
