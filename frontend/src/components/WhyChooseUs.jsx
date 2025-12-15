import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaLeaf, FaUsers, FaDollarSign } from "react-icons/fa";

const reasons = [
  {
    title: "Premium Quality",
    description: "We use high-quality paints that ensure durability, smooth finish, and vibrant colors.",
    color: "bg-yellow-500",
    icon: <FaPaintBrush className="w-8 h-8 text-white" />,
  },
  {
    title: "Eco-Friendly",
    description: "Our paints are low-VOC and safe for your family and the environment.",
    color: "bg-blue-500",
    icon: <FaLeaf className="w-8 h-8 text-white" />,
  },
  {
    title: "Expert Team",
    description: "Trained professionals ensure perfect application and customer satisfaction.",
    color: "bg-red-500",
    icon: <FaUsers className="w-8 h-8 text-white" />,
  },
  {
    title: "Affordable Pricing",
    description: "Top-quality products and services at competitive prices.",
    color: "bg-purple-500",
    icon: <FaDollarSign className="w-8 h-8 text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full bg-gray-50 py-20 relative overflow-hidden">

      {/* Soft Background Glow (No theme change) */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-white to-blue-100/20 blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        




<h2 className="md:text-4xl font-extrabold text-center text-gray-800 mb-14">
  <span className="text-red-500">The</span> Reason{" "}
  <span className="text-yellow-500">Customers</span> <br />
  Choose <span className="text-blue-500">Us</span>
</h2>






        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.07,
                translateY: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl p-7 cursor-pointer border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center backdrop-blur-md"
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-20 h-20 mb-5 rounded-2xl ${item.color} shadow-xl`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold mb-3 text-gray-900 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {item.description}
              </p>

              {/* subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
