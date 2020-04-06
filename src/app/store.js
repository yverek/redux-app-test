import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { rootSaga } from './saga';
import starwarsApp from './reducers';

function* exampleSaga() {
  console.log("Example saga reached");
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(starwarsApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store