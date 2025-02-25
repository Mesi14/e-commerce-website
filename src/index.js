import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import PageNotFound from './pages/PageNotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
         <Route path="/" element={<Home />} />
         {/* <Route path="/details/:id" element={<Details />} /> */}
         <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
