import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function HeroList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHeroes = async () => {
    try {
      const res = await fetch(`${API_URL}/hero/all`);
      const data = await res.json();

      if (data.success) {
        // API usually: heroes or hero → handle both
        setHeroes(data.heroes || data.hero || []);
      }
    } catch (err) {
      console.error(err);
      setHeroes([]); // safe fallback
    }
    setLoading(false);
  };

  const deleteHero = async (id) => {
    if (!confirm("Delete this hero section?")) return;

    const res = await fetch(`${API_URL}/hero/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.success) loadHeroes();
  };

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Page Header */}
        <div className="p-6 bg-gradient-to-r from-gray-100 to-white rounded-xl mb-8 shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-black">Hero Section</h1>
            <p className="text-gray-800 mt-2">
              Manage homepage hero banners from here.
            </p>
          </div>

          <Link
            to="/admin/hero/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            + Add Hero
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white border rounded-xl shadow overflow-x-auto">
          {loading ? (
            <p className="p-5 text-gray-500 text-center">Loading...</p>
          ) : heroes.length === 0 ? (
            <p className="p-5 text-gray-500 text-center">No hero sections added.</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Title</th>
                  <th className="p-3 border">Subtitle</th>
                  <th className="p-3 border">Background</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {heroes.map((h) => (
                  <tr key={h._id} className="hover:bg-gray-50">
                    <td className="p-3 border">{h.title}</td>
                    <td className="p-3 border">{h.subtitle}</td>

                    <td className="p-3 border">
                      <img
                        src={h.backgroundImage}
                        alt=""
                        className="w-24 h-14 object-cover rounded border"
                      />
                    </td>

                    <td className="p-3 border">
                      <div className="flex gap-2">
                        <Link
                          to={`/admin/hero/edit/${h._id}`}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => deleteHero(h._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </AdminLayout>
  );
}
