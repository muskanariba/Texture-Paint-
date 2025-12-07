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
    <section>
      <section id="why" className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800 leading-tight">
            Why <span className="text-yellow-500">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-6 cursor-pointer border-t-4 border-transparent hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${item.color} shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
