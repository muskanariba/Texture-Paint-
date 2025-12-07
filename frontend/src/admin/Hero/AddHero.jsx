import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddHero() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    if (image) formData.append("image", image);

    const res = await fetch(`${API_URL}/hero/add`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      alert("Hero added successfully!");
      navigate("/admin/hero");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 flex ">

        <div className="bg-white p-8 rounded-xl shadow-lg border w-full max-w-xl">

          <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Hero Section</h1>

          <form onSubmit={submitHandler} className="space-y-5">

            {/* Title */}
            <div>
              <label className="block font-medium mb-1 text-gray-800">Title</label>
              <input
                type="text"
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block font-medium mb-1 text-gray-800">Subtitle</label>
              <textarea
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                rows="3"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </div>

            {/* Hero Image */}
            <div>
              <label className="block font-medium mb-1 text-gray-800">Hero Image</label>
              <input
                type="file"
                accept="image/*"
                className="border p-3 rounded w-full bg-gray-50 cursor-pointer"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
            >
              Add Hero
            </button>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
}
