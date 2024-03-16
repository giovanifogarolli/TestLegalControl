import { CartContext } from "./cartContext";
import { useEffect, useState } from "react";

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const cartAddItem = (product) =>{
        console.log(product)
        setCartItems([...cartItems, product])
    }

    const cartRemoveItem = (id) =>{
        setCartItems(cartItems.filter(cartItems !== id))
    }

    const cartCount = () =>{
        return cartItems.length
    }

    useEffect(() => {
        console.log(cartItems.length)
    },[cartItems])

    const contextValue = {cartItems, cartAddItem, cartRemoveItem, cartCount}

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}