import React from 'react';
import ProductList from './ProductList.jsx';

function App() {
  const products = [
    { name: 'Durian', price: 1.0 },
    { name: 'Orange', price: 2.0 },
    { name: 'Grape', price: 3.0 },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;