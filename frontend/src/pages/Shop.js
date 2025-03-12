import React, { useEffect, useState } from 'react';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold">Shop</h2>
      <p className="mt-4">Explore our collection of dark-themed art.</p>
      <div className="mt-8">
        {products.map((product) => (
          <div key={product._id} className="border border-gray-700 p-4 rounded-lg mb-4">
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-gray-400">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;