import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers(reducers);

const w: any = window;
const store = createStore(
  rootReducer,
  
  applyMiddleware(thunk)
);

export default store;
