import 'devextreme/dist/css/dx.material.orange.light.css';
import 'zone.js'; // for angular subapp

import { initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';
import render from './render/ReactRender';
import mainStore from "./store/store";

render( { loading: true } );

const loader = ( loading ) => render( { loading } );

registerMicroApps(
  [
    {
      name: 'angular9',
      entry: '//localhost:7103',
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular9',
      props: {
        mainStore,
      },
    },
    {
      name: 'sales',
      entry: '//localhost:3002',
      container: '#subapp-viewport',
      loader,
      activeRule: '/sales',
      props: {
        mainStore,
      },
    },
    {
      name: "product", // app name registered
      // entry: "//micro-app1.netlify.app/",
      entry: "//localhost:3001/",
      container: "#subapp-viewport",
      loader,
      activeRule: "/product/list",
      props: {
        mainStore,
      },
    },
    {
      name: "product details", // app name registered
      // entry: "//micro-app1.netlify.app/",
      entry: "//localhost:3001/",
      container: "#subapp-viewport",
      loader,
      activeRule: "/product/details",
      props: {
        mainStore,
      },
    },
  ],
  {
    beforeLoad: [
      ( app ) => {
        console.log( '[LifeCycle] before load %c%s', 'color: green;', app.name );
      },
    ],
    beforeMount: [
      ( app ) => {
        console.log( '[LifeCycle] before mount %c%s', 'color: green;', app.name );
      },
    ],
    afterUnmount: [
      ( app ) => {
        console.log( '[LifeCycle] after unmount %c%s', 'color: green;', app.name );
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState( {
  user: 'qiankun',
} );

onGlobalStateChange( ( value, prev ) => console.log( '[onGlobalStateChange - master]:', value, prev ) );

setGlobalState( {
  ignore: 'master',
  user: {
    name: 'master',
  },
} );

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp( '/react16' );

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted( () => {
  console.log( '[MainApp] first app mounted' );
} );
