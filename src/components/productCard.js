import React from 'react';

const ProductCard = ( props ) => {
  const isDiscountedClass = (props.discountedPrice !== undefined) ? 'has-discount' : '';
  const showDiscountedPrice = (props.discountedPrice !== undefined) ? 'is-discount' : 'hide';

  return (
    <article className={`column has-text-centered ${props.columnsMobile} ${props.columnsDesktop}`}>
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <figure className="image">
              <img src={require(`../images/${props.imageURL}.jpeg`)} alt={props.productName} />
            </figure>
          </div>

          <div className="content">
            <p className="product-name">{props.productName}</p>
            <p className={isDiscountedClass}>{props.price}€</p>
            <p className={showDiscountedPrice}>{props.discountedPrice}€({props.discountPercentage}%)</p>
            <p className="more-colors">más colores</p>
            <a className="button has-background-info has-text-white" role="button" tabIndex="0">Añadir</a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard;