import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          <div className="relative">
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
              {p.category}
            </span>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            <p className="text-gray-600 text-sm mt-1">${p.price}</p>

            <div className="mt-auto flex gap-2 pt-4">
              <button
                onClick={() => addToCart(p)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-all"
              >
                Add to Cart
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium py-2 px-3 rounded-lg transition-all">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
