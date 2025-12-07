import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // <-- ADD THIS

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", border: "bg-yellow-500" },
    { name: "About Us", href: "#about", border: "bg-red-500" },
    { name: "Services", href: "#services", border: "bg-blue-500" },
    { name: "Contact", href: "#contact", border: "bg-purple-500" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-extrabold text-gray-900 tracking-wide">
            Premium Texture
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium ml-auto">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="cursor-pointer text-gray-800 px-1 py-1 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </a>
              <span
                className={`absolute left-0 bottom-0 h-[3px] w-0 rounded-full transition-all duration-300 ${item.border} group-hover:w-full`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            className="space-y-1"
          >
            <span className="block w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="block w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="block w-6 h-0.5 bg-gray-700 rounded-full"></span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium rounded-b-lg"
        >
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-gray-200 pb-2">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-gray-800 hover:text-gray-900 transition-colors duration-300 ${item.border} hover:rounded-md px-2 py-1`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
