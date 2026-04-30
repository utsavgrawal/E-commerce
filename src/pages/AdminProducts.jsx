import React, { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const saveProducts = (updatedProducts) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.image) {
      alert("Name, Price aur Image required hai");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: Number(formData.price),
      image: formData.image,
      category: formData.category,
      description: formData.description,
    };

    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);

    setFormData({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
    });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    saveProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Products</h1>

        <form
          onSubmit={handleAddProduct}
          className="bg-white p-5 rounded-xl shadow mb-8 grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="3"
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Add Product
          </button>
        </form>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3"
              />

              <h2 className="font-bold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>

              {product.category && (
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>
              )}

              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}

          {products.length === 0 && (
            <p className="text-gray-500">No products added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;