import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddHero() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    primaryBtnText: "",
    primaryBtnLink: "",
    secondaryBtnText: "",
    secondaryBtnLink: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Background image is required");

    setLoading(true);

    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    fd.append("bgImage", image);

    const res = await fetch(`${API_URL}/hero/add`, {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Hero section added successfully");
      navigate("/admin/hero");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border w-full max-w-3xl">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Add Hero Section
            </h1>
            <p className="text-gray-600 mt-2">
              Manage homepage hero content & background image.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={submit}>

            {/* Title */}
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                name="title"
                placeholder="Main heading text"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
                required
              />
            </div>

           

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Hero description text"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={handle}
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Primary Button Text
                </label>
                <input
                  name="primaryBtnText"
                  placeholder="e.g. Get Started"
                  className="border p-3 w-full rounded"
                  onChange={handle}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Primary Button Link
                </label>
                <input
                  name="primaryBtnLink"
                  placeholder="/contact"
                  className="border p-3 w-full rounded"
                  onChange={handle}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Secondary Button Text
                </label>
                <input
                  name="secondaryBtnText"
                  placeholder="e.g. View Work"
                  className="border p-3 w-full rounded"
                  onChange={handle}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Secondary Button Link
                </label>
                <input
                  name="secondaryBtnLink"
                  placeholder="/portfolio"
                  className="border p-3 w-full rounded"
                  onChange={handle}
                />
              </div>
            </div>

            {/* Background Image */}
            <div>
              <label className="block font-medium mb-1">
                Hero Background Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <p className="text-sm text-gray-600 mt-1">
                Recommended size: 1920×900
              </p>
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-medium transition
                ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? "Saving..." : "Add Hero Section"}
            </button>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
