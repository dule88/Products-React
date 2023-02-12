import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useContext} from 'react'

import ProductsContext from './contexts/Products.Context';

import Navbar from './components/Navbar/Navbar';
import CartOfProducts from './pages/CartOfProducts';
import ProductList from './pages/Products/ProductList';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';






const App =() => {

  const {loading} = useContext(ProductsContext);

  return (
    <div className="App">

      {loading 
      ? 
      <div className="center">
        <div className="ring"></div>
        <span>Loading...</span>
      </div>
      :
      <BrowserRouter>
        <Navbar/>
          
        <Routes>
          <Route path= '/' element= {<ProductList/>}></Route>
          <Route path= '/productList' element= {<ProductList/>}></Route>
          <Route path='/cartOfProducts' element= {<CartOfProducts/>}></Route>
          <Route path= '/*' element= {<NotFound/>}></Route> 
        </Routes>
          
        <Footer/>
      </BrowserRouter>     

      }
    </div>
  );
}

export default App;
