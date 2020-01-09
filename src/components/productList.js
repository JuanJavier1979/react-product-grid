import React from 'react';
import ProductCard from './productCard';

const ProductList = ( props ) => {
  return (
    <section className="columns is-multiline">
      {props.list.map(product =>
        <ProductCard key={product.key} imageURL={product.image} productName={product.name} price={product.price} discountedPrice={product.discounted} discountPercentage={product.percentage} />
      )}
    </section>
  )
}

export default ProductList;