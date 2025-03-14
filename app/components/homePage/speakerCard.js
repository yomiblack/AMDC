"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function SpeakerCard({ speaker }) {
  const [isHovered, setIsHovered] = useState(false);
  const bioRef = useRef(null); // Ref to store the bio element

  // Calculate the translateY value based on bio height
  const calculateTranslateY = () => {
    if (!bioRef.current) return 0;
    const bioHeight = bioRef.current.offsetHeight; // Get the height of the bio
    return -bioHeight - 16; // Add some extra spacing (e.g., 16px)
  };

  // Apply the translateY value when hovered
  useEffect(() => {
    if (isHovered) {
      const translateY = calculateTranslateY();
      const nameElement = document.getElementById(`name-${speaker.id}`);
      if (nameElement) {
        nameElement.style.transform = `translateY(${translateY}px)`;
      }
    } else {
      // Reset the name element to its default position
      const nameElement = document.getElementById(`name-${speaker.id}`);
      if (nameElement) {
        nameElement.style.transform = "translateY(0)";
      }
    }
  }, [isHovered, speaker.id]);

  return (
    <div
      className="relative overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // For mobile click
    >
      {/* Speaker Image */}
      <div className="relative h-96 w-full">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover"
          quality={100}
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#083A51] to-white opacity-0 transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-90" : ""
          }`}
        />
      </div>

      {/* Speaker Name and Bio */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
        {/* Speaker Name */}
        <p
          id={`name-${speaker.id}`} // Unique ID for the name element
          className={`font-universe absolute bottom-4 text-[14px] font-bold whitespace-nowrap overflow-hidden overflow-ellipsis transition-transform duration-300 ease-out max-w-[200px]`}
        >
          {speaker.name}
        </p>

        {/* Speaker Bio */}
        <p
          ref={bioRef} // Store bio element in ref
          className={`font-universe font-extralight text-sm transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {speaker.bio}
        </p>
      </div>
    </div>
  );
}
