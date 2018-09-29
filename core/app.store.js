import { createStore, combineReducers, applyMiddleware } from "redux";
import * as Reducers from "./app.reducers";

export default createStore(combineReducers(Reducers));
