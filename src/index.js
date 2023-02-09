import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './contexts/Products.Context';
import { CartProvider } from './contexts/CartContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <CartProvider>
      <ProductsProvider>

        <App />

    </ProductsProvider>
      </CartProvider>

  </React.StrictMode>
);


