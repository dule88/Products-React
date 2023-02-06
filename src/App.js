import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

import { NumberProvider } from './contexts/NumberContext';
import { ProductsProvider } from './contexts/Products.Context';



const App =() => {
  return (
    <div className="App">
      

      <ProductsProvider>
      <NumberProvider>
        <Navbar/>
        <Products/>
        <Cart/>
      </NumberProvider>
      </ProductsProvider>
      

    </div>
  );
}

export default App;
