import { combineReducers } from "redux";
import counterReducer from "./counter-reducer";
import counterReducer2 from "./counter-reducer-2";

const allReducers = combineReducers( {
  Counter1: counterReducer,
  Counter2: counterReducer2,
} );

export default allReducers;
