import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Gallery() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation(); // to detect refresh trigger

  const fetchColors = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/gallery/add`);
      if (!res.ok) throw new Error("Failed to fetch colors");
      const data = await res.json();
      setColors(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching colors:", err);
      setLoading(false);
    }
  };

  // Fetch on mount and whenever location.state?.refresh changes
  useEffect(() => {
    fetchColors();
  }, [location.state?.refresh]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gallery Colors</h1>
        <Link
          to="/admin/gallery/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add New Color
        </Link>
      </div>

      {loading ? (
        <p>Loading colors...</p>
      ) : colors.length === 0 ? (
        <p>No colors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div
              key={color._id || color.id} // use _id from MongoDB
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <div
                className="w-full h-24 rounded mb-2"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="font-medium text-gray-800">{color.name}</p>
              <p className="text-gray-500">{color.hex}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
