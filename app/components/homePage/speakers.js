"use client";
import Image from "next/image";
import { useState } from "react";

export default function Speakers() {
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      image: "/speakers/speaker1.png",
      name: "John Doe",
      bio: "Expert in AI and Machine Learning with 10+ years of experience.",
    },
    {
      id: 2,
      image: "/speakers/speaker2.png",
      name: "Jane Smith",
      bio: "Renowned data scientist and author of multiple best-selling books.",
    },
    {
      id: 3,
      image: "/speakers/speaker3.png",
      name: "Alice Johnson",
      bio: "Pioneer in blockchain technology and decentralized systems.",
    },
    {
      id: 4,
      image: "/speakers/speaker4.png",
      name: "Bob Brown",
      bio: "Leading expert in cybersecurity and ethical hacking.",
    },
    {
      id: 5,
      image: "/speakers/speaker5.png",
      name: "Bob Brown",
      bio: "Leading expert in cybersecurity and ethical hacking.",
    },
  ];

  return (
    <section className="py-12 bg-[#CFA53221]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-left mb-8 text-[#073A51] pl-10 mt-5">
          Meet the Speakers
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 pl-10 pr-10">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="relative overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredSpeaker(speaker.id)}
              onMouseLeave={() => setHoveredSpeaker(null)}
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
                  style={{ objectFit: "cover" }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#083A51] to-white opacity-0 transition-opacity duration-300 ease-out ${
                    hoveredSpeaker === speaker.id ? "opacity-90" : ""
                  }`}
                />
              </div>

              {/* Speaker Name and Bio */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center transition-transform duration-300 ease-out transform translate-y-0 group-hover:-translate-y-12">
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p
                  className={`mt-2 text-sm transition-opacity duration-300 ease-out ${
                    hoveredSpeaker === speaker.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
