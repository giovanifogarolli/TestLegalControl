import { useContext } from "react";
import { CartContext } from "./Context/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './styles/cart_list.css'

const Cart_List = ({products}) => {

    const {cartRemoveItem} = useContext(CartContext)

    const calcprice = () => {
        let price = 0
        for(let i = 0; i<products.length; i++){
            price = price + products[i].price
        }
        return price
    }

    let total = calcprice();
    
    return (
        <div className="cart_list">
            {products && products.map((product) => (
            <div className='cart-product_preview' key={product.id}>
                <img src={product.image}></img>
                
                <div className="cart-product_description">
                    <button onClick={() => cartRemoveItem(product)}><FontAwesomeIcon icon={faTrashCan} /></button>
                    <div className='cart-product_info'> 
                        <p className="product_title">{product.title}</p>
                        <div className="cart-product_price">
                            <p className="product_price-title">Preço à vista</p>
                            <p className="product_price">R${product.price}</p>
                        </div>
                    </div>                    
                </div>
            </div>
            ))}
            <div className="price_preview">
                <div className="total-price_info">
                    <span>Valor dos produtos: </span> 
                    <span id="total-price">R${total}</span>
                </div>
                <div className="total-price_btn">
                    <button>Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}
 
export default Cart_List;