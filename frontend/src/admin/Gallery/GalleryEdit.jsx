import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AdminGalleryEdit() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [hex, setHex] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const res = await fetch(`${API_URL}/gallery/${id}`);
        const data = await res.json();

        if (data.success) {
          setName(data.color.name);
          setHex(data.color.hex);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchColor();
  }, [id]);

  const updateColor = async (e) => {
    e.preventDefault();
    setSaving(true);

    await fetch(`${API_URL}/gallery/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, hex }),
    });

    setSaving(false);
    navigate("/admin/gallery");
  };

  if (loading)
    return (
      <AdminLayout>
        <div className="p-6 text-gray-600">Loading color data...</div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="p-6 max-w-xl">
        <h1 className="text-2xl font-semibold mb-6">Edit Color</h1>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <form onSubmit={updateColor} className="space-y-4">

            <div>
              <label className="text-sm font-medium">Color Name</label>
              <input
                className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter color name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">HEX Code</label>
              <input
                className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                placeholder="#FFFFFF"
              />
            </div>

            <div
              className="w-16 h-16 rounded border"
              style={{ background: hex }}
            ></div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate("/admin/gallery")}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Back
              </button>

              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
