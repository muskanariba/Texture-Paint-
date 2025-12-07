export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background GIF */}
      <img
        src="https://cdn.apartmenttherapy.info/image/upload/v1558948665/at/archive/a024e5758b2387fec29d80f4e21766294ebb08d8.gif"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Content with semi-transparent dark background */}
      <div className="relative z-10 text-center px-4 bg-black/40 py-10 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Bring Your Walls to Life
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Premium-quality paints designed for durability, smooth finish, and long-lasting shine.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Get a Free Quote
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Explore Colors
          </button>
        </div>
      </div>
    </section>
  );
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Hero() {
//   const [hero, setHero] = useState(null);

//   useEffect(() => {
//     axios.get("/api/heroes").then((res) => setHero(res.data[0]));
//   }, []);

//   if (!hero) return null;

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center">
//       <img
//         src={hero.backgroundImage}
//         className="absolute w-full h-full object-cover"
//       />

//       <div className="relative z-10 text-center bg-black/40 p-10 rounded-lg">
//         <h1 className="text-5xl text-white font-bold">{hero.title}</h1>
//         <p className="text-gray-200 mt-4">{hero.subtitle}</p>

//         <div className="flex justify-center gap-4 mt-6">
//           <button className="btn-yellow">{hero.button1Text}</button>
//           <button className="btn-blue">{hero.button2Text}</button>
//         </div>
//       </div>
//     </section>
//   );
// }
