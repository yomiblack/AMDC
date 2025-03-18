"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SpeakerCard({ speaker }) {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalHeight, setModalHeight] = useState("auto"); // Dynamic height
  const modalRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Click outside to close for mobile
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, showModal]);

  // Handle hover to show modal (desktop only)
  const handleMouseEnter = (e) => {
    if (!isMobile) {
      const { top, left } = calculatePosition(e);
      setModalPosition({ top, left });
      setShowModal(true);
    }
  };

  // Handle click to toggle modal (mobile only)
  const handleClick = (e) => {
    if (isMobile) {
      const { top, left } = calculatePosition(e);
      setModalPosition({ top, left });
      setShowModal((prev) => !prev);
    }
  };

  // Calculate modal position to ensure it stays within the viewport
  const calculatePosition = (e) => {
    const padding = 20; // padding from edges
    const modalWidth = 350;

    let top = e.clientY + 10;
    let left = e.clientX + 10;

    // Adjust position if modal goes out of viewport horizontally
    if (left + modalWidth > window.innerWidth - padding) {
      left = window.innerWidth - modalWidth - padding;
    }
    if (left < padding) {
      left = padding;
    }

    // Adjust position if modal goes out of viewport vertically
    if (top < padding) {
      top = padding;
    }

    // For mobile, position the modal below the card
    if (isMobile) {
      const cardRect = cardRef.current.getBoundingClientRect();
      top = cardRect.bottom + 10;
      left = cardRect.left;

      // Ensure modal doesn't go off the right edge on mobile
      if (left + modalWidth > window.innerWidth - padding) {
        left = window.innerWidth - modalWidth - padding;
      }
    }

    return { top, left };
  };

  // Adjust modal height based on content height
  useEffect(() => {
    if (showModal && contentRef.current) {
      const padding = 20; // padding from edges
      const minModalHeight = 200; // Minimum height for the modal
      const maxModalHeight = window.innerHeight - modalPosition.top - padding; // Maximum height based on viewport

      // Measure the content height
      const contentHeight = contentRef.current.scrollHeight;

      // Set the modal height to fit the content, but within the min and max bounds
      const newHeight = Math.min(
        Math.max(contentHeight, minModalHeight),
        maxModalHeight
      );
      setModalHeight(newHeight);
    }
  }, [showModal, modalPosition, speaker.bio]); // Recalculate when modal is shown or content changes

  // Prevent page scroll when scrolling inside the modal
  const handleModalScroll = (e) => {
    e.stopPropagation(); // Stop the scroll event from propagating to the parent
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => !isMobile && setShowModal(false)}
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

      {/* Floating Modal */}
      {showModal && (
        <div
          ref={modalRef}
          onWheel={handleModalScroll} // Prevent page scroll when scrolling inside the modal
          className="fixed z-50 bg-white p-6 w-[350px] max-w-[90vw] rounded-xl shadow-2xl transition-all duration-300 ease-in-out pointer-events-auto overflow-y-auto"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            height: modalHeight, // Dynamic height
          }}
        >
          <div ref={contentRef}>
            <h2 className="text-xl font-bold text-[#073A51] mb-3">
              {speaker.name}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {speaker.bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
