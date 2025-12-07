import { motion } from "framer-motion";
import { FaBrush, FaBuilding, FaPalette, FaLayerGroup, FaSearch } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Home Painting",
      description: "Smooth and flawless results by trained professionals.",
      icon: <FaBrush />,
      color: "from-yellow-300 to-yellow-500", // brighter yellow
    },
    {
      title: "Commercial Projects",
      description: "Office, shops, buildings & industrial painting.",
      icon: <FaBuilding />,
      color: "from-red-400 to-red-600", // vivid red
    },
    {
      title: "Color Consultation",
      description: "Helping customers choose the perfect color combinations.",
      icon: <FaPalette />,
      color: "from-blue-400 to-blue-600", // bright blue
    },
    {
      title: "Texture Wall Designs",
      description: "Modern, artistic & customized textured finishes.",
      icon: <FaLayerGroup />,
      color: "from-purple-400 to-purple-600", // vibrant purple
    },
    {
      title: "Site Inspection",
      description: "Free assessment & recommendations for your space.",
      icon: <FaSearch />,
      color: "from-pink-400 to-pink-600", // bright pink for variety
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-10 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/ee/c1/5d/eec15d2491cbe66707b9222932811b94.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16 bg-white/60 backdrop-blur-md rounded-2xl py-10">
        <h2 className="md:text-4xl font-extrabold text-center text-gray-800">
          What We <span className="text-yellow-500">Offer</span> <br />
          <span className="text-red-500">Bright</span> &{" "}
          <span className="text-blue-500">Premium</span> Solutions
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl p-8 border-t-4 hover:border-t-8 transition-all duration-500 shadow-lg overflow-hidden"
            >
              {/* Diagonal Gradient Accent */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr ${service.color} opacity-25 rounded-full rotate-45`}
              ></div>

              {/* Icon */}
              <div className="text-3xl mb-4 text-gray-800">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm">{service.description}</p>

              {/* Subtle Floating Circles */}
              <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-yellow-200 opacity-25 rounded-full"></div>
              <div className="absolute -left-8 top-20 w-16 h-16 bg-red-200 opacity-25 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
