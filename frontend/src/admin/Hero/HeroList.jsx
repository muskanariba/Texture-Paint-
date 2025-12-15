import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function HeroList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await fetch(`${API_URL}/hero/all`);
    const json = await res.json();
    if (json.success) setData(json.hero);
  };

  const del = async (id) => {
    if (!window.confirm("Delete this Hero section?")) return;
    await fetch(`${API_URL}/hero/delete/${id}`, { method: "DELETE" });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

        {/* 🔹 Header */}
        <div className="p-6 bg-gradient-to-r from-gray-100 to-white rounded-xl mb-8 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-black">Hero Section</h1>
              <p className="text-gray-700 mt-2">
                Manage homepage hero content & background images.
              </p>
            </div>

            <Link
              to="/admin/hero/add"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow transition"
            >
              + Add Hero
            </Link>
          </div>
        </div>

        {/* 🔹 Table */}
        <div className="overflow-x-auto bg-white border rounded-xl shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 border">Background</th>
                <th className="p-4 border">Title</th>
                <th className="p-4 border">Description</th>
                <th className="p-4 border text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((h) => (
                <tr
                  key={h._id}
                  className="hover:bg-gray-50 transition"
                >
                  {/* Image */}
                  <td className="p-4 border">
                    <img
                      src={`${API_URL.replace("/api", "")}/uploads/${h.bgImage}`}
                      alt="Hero"
                      className="w-28 h-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-4 border font-medium text-gray-800">
                    {h.title}
                  </td>

                  {/* Description (trimmed) */}
                  <td className="p-4 border text-gray-700 text-sm max-w-md">
                    {h.description?.length > 100
                      ? h.description.substring(0, 100) + "..."
                      : h.description || "—"}
                  </td>

                  {/* Actions */}
                  <td className="p-4 border">
                    <div className="flex justify-center gap-3">
                      <Link
                        to={`/admin/hero/edit/${h._id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-lg transition"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => del(h._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* Empty State */}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-600"
                  >
                    No Hero sections found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout>
  );
}
