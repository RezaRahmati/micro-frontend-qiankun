import 'devextreme/dist/css/dx.material.orange.light.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from './layout/layout';
import { ProductDetails } from './product-details/product-details';
import { ProductList } from './product-list/product-list';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <ProductList /> } />
            <Route path="product/list" element={ <ProductList /> } />
            <Route path="product/details/:id" element={ <ProductDetails /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
