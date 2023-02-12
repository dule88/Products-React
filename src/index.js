import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { ProductsProvider } from './contexts/Products.Context';
import { CartProvider } from './contexts/CartContexts';

import { HashRouter as BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ProductsProvider>
      </CartProvider>

  </React.StrictMode>
);


