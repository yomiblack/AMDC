"use client";
import SpeakerCard from "./speakerCard";

export default function Speakers({ speakers }) {
  return (
    <section className="py-12 bg-[#CFA53221]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-left mb-8 text-[#073A51] pl-10 mt-5">
          Meet the Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 pl-10 pr-10">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
