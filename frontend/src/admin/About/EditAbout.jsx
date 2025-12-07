import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function EditAbout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const load = async () => {
    const res = await fetch(`${API_URL}/about/all`);
    const data = await res.json();
    const item = data.about.find((x) => x._id === id);
    if (item) setForm(item);
  };

  useEffect(() => {
    load();
  }, []);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const update = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/about/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("Updated Successfully");
      navigate("/admin/about/list");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-xl border shadow">

        <h1 className="text-3xl font-bold mb-6">Edit About</h1>

        <form className="space-y-4" onSubmit={update}>
          <input
            name="title"
            className="border p-3 w-full rounded"
            value={form.title}
            onChange={handle}
          />

          <input
            name="subtitle"
            className="border p-3 w-full rounded"
            value={form.subtitle}
            onChange={handle}
          />

          <textarea
            name="description"
            rows="4"
            className="border p-3 w-full rounded"
            value={form.description}
            onChange={handle}
          ></textarea>

          <input
            name="image"
            className="border p-3 w-full rounded"
            value={form.image}
            onChange={handle}
          />

          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Update
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
