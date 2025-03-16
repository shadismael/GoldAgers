import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GroceryDelivery() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState("");

  const groceryItems = [
    { name: "Milk", price: 3.50, img: "/public/images/milk.jpg", category: "Dairy" },
    { name: "Bread", price: 2.00, img: "/public/images/bread.jpg", category: "Bakery" },
    { name: "Eggs", price: 4.00, img: "/public/images/eggs.jpg", category: "Dairy" },
    { name: "Bananas", price: 1.50, img: "/public/images/bananas.jpg", category: "Fruits" },
    { name: "Apples", price: 2.50, img: "/public/images/apples.jpg", category: "Fruits" },
    { name: "Toilet Paper", price: 5.00, img: "/public/images/toilet-paper.jpg", category: "Home Essentials" },
    { name: "Dish Soap", price: 3.00, img: "/public/images/dish-soap.jpg", category: "Cleaning" },
    { name: "Rice", price: 6.00, img: "/images/rice.jpg", category: "Grains" },
    { name: "Chicken", price: 8.50, img: "/images/chicken.jpg", category: "Meat" },
    { name: "Cheese", price: 4.75, img: "/images/cheese.jpg", category: "Dairy" },
    { name: "Carrots", price: 2.00, img: "/images/carrots.jpg", category: "Vegetables" },
    { name: "Tomatoes", price: 3.00, img: "/images/tomatoes.jpg", category: "Vegetables" },
    { name: "Pasta", price: 4.00, img: "/images/pasta.jpg", category: "Grains" },
    { name: "Olive Oil", price: 7.00, img: "/images/olive-oil.jpg", category: "Cooking Essentials" }
  ];

  // Add item to cart
  const addToCart = (item) => {
    if (cart.includes(item)) return; // Prevent duplicate items
    setCart([...cart, item]);
    setTotalPrice((prevPrice) => prevPrice + item.price);
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
    setTotalPrice((prevPrice) => prevPrice - item.price);
  };

  // Confirm Order & Set Delivery Time
  const confirmOrder = () => {
    if (cart.length === 0) {
      alert("❌ Your cart is empty! Please add items.");
      return;
    }
    const estimatedTime = Math.floor(Math.random() * 45) + 15; // Random time between 15-60 mins
    setDeliveryTime(estimatedTime);
    setDeliveryStatus("🛍️ Order placed! Your groceries are being prepared.");
  };

  // Track Delivery Progress & Show Status on Page
  const trackDelivery = () => {
    if (!deliveryTime) return;
    setDeliveryStatus(`🛵 Your groceries are on the way! Arriving in ${deliveryTime} minutes.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center h-screen overflow-hidden bg-gray-100 text-black p-6"
    >
      <h1 className="text-3xl font-bold mb-4">🛒 Grocery Delivery</h1>

      {/* Scrollable Content */}
      <div className="w-full max-w-xs overflow-y-auto flex-grow pb-24">
        {/* Grocery Items List */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {groceryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => (cart.includes(item) ? removeFromCart(item) : addToCart(item))}
              className={`p-3 rounded-lg shadow-lg transition-all text-black ${
                cart.includes(item) ? "bg-green-300" : "bg-white hover:bg-gray-200"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mb-2"
                onError={(e) => (e.target.src = "/images/default-grocery.jpg")}
              />
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
              {cart.includes(item) && <p className="text-green-800 font-bold">✅ Picked</p>}
            </button>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-lg font-bold mb-2">🛍️ My Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-700">Your cart is empty.</p>
          ) : (
            <ul className="text-black space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-lg flex justify-between">
                  {item.name} <span className="text-gray-500">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-2" />
          <p className="text-lg font-bold">💰 Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Order & Delivery Section - Always Visible */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg text-center">
        {cart.length > 0 && (
          <button
            onClick={confirmOrder}
            className="feature-button bg-blue-500 text-black w-full"
          >
            ✅ Done & Order
          </button>
        )}

        {/* Show Delivery Time & Track Delivery Button */}
        {deliveryTime && (
          <div className="mt-4 bg-yellow-300 p-3 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold text-black">🚚 Estimated Arrival: {deliveryTime} minutes</p>
            <p className="text-lg text-black">{deliveryStatus}</p>
            <button
              onClick={trackDelivery}
              className="feature-button bg-green-500 text-black w-full mt-3"
            >
              🚛 Track Delivery
            </button>
          </div>
        )}
      </div>

      {/* Back Button */}
      <Link to="/more" className="mt-6 feature-button bg-gray-400 text-black">
        🔙 Back to Features
      </Link>
    </motion.div>
  );
}

export default GroceryDelivery;
