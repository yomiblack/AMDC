"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SpeakerCard({ speaker }) {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close on outside click for mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !cardRef.current.contains(e.target)
      ) {
        setShowModal(false);
      }
    };
    if (isMobile && showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, showModal]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowModal(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // small delay to reduce flicker
      setTimeout(() => {
        setShowModal(false);
      }, 200);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setShowModal(!showModal);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Speaker Image */}
      <div className="relative h-96 w-full shadow-lg">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-left">
          <p className="font-universe absolute bottom-4 text-[14px] font-bold max-w-[90%]">
            {speaker.name}
          </p>
        </div>
      </div>

      {/* Floating Modal Positioned Near Image (not center screen) */}
      {showModal && (
        <div
          ref={modalRef}
          className="absolute z-50 bg-white p-5 rounded-xl shadow-2xl w-[90vw] max-w-sm mt-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out h-64 overflow-auto"
        >
          <h2 className="text-xl font-bold text-[#073A51] mb-2 text-left">
            {speaker.name}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed text-left">
            {speaker.bio}
          </p>
        </div>
      )}
    </div>
  );
}
