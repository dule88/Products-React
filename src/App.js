import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { CartProvider } from './contexts/CartContexts';

// import { NumberProvider } from './contexts/NumberContext';
import { ProductsProvider } from './contexts/Products.Context';



const App =() => {
  return (
    <div className="App">
      
      <CartProvider>
      <ProductsProvider>
     
        <Navbar/>
        <Products/>
        <Cart/>
  
      </ProductsProvider>
      </CartProvider>

    </div>
  );
}

export default App;
