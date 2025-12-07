import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddProject() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("active");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description) return setError("Title and description required");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("link", link);
      formData.append("status", status);
      if (image) formData.append("image", image);

      const res = await fetch(`${API_URL}/projects/add`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");

      setLoading(false);
      navigate("/admin/projects");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <AdminLayout>
         <div className="p-6 flex ">

        <div className="bg-white p-8 rounded-xl shadow-lg border w-full max-w-xl">

          <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Project </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 border rounded"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full p-2 border rounded"
              rows={5}
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="w-full p-2 border rounded"
            />

            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Project link (optional)"
              className="w-full p-2 border rounded"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {loading ? "Uploading..." : "Add Project"}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
