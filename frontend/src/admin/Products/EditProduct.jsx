import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p) => p._id === id);
        setProduct(found);
      });
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    if (image) formData.append("image", image);

    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    if (data.success) navigate("/admin/products");
  };

  if (!product)
    return (
      <AdminLayout>
        <p className="text-gray-900 p-6 text-lg">Loading product...</p>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-black mb-6">
          Edit Product
        </h2>

        <form
          onSubmit={updateProduct}
          className="bg-white max-w-xl p-6 rounded-2xl shadow border border-gray-200 space-y-5"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 outline-none"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Price
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-lg p-2 outline-none"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg p-2 outline-none"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>

          {/* Current Image */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Current Image
            </label>

            <div className="border border-gray-300 rounded-lg overflow-hidden w-40 h-40 flex items-center justify-center bg-gray-50 mb-3">
              <img
                src={`${API_URL}/uploads/${product.image}`}
                alt="Current Product"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Upload New Image */}
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Upload New Image (optional)
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition">
            Update Product
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
