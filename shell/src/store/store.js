import { createStore } from "redux";
import allReducers from "../reducers/all-reducers";

const mainStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default mainStore;
