"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Timer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    };

    // Run immediately after mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center font-universe">
      <div className="flex w-full flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex justify-center items-center w-full md:w-1/3 bg-[#01080B] text-white text-lg p-10">
          <Image
            src="/event/Join The Event!.svg"
            alt="Join the event svg"
            width={200}
            height={200}
          />
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full md:w-2/3 bg-[#CEA631] text-[#01080B] p-10">
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <TimeBox label="DAYS" value={timeLeft.days} />
            <Separator />
            <TimeBox label="HOURS" value={timeLeft.hours} />
            <Separator />
            <TimeBox label="MINUTES" value={timeLeft.minutes} />
            <Separator />
            <TimeBox label="SECONDS" value={timeLeft.seconds} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px]">
        {value}
      </span>
      <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-wider">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return <span className="text-[28px]">:</span>;
}
