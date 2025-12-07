import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Amazing finish and great coverage! Highly recommended.",
      author: "Ali Raza",
      color: "text-yellow-500",
      gradient: "from-yellow-400 to-yellow-500",
      circleColor: "bg-yellow-200",
    },
    {
      quote: "The best paint quality we have used so far — long-lasting and vibrant.",
      author: "Ayesha Khan",
      color: "text-blue-600",
      gradient: "from-blue-400 to-blue-600",
      circleColor: "bg-blue-200",
    },
    {
      quote: "Affordable and premium at the same time.",
      author: "Haris Malik",
      color: "text-red-500",
      gradient: "from-red-400 to-red-500",
      circleColor: "bg-red-200",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16">

        {/* Section Heading */}
        <h2 className="md:text-4xl font-extrabold text-center text-gray-800">
          <span className="text-yellow-500">Bright</span> Reviews <br />
          From Our <span className="text-red-500">Clients</span>
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center w-full">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl p-8 border-t-4 border-transparent shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-t-8"
            >
              {/* Top Gradient Border */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.gradient}`}></div>

              {/* Quote */}
              <p className="text-lg italic mb-6 text-gray-700">“{t.quote}”</p>

              {/* Author */}
              <p className={`font-bold ${t.color} text-right text-md`}>— {t.author}</p>

              {/* Floating Decorative Circles */}
              <div className={`absolute -right-12 -bottom-12 w-24 h-24 ${t.circleColor} opacity-30 rounded-full animate-pulse`}></div>
              <div className={`absolute -left-10 top-20 w-20 h-20 ${t.circleColor} opacity-25 rounded-full animate-ping`}></div>
              <div className={`absolute right-8 top-8 w-16 h-16 ${t.circleColor} opacity-20 rounded-full`}></div>

              {/* Subtle Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-white opacity-10 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
