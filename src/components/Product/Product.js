import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name, img, seller, price, ratings} = props.product;
    // console.log(props.product);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <div className='product-info'>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;