import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-16">

        {/* Section Heading */}
        <h2 className="md:text-4xl font-extrabold text-center text-gray-800">
          <span className="text-yellow-500">About</span> <br />
          <span className="text-red-500">Premium</span> & <span className="text-blue-500">Look Texture</span>
        </h2>

        <div className="flex flex-col md:flex-row items-stretch gap-12 w-full">

          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/6c/35/c2/6c35c2c8d025f094ae5ef49818e50ec2.jpg"
              alt="About Premium Look Texture"
              className="rounded-xl shadow-2xl w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Text Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6 md:p-8 text-gray-700 border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center max-h-[500px] "
          >
            <p className="text-lg mb-4">
              At <span className="font-bold text-yellow-500">Premium Look Texture</span>, we transform ordinary walls into stunning statements with our high-quality paints and finishes. Every project is crafted to reflect elegance and durability.
            </p>
            <p className="text-lg mb-4">
              Our team of experts specializes in turning <span className="font-bold text-red-500">plain walls</span> into vibrant, inviting spaces that tell your story and match your vision. From color consultation to final finish, we ensure perfection at every step.
            </p>
            <p className="text-lg mb-4">
              We have collaborated with top brands and designers, ensuring every project is handled with <span className="font-bold text-blue-500">precision</span>, <span className="font-bold text-red-500">care</span>, and <span className="font-bold text-yellow-500">passion</span>.
            </p>
            <p className="text-lg mb-4">
              Our premium paints are not just colors—they are a combination of <span className="font-bold text-blue-500">technology</span>, <span className="font-bold text-red-500">quality pigments</span>, and <span className="font-bold text-yellow-500">innovative techniques</span> that ensure longevity, vibrancy, and smooth finishes.
            </p>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
