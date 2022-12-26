import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import "./public-path";

let root = null;

const microStore = createStore(
  (
    state = {
      Counter1: "Counter1 will show up when we integrate with main app",
    }
  ) => {
    return state;
  }
);

// to start separately
if ( !window.__POWERED_BY_QIANKUN__ ) {
  const rootElm = document.getElementById( 'root' );

  if ( !root ) {
    root = createRoot( rootElm );
  }

  root.render(
    <Provider store={ microStore }>
      <App />
    </Provider>
  );
}

export async function bootstrap () {
  console.log( "product app bootstrap" );
}

// mount
export async function mount ( props ) {
  const { container, mainStore } = props;

  const rootElm = container ? container.querySelector( "#root" ) : document.getElementById( 'root' );

  if ( !root ) {
    root = createRoot( rootElm );
  }

  root.render(
    <Provider store={ mainStore }>
      <App />
    </Provider>
  );
}

// unmount
export async function unmount ( props ) {
  const { container } = props;

  const rootElm = container ? container.querySelector( "#root" ) : document.getElementById( 'root' );

  if ( !root ) {
    root = createRoot( rootElm );
  }

  root.unmount();
  root = null;
}
