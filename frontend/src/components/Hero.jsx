import { useEffect, useState } from "react";

export default function Hero() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const loadHero = async () => {
      const res = await fetch(`${API_URL}/hero/all`);
      const data = await res.json();
      if (data.success && data.hero.length > 0) {
        setHero(data.hero[0]);
      }
    };
    loadHero();
  }, []);

  if (!hero) return null;

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
    >
      {/* 🔹 Background Image – FULL WIDTH + HEIGHT */}
      <img
        src={`${API_URL.replace("/api", "")}/uploads/${hero.bgImage}`}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 🔹 Light overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 🔹 Content Wrapper (navbar space included) */}
      <div className="relative z-10 h-full flex items-center justify-center pt-24 px-6">
        <div className="w-full max-w-3xl">
          <div className="bg-gray-500/70 mt-20 backdrop-blur-md rounded-xl px-6 py-8 text-center shadow-md">

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-gray-100 text-sm md:text-base max-w-2xl mx-auto mb-5">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">
              {hero.primaryBtnText && (
                <a
                  href={hero.primaryBtnLink}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2.5 rounded-md font-medium transition"
                >
                  {hero.primaryBtnText}
                </a>
              )}

              {hero.secondaryBtnText && (
                <a
                  href={hero.secondaryBtnLink}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium transition"
                >
                  {hero.secondaryBtnText}
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
