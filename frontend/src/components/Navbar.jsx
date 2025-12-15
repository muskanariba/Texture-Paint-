import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Collection", href: "#collection" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Premium Texture Paint"
            className="w-9 h-9 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span
              className="text-xl text-gray-900"
              style={{ fontFamily: "Playfair Display", fontStyle: "italic" }}
            >
              Premium Texture 
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gray-700 uppercase">
              Paint
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium ml-auto text-sm">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-gray-800 hover:text-black transition"
              >
                {item.name}
              </a>

              {/* Modern underline */}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            className="space-y-1"
          >
            <span className="block w-5 h-0.5 bg-gray-800 rounded-full"></span>
            <span className="block w-5 h-0.5 bg-gray-800 rounded-full"></span>
            <span className="block w-5 h-0.5 bg-gray-800 rounded-full"></span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-5 space-y-3 text-sm font-medium"
          >
            {navItems.map((item) => (
              <li key={item.name} className="border-b pb-2">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-800 hover:text-black transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
