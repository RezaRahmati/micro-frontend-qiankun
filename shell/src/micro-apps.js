import mainStore from "./store/store";

const microApps = [
  {
    name: "product", // app name registered
    // entry: "//micro-app1.netlify.app/",
    entry: "//localhost:3001/",
    container: "#subapp-viewport",
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
    activeRule: "/product/details",
    props: {
      mainStore,
    },
  },
  {
    name: "sales", // app name registered
    // entry: "//micro-app2.netlify.app/",
    entry: "//localhost:3002/",
    container: "#subapp-viewport",
    activeRule: "/sales/",
    props: {
      mainStore
    },
  },
];

export default microApps;
