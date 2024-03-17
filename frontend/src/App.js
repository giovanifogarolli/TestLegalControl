import Home from './home';
import Cart from './cart'
import './styles/reset.css';
import { CartContextProvider } from './Context/cartProvider';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
