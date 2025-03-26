"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function Gallery({ galleryImages }) {
  const [activeDayIndex, setActiveDayIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const modalRef = useRef(null);

  const currentImages =
    activeDayIndex !== null ? galleryImages[activeDayIndex].images : [];

  // Handle outside click to close modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !e.composedPath().includes(modalRef.current) &&
        activeDayIndex !== null
      ) {
        setActiveDayIndex(null);
        setActiveImageIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDayIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeDayIndex !== null) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") {
          setActiveDayIndex(null);
          setActiveImageIndex(null);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeDayIndex, activeImageIndex]);

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      className="font-universe bg-cover bg-center flex flex-col items-center justify-center p-6 sm:p-10"
      style={{ backgroundImage: "url('/gallery/galleryBackground.png')" }}
    >
      <p className="font-universe text-3xl sm:text-4xl md:text-5xl font-light text-[#073A51] w-full max-w-screen-lg text-left pb-6 pl-4 sm:pl-8">
        Gallery
      </p>

      {/* Day Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-0 gap-4 w-full max-w-screen-lg">
        {galleryImages.map((day, index) => (
          <div
            key={index}
            className="relative w-full h-72 sm:h-[300px] cursor-pointer group overflow-hidden"
            onClick={() => {
              setActiveDayIndex(index);
              setActiveImageIndex(0);
            }}
          >
            <Image
              src={day.images[0]}
              alt={`Cover ${day.day}`}
              fill
              className="object-cover"
            />
            {/* Static label on mobile, hover effect on larger screens */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-center py-3.5 transition-opacity duration-300 ease-in-out sm:opacity-0 sm:group-hover:opacity-100 opacity-100">
              <p
                className={`text-sm sm:text-2xl font-bold`}
                style={{ color: day.labelColor }}
              >
                {day.day}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeDayIndex !== null && activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-2 sm:px-4 py-6">
          <div
            ref={modalRef}
            {...swipeHandlers}
            className="relative max-w-4xl w-full rounded-xl bg-black bg-opacity-90 overflow-hidden shadow-xl flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveDayIndex(null);
                setActiveImageIndex(null);
              }}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 z-10"
            >
              ✕
            </button>

            {/* Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[75vh]">
              <Image
                src={currentImages[activeImageIndex]}
                alt={`Day ${activeDayIndex + 1} Image ${activeImageIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={handlePrev}
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
              >
                ◀
              </button>
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={handleNext}
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 p-3 mt-2 overflow-x-auto  w-full max-w-4xl">
              {currentImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-16 flex-shrink-0 border-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-md ${
                    idx === activeImageIndex
                      ? "border-[#073A51]"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
