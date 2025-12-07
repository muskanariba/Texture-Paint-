import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function ServiceList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await fetch(`${API_URL}/services/all`);
    const data = await res.json();
    if (data.success) setServices(data.services);
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    const res = await fetch(`${API_URL}/services/delete/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.success) loadServices();
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

       {/* ⭐ Dashboard-Style Page Header ⭐ */}
<div className="p-6 bg-gradient-to-r from-gray-100 to-white rounded-xl mb-8 shadow-sm border border-gray-200">

  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold text-black">Services</h1>
      <p className="text-gray-800 mt-2">
        Manage all services details including price and content.
      </p>
    </div>

    <Link
      to="/admin/services/add"
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
    >
      + Add Services
    </Link>
  </div>




        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-xl overflow-hidden border">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-sm font-semibold border">Title</th>
                <th className="p-3 text-sm font-semibold border w-1/2">
                  Description
                </th>
                <th className="p-3 text-sm font-semibold border">Icon</th>
                <th className="p-3 text-sm font-semibold border text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {services.map((s) => (
                <tr key={s._id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border text-gray-800 font-medium">
                    {s.title}
                  </td>

                  <td className="p-3 border text-gray-600">
                    {s.description}
                  </td>

                  <td className="p-3 border text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gray-100 rounded-lg shadow-sm">
                        <i className={`${s.icon} text-gray-700`}></i>
                      </div>
                      <span className="text-sm text-gray-600">{s.icon}</span>
                    </div>
                  </td>

                  <td className="p-3 border text-center">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/admin/services/edit/${s._id}`}
                        className="px-3 py-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm shadow transition"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteService(s._id)}
                        className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm shadow transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
