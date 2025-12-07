import { motion } from "framer-motion";
import { FaHome, FaSun, FaTree, FaIndustry, FaPalette, FaTint } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      title: "Interior Paints",
      description: "Smooth application, low odor, rich coverage—perfect for modern homes.",
      icon: <FaHome />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Exterior Paints",
      description: "Weather-resistant, UV-protected, and formulated to withstand heat, rain, and dust.",
      icon: <FaSun />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Wood Coatings",
      description: "Premium finishes that protect and enhance wooden furniture & surfaces.",
      icon: <FaTree />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Metal Paints",
      description: "Anti-rust, highly durable solutions for gates, grills, and metal structures.",
      icon: <FaIndustry />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Texture & Decorative Paints",
      description: "Artistic textures, stone effects, metallic finishes, and designer walls.",
      icon: <FaPalette />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Waterproofing Solutions",
      description: "Leak-proof coatings for roofs, walls, and basements.",
      icon: <FaTint />,
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <section
      id="products"
      className="w-full py-10 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/66/84/7a/66847acedff509bf3b1d457eb39efaf9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16 bg-white/60 backdrop-blur-md rounded-2xl py-10">
        <h2 className="md:text-4xl font-extrabold text-center text-white">
         <span className="text-black" >  Explore Our</span>
         <br />
          <span className="text-red-400">Collection</span> 
            <span className="text-black" > & </span>
           <span className="text-blue-400">Solutions</span>
        </h2>

        {/* Overlay below heading */}
        <div className="absolute top-24 left-0 w-full h-full  z-0"></div>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center w-full relative z-10">
          {products.map((product, index) => (
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
                className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr ${product.color} opacity-20 rounded-full rotate-45`}
              ></div>

              {/* Icon */}
              <div className="text-3xl mb-4 text-gray-800">{product.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm">{product.description}</p>

              {/* Subtle Floating Circles */}
              <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-yellow-100 opacity-20 rounded-full"></div>
              <div className="absolute -left-8 top-20 w-16 h-16 bg-red-100 opacity-20 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}/products`)
//       .then((res) => res.json())
//       .then((data) => data.success && setProducts(data.products));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Our Products</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <div key={p._id} className="bg-white p-4 shadow rounded">
//             <img
//               src={`${API_URL}/uploads/${p.image}`}
//               className="h-40 w-full object-cover rounded"
//             />

//             <h3 className="text-lg font-bold mt-3">{p.name}</h3>
//             <p className="text-gray-500">${p.price}</p>
//             <p className="text-sm text-gray-600">{p.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
