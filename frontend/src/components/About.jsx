import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const API_URL = import.meta.env.VITE_API_URL;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [about, setAbout] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Normalize image path
  const buildImageUrl = (image) => {
    if (!image) return "";
    let cleanImage = image.replace(/^\/+/, "");
    if (cleanImage.startsWith("uploads/")) {
      cleanImage = cleanImage.replace("uploads/", "");
    }
    return `${BASE_URL}/uploads/${cleanImage}`;
  };

  const loadAbout = async () => {
    try {
      const res = await fetch(`${API_URL}/about/all`, { cache: "no-store" });
      const data = await res.json();
      if (data.success && data.about.length > 0) {
        const record = data.about[0];
        setAbout(record);
        setImageUrl(buildImageUrl(record.image));
      }
    } catch (err) {
      console.error("Error fetching About:", err);
    }
  };

  useEffect(() => {
    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-50 flex items-center py-10"
    >
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="md:text-4xl font-extrabold text-center text-gray-800 mb-10">
          <span className="text-yellow-500">About</span> <br />
          <span className="text-red-500">Premium</span>{" "}
          <span className="text-gray-800">&</span>{" "}
          <span className="text-blue-500">Look Texture</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://placehold.co/800x600?text=Loading..."
              }
              alt="About"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x600?text=Image+Not+Found";
              }}
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border-t-4 border-yellow-500"
          >
            {about ? (
              <>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {about.title}
                </h3>

                <h4 className="text-lg font-semibold text-gray-600 mb-6">
                  {about.subtitle}
                </h4>

                <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                  {about.description}
                </p>
              </>
            ) : (
              <p>Loading About...</p>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
