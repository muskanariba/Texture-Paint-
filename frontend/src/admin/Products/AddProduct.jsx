import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const submitProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", desc);
    formData.append("image", image);

    const res = await fetch(`${API_URL}/products/add`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) navigate("/admin/products");
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-black mb-6">Add New Product</h2>

        <form
          onSubmit={submitProduct}
          className="bg-white max-w-xl p-6 rounded-2xl shadow border border-gray-200 space-y-5"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-lg p-2 outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              className="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg p-2 outline-none"
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Product Image
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
