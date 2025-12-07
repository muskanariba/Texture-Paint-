import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddAbout() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/about/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("Added Successfully");
      navigate("/admin/about");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 flex ">
        
        <div className="bg-white p-8 rounded-xl shadow-lg border w-full max-w-xl">

          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Add About
          </h1>

          <form className="space-y-5" onSubmit={submit}>

            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                name="title"
                placeholder="Title"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Subtitle</label>
              <input
                name="subtitle"
                placeholder="Subtitle"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Description"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Image URL</label>
              <input
                name="image"
                placeholder="Image URL"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
              />
            </div>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
            >
              Add
            </button>

          </form>
        </div>

      </div>
    </AdminLayout>
  );
}
