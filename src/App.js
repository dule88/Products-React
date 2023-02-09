import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import CartOfProducts from './pages/CartOfProducts';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound.js';



const App =() => {

  return (
    <div className="App">
     
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path= '/' element= {<ProductList/>}></Route>
        <Route path= '/productList' element= {<ProductList/>}></Route>
        <Route path='/cartOfProducts' element= {<CartOfProducts/>}></Route>
        <Route path= '/*' element= {<NotFound/>}></Route> 
      </Routes>

    </BrowserRouter>     

    </div>
  );
}

export default App;
