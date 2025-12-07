import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function EditProject(){
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("active");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${API_URL}/api/projects/${id}`);
        const data = await res.json();
        if (!data.success) throw new Error(data.message || "Failed");
        setProject(data.project);
        setTitle(data.project.title);
        setDescription(data.project.description);
        setCategory(data.project.category);
        setLink(data.project.link);
        setStatus(data.project.status);
        setLoading(false);
      } catch (e) {
        setError(e.message || "Error");
        setLoading(false);
      }
    };
    fetchProject();
  }, [API_URL, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("link", link);
      formData.append("status", status);
      if (image) formData.append("image", image);

      const res = await fetch(`${API_URL}/api/projects/update/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      navigate("/admin/projects");
    } catch (e) {
      setError(e.message || "Update failed");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <AdminLayout>
        <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Edit Project</h2>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border" />
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border" rows={6} />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border" />
        <input value={link} onChange={e=>setLink(e.target.value)} placeholder="Project link (optional)" className="w-full p-2 border" />
        <select value={status} onChange={e=>setStatus(e.target.value)} className="p-2 border">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <div>
          <div className="mb-2">Current image:</div>
          {project.image ? <img src={import.meta.env.VITE_API_URL + project.image} alt={project.title} style={{width:160,height:90,objectFit:"cover"}}/> : <div className="bg-gray-200 h-24 w-40" />}
        </div>

        <input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
      </form>
    </div>
    </AdminLayout>
  );
}
