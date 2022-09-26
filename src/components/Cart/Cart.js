import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let total = 0;
    let shipping = 0;
    for(const product of props.cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {props.cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;