import { useState, useEffect, useContext } from 'react'
import Product_List from './product_list';
import { CartContext } from './Context/cartContext';

function Home() {

    const[products, setProducts] = useState();


    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        fetch('http://localhost:8000/products')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            const results = data.filter((products) => {
                return products.title.toLowerCase().includes(input.toLowerCase())
            })
            setProducts(results)
        })
    },[input]);

    return (
        <div className='home'>
            <input type="text" placeholder="Entre com um texto" onChange={(e) => inputHandler(e)} ></input>
            {products && <Product_List products={products}/>}
        </div>
    );
}

export default Home;