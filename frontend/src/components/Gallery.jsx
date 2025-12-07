import { useEffect, useState } from "react";

export default function Gallery() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColors = async () => {
    try {
      const res = await fetch(`${API_URL}/gallery`);
      const data = await res.json();
      console.log("Fetched colors:", data); // debug

      // Backend response handling
      if (data.success) setColors(data.colors);  // admin panel style
      else if (Array.isArray(data)) setColors(data); // if backend returns array directly
    } catch (err) {
      console.error("Error fetching colors:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Color Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : colors.length === 0 ? (
        <p>No colors found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {colors.map((c) => (
            <div key={c._id} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-md shadow border"
                style={{ background: c.hex }}
              ></div>
              <p className="mt-2 font-medium">{c.name}</p>
              <p className="text-sm text-gray-500">{c.hex}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
