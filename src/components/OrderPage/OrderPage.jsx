/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // ✅ Redirect if user is not authenticated
  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  // ✅ Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Order History 📦
      </h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-600">
          <p className="text-xl">
            No orders found. Please place an order first.
          </p>
          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Continue Shopping 🛍️
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-blue-500 text-white text-left">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Total</th>
                <th className="p-3">Products</th>
                <th className="p-3">Links</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-all">
                  <td className="p-3 text-gray-700">{order.id}</td>
                  <td className="p-3 text-gray-700">{order.date}</td>
                  <td className="p-3 font-bold text-green-600">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="p-3 space-y-1">
                    {order.products.map((p) => (
                      <div key={p.id} className="text-gray-700">
                        {p.title}{" "}
                        <span className="text-gray-500">(x{p.quantity})</span>
                      </div>
                    ))}
                  </td>
                  <td className="p-3 space-y-1">
                    {order.products.map((p) =>
                      p.link ? (
                        <Link
                          key={p.id}
                          to={p.link}
                          target="_blank"
                          className="text-blue-500 underline hover:text-blue-700 block"
                        >
                          View {p.title}
                        </Link>
                      ) : (
                        <span key={p.id} className="text-gray-400 italic block">
                          No link available
                        </span>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
