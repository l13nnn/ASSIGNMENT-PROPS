import React from 'react';
import ProductList from './ProductList.jsx';

function App() {
  const products = [
    { name: 'Watermelon', inStock: true },
    { name: 'Mango', inStock: false },
    { name: 'Pineapple', inStock: true },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;