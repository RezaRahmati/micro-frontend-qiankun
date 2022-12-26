import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import increment from "./actions/counter";
import "./App.css";

function App ( props ) {
  const Counter1 = useSelector( ( state ) => state.Counter1 );
  const Counter2 = useSelector( ( state ) => state.Counter2 );

  const dispatch = useDispatch();

  return (
    <Router>
      <div className="header">
        <NavLink exact="true" to="/" className={ ( { isActive } ) => isActive ? "active-link link" : 'link' } >
          Home-Page
        </NavLink>
        <NavLink
          exact="true"
          to="/product"
          className={ ( { isActive } ) => isActive ? "active-link link" : 'link' }
        >
          Product
        </NavLink>
        {/* <NavLink
          exact="true"
          to="/sales"
          className={({ isActive }) => isActive? "active-link link": 'link'}
        >
          Sub-react2
        </NavLink> */}
      </div>
      <div className="content">
        <p>Passing counter to micro app1(Counter1) : { Counter1 }</p>
        <button
          onClick={ () => {
            dispatch( increment() );
          } }
        >
          increment - Counter1
        </button>

        <p> counter getting changed by micro app2 (Counter2) : { Counter2 }</p>
      </div>

      <div id="subapp-viewport"></div>
    </Router>
  );
}

export default App;
