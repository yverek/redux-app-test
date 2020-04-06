import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";


const configureStore = () => {
  const store  =  createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTESIONS__ &&
    // window.__REDUX_DEVTOOLS_EXTESIONS__()
    )
    return store;
}
export default configureStore;