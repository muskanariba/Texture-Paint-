import { useEffect, useState } from "react";

export default function Gallery() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColors = async () => {
    try {
      const res = await fetch(`${API_URL}/gallery`);
      const data = await res.json();

      if (data.success && Array.isArray(data.colors)) {
        setColors(data.colors);
      } else {
        setColors([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl font-extrabold text-center text-gray-800 mb-12 leading-tight">
  <span className="text-black">Explore Our</span>  <span className="text-yellow-500"> Premium </span> <br />
  <span className="text-red-500">Color</span>{" "}
  <span className="text-black">Gallery</span>{" "}
  <span className="text-blue-500">Shades</span>
</h2>



        {loading ? (
          <p className="text-center text-gray-600">Loading color gallery...</p>
        ) : colors.length === 0 ? (
          <p className="text-center text-gray-600">No colors found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {colors.map((c) => (
              <div
                key={c._id}
                className="group cursor-pointer transition transform hover:-translate-y-2"
              >
                <div
                  className="w-full h-28 rounded-xl shadow-md border relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-25 transition"></div>
                </div>

                <p className="mt-2 text-base font-semibold text-gray-800 text-center">
                  {c.name}
                </p>

                <p className="text-xs text-gray-500 text-center">{c.hex}</p>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
