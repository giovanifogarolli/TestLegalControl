import { useContext } from "react";
import { CartContext } from "./Context/cartContext";
import './styles/product_list.css'

const Product_List = ({products}) => {

    const {cartAddItem} = useContext(CartContext)
    
    return (
        <div className="product_list">
            {products.map((product) => (
            <div className='product_preview' key={product.id}>
                <img src={product.image}></img>
                <div className='product_description'> 
                    <p>{product.title}</p>
                    <button onClick={() => cartAddItem(product)}>R${product.price}</button>
                </div>
            </div>
            ))}
        </div>
    );
}
 
export default Product_List;