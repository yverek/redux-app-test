import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import { swFilmSaga, swPeopleSaga } from './saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(swFilmSaga, swPeopleSaga)

export default store