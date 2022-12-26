import mainStore from "./store/store";
// import incrementMicro2 from "./actions/counter2";

const microApps = [
  {
    name: "product", // app name registered
    // entry: "//micro-app1.netlify.app/",
    entry: "//localhost:3001/",
    container: "#subapp-viewport",
    activeRule: "/product",
    props: {
      mainStore,
    },
  },
  //   {
  //     name: "micro-react2", // app name registered
  //     // entry: "//micro-app2.netlify.app/",
  //     entry: "//localhost:3002/",
  //     container: "#subapp-viewport",
  //     activeRule: "/micro-react2",
  //     props: {
  //       mainstore,
  //       incrementMicro2,
  //     },
  //   },
];

export default microApps;
