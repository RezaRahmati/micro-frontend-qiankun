import { registerMicroApps, start } from "qiankun";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import microApps from './micro-apps';
import reportWebVitals from "./reportWebVitals";
import mainStore from "./store/store";

const container = document.getElementById( 'root' );
const root = createRoot( container );

root.render(
  <Provider store={ mainStore }>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps( microApps );

start();
