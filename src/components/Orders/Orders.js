import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../Reviewitem/ReviewItem';

const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem = (id) =>{
        const remainingProducts = cart.filter(product => product.id !== id);
        setCart(remainingProducts);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
              {
                cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                ></ReviewItem>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;