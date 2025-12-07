import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 pt-10 pb-6 relative overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* Left Column – Brand + Description */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-yellow-500">Premium</span> Paints
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-md">
            Transforming walls with 
            <span className="text-blue-600 font-semibold"> premium colors</span>, 
            <span className="text-red-500 font-semibold"> quality coatings</span>, and 
            <span className="text-purple-600 font-semibold"> artistic finishes</span>.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4 text-gray-700">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="https://wa.me/923200000000" target="_blank" className="hover:text-green-600 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Right Column – Contact */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Contact Us</h3>
          <p className="text-gray-700 text-sm">📩 Email: paintco.support@gmail.com</p>
          <p className="text-gray-700 text-sm mt-0.5">📞 Phone: +92 320 0000000</p>
          <p className="text-gray-700 text-sm mt-0.5">📍 Address: Lahore, Pakistan</p>
          <p className="text-gray-700 text-sm mt-0.5">
            💬 WhatsApp: <a href="https://wa.me/923200000000" target="_blank" className="text-green-600 underline">Chat Now</a>
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 pt-4 border-t border-gray-300">
        <p className="text-gray-700 text-sm">
          © 2025 <span className="text-yellow-500 font-semibold">Premium Paints</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
