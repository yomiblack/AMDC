"use client";
import { useState } from "react";
import SpeakerCard from "./speakerCard";

export default function Speakers({ speakers }) {
  const [visibleSpeakers, setVisibleSpeakers] = useState(10); // Show first 10 speakers initially

  const loadMoreSpeakers = () => {
    setVisibleSpeakers((prevVisibleSpeakers) => prevVisibleSpeakers + 10); // Load 10 more speakers
  };

  return (
    <section className="py-12 bg-[#CFA53221]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-left mb-8 text-[#073A51] pl-10 mt-5">
          Meet the Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 pl-10 pr-10">
          {speakers.slice(0, visibleSpeakers).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
        {visibleSpeakers < speakers.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreSpeakers}
              className="font-universe font-extralight bg-[#CFA632] text-white px-6 py-2 mb-5 hover:bg-[#B88E2A] transition-colors duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
