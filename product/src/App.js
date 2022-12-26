import 'devextreme/dist/css/dx.material.orange.light.css';
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { ProductList } from './product-list/product-list';

const App = () => {

  const Counter1 = useSelector( ( state ) => state.Counter1 );
  return (
    <div className="app">
      <h1>Product</h1>
      <h2>Counter1:- { Counter1 }</h2>
      <ProductList />
    </div>
  );
};

export default App;
