import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("adminToken");

  const fetchProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    if (data.success) setProducts(data.products);
  };

  const deleteProduct = async (id) => {
    if (!confirm("Delete product?")) return;

    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

        {/* ⭐ Dashboard-Style Page Header ⭐ */}
        <div className="p-6 bg-gradient-to-r from-gray-100 to-white rounded-xl mb-8 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-black">Products</h1>
              <p className="text-gray-800 mt-2">
                Manage all product details including images, pricing and content.
              </p>
            </div>

            <Link
              to="/admin/products/add"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
            >
              + Add Product
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
            >
              <img
                src={`${API_URL}/uploads/${p.image}`}
                className="h-36 w-full object-cover rounded-md"
              />

              <h3 className="font-semibold mt-3 text-lg text-gray-900">{p.name}</h3>
              <p className="text-gray-600 text-sm">${p.price}</p>

              <div className="flex gap-2 mt-4">
                <Link
                  to={`/admin/products/edit/${p._id}`}
                  className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition text-center"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteProduct(p._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}
