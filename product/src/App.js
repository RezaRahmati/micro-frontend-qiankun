import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const Counter1 = useSelector( ( state ) => state.Counter1 );
  return (
    <div className="app">
      <h1>Product</h1>
      <h2>Counter1:- { Counter1 }</h2>
    </div>
  );
};

export default App;
