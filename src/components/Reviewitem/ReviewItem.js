import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveItem}) => {
    const {id,name, price, quantity, img, shipping} = product;
    return (
        <div className='total-items'>
            <div className='review-item'>
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h5>Price: ${price}</h5>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Shipping: ${shipping}</h5>
                </div>
            </div>
            <button onClick={()=>handleRemoveItem(id)} className='delete-icon'>❌</button>
        </div>
    );
};

export default ReviewItem;