import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../assets/reducers";
import mySaga from "./sagas/sagas";

 // create the saga middleware
 const sagaMiddleware = createSagaMiddleware();
 // mount it on the Store
 export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
 
 // then run the saga
 sagaMiddleware.run(mySaga);