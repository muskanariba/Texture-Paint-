import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function EditHero() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const loadHero = async () => {
    const res = await fetch(`${API_URL}/hero/${id}`);
    const data = await res.json();
    if (data.success) {
      setTitle(data.hero.title);
      setSubtitle(data.hero.subtitle);
      setBackgroundImage(data.hero.backgroundImage);
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/hero/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, subtitle, backgroundImage }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Hero updated successfully!");
      navigate("/admin/hero");
    }
  };

  useEffect(() => {
    loadHero();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6 max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Edit Hero Section</h1>

        <form
          onSubmit={updateHandler}
          className="bg-white p-6 rounded-xl shadow border"
        >
          <label className="block mb-4">
            <span className="font-medium">Title</span>
            <input
              type="text"
              className="border p-2 rounded w-full mt-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="font-medium">Subtitle</span>
            <textarea
              className="border p-2 rounded w-full mt-1"
              rows="3"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="font-medium">Background Image URL</span>
            <input
              type="text"
              className="border p-2 rounded w-full mt-1"
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
              required
            />
          </label>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-4">
            Update Hero
          </button>
        </form>

      </div>
    </AdminLayout>
  );
}
