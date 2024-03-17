import { useEffect, useState } from "react"
import { useContext } from "react";
import { CartContext } from "./Context/cartContext";
import Cart_List from "./cart_list";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './styles/cart.css'

function Cart(){

    const {cartItems,cartCount,cartRemoveAll} = useContext(CartContext)
    
    const [cart, setCart] = useState()

    useEffect(() => {
        setCart(cartItems)
    },[cartItems])

    return(
        <div className="cart_components">
            <div className="sidebar">
                <p>legaltest</p>
            </div>
            <div className="navbarc_container">
                <div className="cart_navbar">
                    <Link to={"/"}><FontAwesomeIcon icon={faCartShopping}/> Carrinho({cartCount()})</Link>
                    <button onClick={() => cartRemoveAll()}><FontAwesomeIcon icon={faTrashCan} /> Remover todos os produtos</button>
                </div>
            </div>
            <div className="cart_container">
                {cart &&< Cart_List products={cart}/>}
            </div>
        </div>
    );
}

export default Cart