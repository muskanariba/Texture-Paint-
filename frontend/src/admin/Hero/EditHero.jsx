import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function EditHero() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    bgImage: "",

    primaryBtnText: "",
    primaryBtnLink: "",

    secondaryBtnText: "",
    secondaryBtnLink: "",
  });

  const [newImage, setNewImage] = useState(null);

  // 🔹 Load hero data (same pattern as EditAbout)
  const load = async () => {
    const res = await fetch(`${API_URL}/hero/all`);
    const data = await res.json();
    const item = data.hero.find((x) => x._id === id);
    if (item) setForm(item);
  };

  useEffect(() => {
    load();
  }, []);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const update = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("subtitle", form.subtitle);
    fd.append("description", form.description);

    fd.append("primaryBtnText", form.primaryBtnText);
    fd.append("primaryBtnLink", form.primaryBtnLink);
    fd.append("secondaryBtnText", form.secondaryBtnText);
    fd.append("secondaryBtnLink", form.secondaryBtnLink);

    // new image only if selected
    if (newImage) {
      fd.append("bgImage", newImage);
    }

    const res = await fetch(`${API_URL}/hero/update/${id}`, {
      method: "PUT",
      body: fd,
    });

    const data = await res.json();
    if (data.success) {
      alert("Hero Updated Successfully");
      navigate("/admin/hero");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-xl border shadow max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Edit Hero Section
        </h1>

        <form className="space-y-5" onSubmit={update}>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              name="title"
              className="border p-3 w-full rounded"
              value={form.title}
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
              className="border p-3 w-full rounded"
              value={form.description}
              onChange={handle}
            />
          </div>

          {/* Current Background Image */}
          <div>
            <label className="block font-medium mb-1">Current Background Image</label>
            {form.bgImage ? (
              <img
                src={`${API_URL.replace("/api","")}/uploads/${form.bgImage}`}
                className="w-full h-40 object-cover rounded border mb-2"
                alt="Hero BG"
              />
            ) : (
              <p>No image uploaded</p>
            )}
          </div>

          {/* Upload New Image */}
          <div>
            <label className="block font-medium mb-1">Upload New Background Image</label>
            <input
              type="file"
              accept="image/*"
              className="border p-3 w-full rounded"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
            <p className="text-sm text-gray-600 mt-1">
              Leave empty to keep current image.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="primaryBtnText"
              placeholder="Primary Button Text"
              className="border p-3 rounded"
              value={form.primaryBtnText}
              onChange={handle}
            />
            <input
              name="primaryBtnLink"
              placeholder="Primary Button Link"
              className="border p-3 rounded"
              value={form.primaryBtnLink}
              onChange={handle}
            />

            <input
              name="secondaryBtnText"
              placeholder="Secondary Button Text"
              className="border p-3 rounded"
              value={form.secondaryBtnText}
              onChange={handle}
            />
            <input
              name="secondaryBtnLink"
              placeholder="Secondary Button Link"
              className="border p-3 rounded"
              value={form.secondaryBtnLink}
              onChange={handle}
            />
          </div>

          {/* Submit */}
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition">
            Update Hero
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}
