import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";



const sagaMiddleware = createSagaMiddleware();


const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      composeWithDevTools())
    )
  sagaMiddleware(rootSaga())
  store.dispatch({type: 'HELLO' })


  return store;

}
export default configureStore;