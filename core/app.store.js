import { createStore, combineReducers, applyMiddleware } from "redux";
import Reducers from "./app.reducers";

export default createStore(combineReducers(Reducers));
