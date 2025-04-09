/** @format */

// /** @format */

// import { useEffect, useState } from "react";
// import Lottie from "react-lottie";
// import Confetti from "react-confetti";

// const SuccessAnimation = () => {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:7000/success") // 🔥 Fetch from JSON Server
//       .then((response) => response.json())
//       .then((data) => setAnimationData(data))
//       .catch((error) => console.error("Error fetching animation:", error));
//   }, []);

//   if (!animationData) return <p>Loading animation...</p>; // Show loading state

//   const defaultOptions = {
//     loop: false,
//     autoplay: true,
//     animationData, // ✅ Use fetched JSON
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <Confetti />
//       <Lottie options={defaultOptions} height={300} width={300} />
//       <h1 className="text-3xl font-bold text-green-600 mt-4">
//         Thank You for Your Order!
//       </h1>
//       <p className="text-gray-600 mt-2">
//         Your order has been placed successfully.
//       </p>
//     </div>
//   );
// };

// export default SuccessAnimation;
