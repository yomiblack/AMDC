"use client";
import { useEffect, useState } from "react";

export default function Attendees() {
  const [speakers, setSpeakers] = useState("00");
  const [sessions, setSessions] = useState("00");
  const [attendees, setAttendees] = useState("00");

  useEffect(() => {
    // Function to animate the counter
    const animateCounter = (target, setState) => {
      let current = 0;
      const increment = Math.ceil(target / 50); // Adjust speed here
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(interval);
          current = target;
        }
        setState(current);
      }, 30); // Adjust interval for smoother/faster animation
    };

    // Start counters
    animateCounter(123, setSpeakers);
    animateCounter(15, setSessions);
    animateCounter(300, setAttendees);
  }, []);

  return (
    <section className="w-full bg-[#CFA432] py-12 sm:py-16 md:py-40 md:px-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24">
          {/* Speakers */}
          <div className="flex-1 text-center">
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              {speakers}
            </p>
            <p className="font-universe text-xl font-extralight sm:text-2xl md:text-4xl text-white mt-2">
              Speakers
            </p>
          </div>

          {/* Divider */}
          <div className="h-16 sm:h-24 w-px bg-white"></div>

          {/* Sessions */}
          <div className="flex-1 text-center">
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              {sessions}
            </p>
            <p className="font-universe text-xl font-extralight sm:text-2xl md:text-4xl text-white mt-2">
              Sessions
            </p>
          </div>

          {/* Divider */}
          <div className="h-16 sm:h-24 w-px bg-white"></div>

          {/* Attendees */}
          <div className="flex-1 text-center">
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              {attendees}+
            </p>
            <p className="font-universe text-xl font-extralight sm:text-2xl md:text-4xl text-white mt-2">
              Attendees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
