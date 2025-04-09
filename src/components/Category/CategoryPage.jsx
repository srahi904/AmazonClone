/** @format */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const [productsRes, categoryRes] = await Promise.all([
          axios.get(
            `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
          ),
          axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}`),
        ]);

        setProducts(productsRes.data);
        setCategoryName(categoryRes.data.name);
        document.title = `${categoryRes.data.name} - My Store`;
      } catch (error) {
        console.error("Error fetching category products", error);
        document.title = "Category Not Found - My Store";
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categoryName} Products
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
