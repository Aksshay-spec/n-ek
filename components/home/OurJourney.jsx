"use client";

import { useEffect, useState } from "react";
// import "../css-files/OurJourney.css";

export default function OurJourney() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const timelineData = [
    {
      year: "2012",
      text: "SAPTAAR launched",
      position: "left",
      colors: "from-red-400 via-blue-500 to-pink-400",
    },
    {
      year: "2015",
      text: "FMCG division introduced",
      position: "right",
      colors: "from-yellow-200 via-pink-300 to-pink-400",
    },
    {
      year: "2018",
      text: "1M+ electrical units sold",
      position: "left",
      colors: "from-red-400 via-blue-500 to-pink-400",
    },
    {
      year: "2020",
      text: "2M+ FMCG packs distributed",
      position: "right",
      colors: "from-yellow-200 via-pink-300 to-pink-400",
    },
    {
      year: "2021",
      text: "Vendor retention hits 87%",
      position: "left",
      colors: "from-red-400 via-blue-500 to-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden px-4 py-8 sm:py-12">
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45"
            style={{
              top: `${i * 10}%`,
              left: "-50%",
              width: "200%",
            }}
          />
        ))}
      </div>

      {/* Stars Animation */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationName: "floatAround, pulse",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            OUR JOURNEY
          </h1>
          <div className="w-48 sm:w-64 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-2xl h-28 sm:h-32 relative">
                {item.position === "left" ? (
                  <>
                    {/* Gradient Box */}
                    <div
                      className={`absolute left-14 sm:left-16 right-0 top-0 bottom-0 rounded-3xl bg-gradient-to-r ${item.colors} shadow-2xl flex items-center justify-center pl-10`}
                    >
                      <p className="text-xs sm:text-2xl md:text-3xl font-semibold text-black text-center">
                        {item.text}
                      </p>
                    </div>

                    {/* Year Circle */}
                    <div className="absolute left-0 top-0 w-28 h-28 sm:w-32 sm:h-32 bg-red-400 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-4xl sm:text-5xl font-bold text-white">
                        {item.year}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Gradient Box */}
                    <div
                      className={`absolute left-0 right-14 sm:right-16 top-0 bottom-0 rounded-3xl bg-gradient-to-r ${item.colors} shadow-2xl flex items-center justify-center pr-10`}
                    >
                      <p className="text-xs sm:text-2xl md:text-3xl font-semibold text-black text-center">
                        {item.text}
                      </p>
                    </div>

                    {/* Year Circle */}
                    <div className="absolute right-0 top-0 w-28 h-28 sm:w-32 sm:h-32 bg-teal-400 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-4xl sm:text-5xl font-bold text-white">
                        {item.year}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
