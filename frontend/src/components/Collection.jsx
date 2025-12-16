import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import collectionBg from "../assets/collection-page-bg.jpg";

import {
  FaHome,
  FaSun,
  FaTree,
  FaIndustry,
  FaPalette,
  FaTint
} from "react-icons/fa";

export default function Collection() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [items, setItems] = useState([]);

  // 🔒 UI CONFIG (DO NOT TOUCH — SAME AS YOUR DESIGN)
  const uiConfig = [
    { icon: <FaHome />, color: "from-yellow-400 to-yellow-600" },
    { icon: <FaSun />, color: "from-red-400 to-red-600" },
    { icon: <FaTree />, color: "from-green-400 to-green-600" },
    { icon: <FaIndustry />, color: "from-blue-400 to-blue-600" },
    { icon: <FaPalette />, color: "from-purple-400 to-purple-600" },
    { icon: <FaTint />, color: "from-teal-400 to-teal-600" }
  ];

  useEffect(() => {
    fetch(`${API_URL}/collection/all`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setItems(data.data);
      });
  }, []);

  return (
   <section
  id="collection"
  className="w-full py-10 relative overflow-hidden"
  style={{
    backgroundImage: `url(${collectionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16 bg-white/60 backdrop-blur-md rounded-2xl py-10">

        {/* Heading (STATIC) */}
        <h2 className="md:text-4xl font-extrabold text-center text-white">
          <span className="text-black">Explore Our</span>
          <br />
          <span className="text-red-500">Collection</span>{" "}
          <span className="text-black">&</span>{" "}
          <span className="text-blue-500">Solutions</span>
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center w-full">
          {items.map((item, index) => {
            const ui = uiConfig[index % uiConfig.length];

            return (
              <motion.div
                key={item._id}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl p-8 border-t-4 hover:border-t-8 transition-all duration-500 shadow-lg overflow-hidden"
              >
                {/* Diagonal Gradient Accent */}
                <div
                  className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr ${ui.color} opacity-20 rounded-full rotate-45`}
                />

                {/* Icon (STATIC) */}
                <div className="text-3xl mb-4 text-gray-800">
                  {ui.icon}
                </div>

                {/* Title (ADMIN) */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Description (ADMIN) */}
                <p className="text-gray-700 text-sm">
                  {item.description}
                </p>

                {/* Decorative Circles */}
                <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-yellow-100 opacity-20 rounded-full" />
                <div className="absolute -left-8 top-20 w-16 h-16 bg-red-100 opacity-20 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
