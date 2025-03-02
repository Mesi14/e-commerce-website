import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Routes, Route } from "react-router";
import PageNotFound from './pages/PageNotFound';
import { CartProvider } from './context/cart.jsx'
import Cart from './components/Cart.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
  
);
