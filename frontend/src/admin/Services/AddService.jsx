import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddService() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/services/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, icon }),
    });

    const data = await res.json();
    if (data.success) navigate("/admin/services");
  };

  return (
    <AdminLayout>
         <div className="p-6 flex ">

        <div className="bg-white p-8 rounded-xl shadow-lg border w-full max-w-xl">

          <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Services</h1>


          <form onSubmit={handleAdd}>

            <label className="block mb-2 font-medium text-gray-600">
              Service Title
            </label>
            <input
              type="text"
              placeholder="Enter service title"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block mb-2 font-medium text-gray-600">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              className="w-full p-3 border rounded-lg mb-4 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label className="block mb-2 font-medium text-gray-600">
              Icon Class
            </label>
            <input
              type="text"
              placeholder="e.g. fa-solid fa-home"
              className="w-full p-3 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
