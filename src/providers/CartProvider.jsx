import React, { useEffect, useState } from 'react';
import { CartContext } from './Context';
import { getCart } from '../utilis';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        // check to localStorage whether there is the data or not
        setCart(getCart())
    },[])
    return (
        <CartContext.Provider value={{ cart, setCart }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;