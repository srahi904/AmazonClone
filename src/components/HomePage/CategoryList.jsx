/** @format */

// /** @format */

// import React from "react";
// import { Link } from "react-router-dom";

// const categories = [
//   { name: "Electronics", icon: "📱" },
//   { name: "Clothing", icon: "👕" },
//   { name: "Books", icon: "📚" },
//   { name: "Home & Kitchen", icon: "🏠" },
//   { name: "Beauty", icon: "💄" },
//   { name: "Sports", icon: "⚽" },
// ];

// const CategoryList = () => {
//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//         {categories.map((category) => (
//           <Link
//             key={category.name}
//             to={`/category/${category.name.toLowerCase()}`}
//             className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <span className="text-4xl mb-2">{category.icon}</span>
//             <span className="text-center">{category.name}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;
