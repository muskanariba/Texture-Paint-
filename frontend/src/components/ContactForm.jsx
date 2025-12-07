import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d15ac304-ee85-4411-b539-658d431926b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong!");
    }
  };

  return (
    <section className="relative bg-gray-50 py-10 md:py-14 flex justify-center items-center overflow-hidden">

      {/* YELLOW PAINT BG */}
      <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-yellow-400 to-transparent opacity-60"></div>

      {/* SOFT BLUR */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[260px] bg-gradient-to-l from-yellow-400 to-transparent blur-3xl opacity-60 rounded-xl"></div>

      {/* ROLLER IMAGE */}
      <div className="absolute right-[-50px] md:right-[-90px] top-1/2 -translate-y-1/2 rotate-6 pointer-events-none opacity-90">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBw0cMuSZmxG1QG1UceUHbPi4CUWQWcr7kXQ&s"
          className="w-[280px] md:w-[430px] drop-shadow-2xl"
          alt="roller"
        />
      </div>

     {/* CONTACT FORM */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative z-10 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl max-w-xl w-full"
>
  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 leading-tight">
    <span className="text-blue-600">We’re</span>{" "}
    <span className="text-red-500">Here</span>{" "}
    <span className="text-gray-800">for You</span>
  </h2>

  <p className="text-center text-gray-600 text-sm md:text-base mb-5">
    Share your idea, we'll contact you shortly.
  </p>

  {/* Form */}
  <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div>
      <label className="block text-gray-700 text-sm mb-1">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 text-sm mb-1">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
      />
    </div>

    <div className="md:col-span-2">
      <label className="block text-gray-700 text-sm mb-1">Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
      />
    </div>

    <div className="md:col-span-2">
      <label className="block text-gray-700 text-sm mb-1">Message</label>
      <textarea
        name="message"
        rows="3"
        placeholder="Your Message"
        required
        className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 resize-none"
      ></textarea>
    </div>

    <div className="md:col-span-2 flex justify-center mt-2">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2.5 px-8 rounded-lg shadow-md text-sm"
      >
        Send
      </motion.button>
    </div>

    <div className="md:col-span-2 mt-1 text-center text-gray-700 text-sm font-semibold">
      {result}
    </div>

  </form>
</motion.div>

    </section>
  );
}
