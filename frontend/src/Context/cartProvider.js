import { CartContext } from "./cartContext";
import { useEffect, useState } from "react";

export const CartContextProvider = ({children}) => {

    const loadedCartList = JSON.parse(localStorage.getItem('cartList')) || ''

    const [cartItems, setCartItems] = useState(loadedCartList);
    const [cartItemsHandler, setCartHandler] = useState(cartItems);

    const cartAddItem = (product) =>{
        let added = false
        for(let i = 0; i<cartItems.length; i++){
            if (cartItems[i].id == product.id)
                added = true
        }
        if(!added){
            setCartItems([...cartItems, product])
        }else
            alert("Produto já adicionado.") 
    }

    const cartRemoveItem = (product) =>{
        setCartItems(cartItemsHandler.filter((obj) => obj.id !== product.id))
    }

    const cartCount = () =>{
        return cartItems.length
    }

    const cartRemoveAll = () => {
        setCartItems('')
    }

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartItems))
        setCartHandler(cartItems)
    },[cartItems])

    const contextValue = {cartItems, cartAddItem, cartRemoveItem, cartCount, cartRemoveAll}

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}