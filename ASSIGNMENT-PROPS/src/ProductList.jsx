import React from 'react';

function ProductList(props) {
  const products = props.products;
  const productListItems = [];

  products.forEach((product, index) => {
    productListItems.push(
      <li key={index}>
        {product.name}: ${product.price}
      </li>
    );
  });

  return <ul>{productListItems}</ul>;
}

export default ProductList;