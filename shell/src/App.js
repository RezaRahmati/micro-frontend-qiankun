import 'devextreme/dist/css/dx.material.orange.light.css';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, NavLink } from "react-router-dom";
import clearUser from './actions/clear-user';
import setUser from './actions/set-user';
import "./App.css";

function App ( props ) {
  const user = useSelector( ( state ) => state.user );

  const dispatch = useDispatch();

  function dispatchLogin () {
    console.log( 'dispatch setUser' )
    dispatch( setUser( { name: 'Reza' } ) )
  }

  function dispatchLogout () {
    console.log( 'dispatch clearUser' )
    dispatch( clearUser() )
  }

  return (
    <BrowserRouter>
      <div className="header">
        <NavLink exact="true" to="/" className={ ( { isActive } ) => isActive ? "active-link link" : 'link' } >
          Home-Page
        </NavLink>
        <NavLink
          exact="true"
          to="/product/list"
          className={ ( { isActive } ) => isActive ? "active-link link" : 'link' }
        >
          Product
        </NavLink>
        <NavLink
          exact="true"
          to="/sales"
          className={ ( { isActive } ) => isActive ? "active-link link" : 'link' }
        >
          Sales
        </NavLink>
        { user?.name ? <>
          <button className='link' onClick={ dispatchLogout }>Logout&nbsp;{ user.name }</button>
        </> :
          <button className='link' onClick={ dispatchLogin }>Login</button>
        }
      </div>

      <div id="subapp-viewport"></div>
    </BrowserRouter>
  );
}

export default App;
