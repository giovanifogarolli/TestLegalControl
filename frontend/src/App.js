import Home from './home';
import './App.css';
import { CartContextProvider } from './Context/cartProvider';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Home/>
      </CartContextProvider>
    </div>
  );
}

export default App;
