import { useState, useEffect, useContext } from 'react'
import Product_List from './product_list';
import { CartContext } from './Context/cartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './styles/home.css'


function Home() {

    const {cartCount} = useContext(CartContext)
    const[products, setProducts] = useState();
    const [input, setInput] = useState('')


    const inputHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                if(!res.ok){
                    throw Error('Não foi possivel buscar os dados, abra o console para mais informações')
                }
                return res.json()
            })
            .then((data) => {
                const results = data.filter((products) => {
                    return products.title.toLowerCase().includes(input.toLowerCase())
                })
                setProducts(results)
            })
            .catch( err =>{
                alert(err.message)
            })
    },[input]);

    return (
        <div className='home'>
            <div className='sidebar'>
                <p>legaltest</p>
            </div>
            <div className='navbar_container'>
                <div className='navbar'>
                    <div className='search_bar'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Entre com um texto" onChange={(e) => inputHandler(e)} ></input>
                    </div>
                    <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/> Carrinho({cartCount()})</Link>
                </div>
            </div>
            <div className='content_container'>
                {products && <Product_List products={products}/>}
            </div>
        </div>
    );
}

export default Home;