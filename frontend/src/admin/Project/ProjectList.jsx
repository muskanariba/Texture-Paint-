import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function ProjectList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    try {
      const res = await fetch(`${API_URL}/projects/all`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setProjects(data.projects);
      setLoading(false);
    } catch (e) {
      setErr(e.message || "Error");
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    try {
      const res = await fetch(`${API_URL}/projects/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setProjects(prev => prev.filter(p => p._id !== id));
    } catch (e) {
      alert(e.message || "Delete failed");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (err) return <div className="text-red-600">{err}</div>;

  return (
 <AdminLayout>
       <div className="p-4">
       <div className="p-6 bg-gradient-to-r from-gray-100 to-white rounded-xl mb-8 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-black">Projects</h1>
              <p className="text-gray-800 mt-2">
                Manage all portfolio projects including images, client name and content.
              </p>
            </div>

            <Link
              to="/admin/projects/add"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
            >
              + Add Project
            </Link>
          </div>
        </div>

      <div className="space-y-4">
        {projects.length === 0 && <div>No projects yet</div>}
        {projects.map(p => (
          <div key={p._id} className="p-3 border rounded flex gap-4">
            <div style={{width:120}}>
              {p.image ? <img src={import.meta.env.VITE_API_URL + p.image} alt={p.title} style={{width:"100%",height:80,objectFit:"cover"}} /> : <div className="bg-gray-200 h-20" />}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.category} • {p.status}</p>
              <p className="text-sm mt-1">{p.description.slice(0,120)}{p.description.length>120?"...":""}</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link to={`/admin/projects/edit/${p._id}`} className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</Link>
              <button onClick={()=>handleDelete(p._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
 </AdminLayout>
  );
}
