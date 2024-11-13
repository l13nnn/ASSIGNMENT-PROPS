import React from 'react';

function ProductList(props) {
  const products = props.products;
  const productListItems = [];

  products.forEach((product, index) => {
    productListItems.push(
      <li key={index}>
        {product.name}: {product.inStock ? 'In Stock' : 'Out of Stock'}
      </li>
    );
  });

  return <ul>{productListItems}</ul>;
}

export default ProductList;