import React from 'react';
import ProductCard from './productCard';

const ProductList = ( props ) => {
  return (
    <section className={`columns ${props.device}`}>
      {props.list.map(product =>
        <ProductCard 
          key={product.key}
          columnsMobile={props.columnsMobile} 
          columnsDesktop={props.columnsDesktop}
          imageURL={product.image}
          productName={product.name}
          price={product.price}
          discountedPrice={product.discounted}
          discountPercentage={product.percentage} />
      )}
    </section>
  )
}

export default ProductList;